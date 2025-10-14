import { Typography } from "@mui/material";
import { CommandHandler } from "../../../../../commons-utils";

export const lsCommand: CommandHandler = (ctx) => {
  const context = ctx.inject?.folderContext;

  if (!context) {
    return {
      response: <Typography>Error: Folder context is not available</Typography>,
    };
  }

  const ariane = context.currentAriane;
  const actualFolder = ariane[ariane.length - 1];

  const childrenList = actualFolder.children
    ?.map((child) => child.name)
    .join(", ");
  return {
    response:
      childrenList?.length === 0 ? (
        <Typography>Empty</Typography>
      ) : (
        <Typography variant="folders">{childrenList}</Typography>
      ),
  };
};
