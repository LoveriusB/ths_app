import { Typography } from "@mui/material";
import { isNil } from "lodash";
import {
  CommandEntry,
  CommandRegistry,
  DependencyContextMap,
  FunctionToExecute,
} from "../../../../commons-utils";
import { changeDirectoryCommand } from "./cd/changeDirectoryCommand";
import { clearCommand } from "./clear/clearCommand";
import { defaultCommand } from "./default/defaultCommand";
import { fileCommand } from "./file/fileComand";
import { helpCommand } from "./help/helpCommand";
import { lsCommand } from "./ls/lsCommand";

export enum CommandNames {
  HELP = "help",
  CHANGE_DIRECTORY = "cd",
  LS = "ls",
  CLEAR = "clear",
  FILE = "file",
}

export const commands: CommandRegistry = {
  [CommandNames.HELP]: {
    handler: helpCommand,
    meta: {
      description:
        "Displays this help message with a list of available commands.",
      usage: "help",
      options: [],
      strictArgs: true,
    },
  },
  [CommandNames.CHANGE_DIRECTORY]: {
    handler: changeDirectoryCommand,
    inject: ["folderContext"], // Injects folderContext for directory operations
    meta: {
      description:
        'Change the current directory. Use "cd [directory]" to change to target directory. To go back, use "cd ..".',
      usage: "cd [directory]",
      options: [],
      strictArgs: false, // Allows any directory name, including those with spaces
    },
  },
  [CommandNames.LS]: {
    handler: lsCommand,
    inject: ["folderContext"],
    meta: {
      description: "List files and directories in the current directory.",
      usage: "ls",
      options: [],
      strictArgs: true,
    },
  },
  [CommandNames.CLEAR]: {
    handler: clearCommand,
    inject: ["terminalContext"],
    meta: {
      description: "List files and directories in the current directory.",
      usage: "ls",
      options: [],
      strictArgs: true,
    },
  },
  [CommandNames.FILE]: {
    handler: fileCommand,
    inject: ["windowContext", "terminalContext"],
    meta: {
      description: "Open a specific file.",
      usage: "file [fileName]",
      options: [],
      strictArgs: false,
    },
  },
  default: {
    handler: defaultCommand,
    meta: {
      description: "Default command executed when no command is found.",
      usage: "defaultCommand",
      options: [],
    },
  },
};

export const invalidArg = (command: CommandEntry, args: string[]) => {
  if (!command.meta?.strictArgs) {
    return;
  }
  const validArgs = command.meta?.options || [];
  for (const arg of args) {
    if (!validArgs.includes(arg)) {
      return arg;
    }
  }
  return;
};

export const getCommandName = (input: string) => {
  const splitInput = input.trim().split(" ");
  return splitInput[0] as CommandNames;
};

export const executeCommands = (input?: FunctionToExecute[]) => {
  if (isNil(input) || input.length === 0) {
    return;
  }
  input.forEach(({ function: func, args }) => {
    func(args as string[] & string);
  });
};

export const getCommandData = (
  input: string,
  allContexts: DependencyContextMap
) => {
  const commandName = getCommandName(input);
  const args = input
    .trim()
    .split(" ")
    .slice(1);
  const command = commands[commandName] ?? commands.default;

  const invalidArgItem = invalidArg(command, args);

  if (invalidArgItem) {
    return {
      response: (
        <Typography>
          Invalid arguments "{invalidArgItem}" for the "{commandName}" command.
          Use help for more information.
        </Typography>
      ),
    };
  }

  const inject: Partial<DependencyContextMap> = {};
  command.inject?.forEach((key) => {
    if (allContexts[key]) {
      // TODO: Fix this
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      inject[key] = allContexts[key] as any;
    }
  });

  return command.handler({
    args,
    inject,
  });
};
