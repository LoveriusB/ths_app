import { Typography } from "@mui/material";
import { CommandHandler, rootFolder } from "../../../../../commons-utils";
import { ContextError } from "../errors/ContextError";
import { WrongArgsError } from "../errors/NoArgsError";
import { CommandNames } from "..";

export const changeDirectoryCommand: CommandHandler = (ctx) => {
  const context = ctx.inject?.folderContext;
  if (!context) {
    return { response: <ContextError contextName="Folder" /> };
  }
  const { args } = ctx;
  if (args.length === 0)
    return {
      response: <WrongArgsError commandName={CommandNames.CHANGE_DIRECTORY} />,
    };

  const targetFolder = args[0];
  const currentAriane = context.currentAriane;
  const currentFolder = currentAriane[currentAriane.length - 1];
  const isTargetFolderNotInChildren = currentFolder?.children?.every(
    (child) => child.name !== targetFolder
  );

  if (targetFolder === ".." && currentFolder === rootFolder) {
    return {
      response: <Typography>You are already at the root folder.</Typography>,
    };
  }
  if (targetFolder !== ".." && isTargetFolderNotInChildren) {
    return {
      response: (
        <Typography>
          directory {args[0]} does not exist
          <br />
          <code>cd [directory]</code>
        </Typography>
      ),
    };
  }

  // context.openNewFolder(args[0]);
  return {
    toBeExecuted: [
      {
        function: context.openNewFolder,
        args: args[0] as string,
      },
    ],
  };
};
