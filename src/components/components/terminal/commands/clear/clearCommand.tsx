import { CommandHandler } from "../../../../../commons-utils";
import { ContextError } from "../errors/ContextError";

export const clearCommand: CommandHandler = (ctx) => {
  const context = ctx.inject?.terminalContext;
  if (!context) {
    return { response: <ContextError contextName="Folder" /> };
  }

  return {
    toBeExecuted: [
      {
        function: context.clearCommandHistory,
        args: [],
      },
    ],
  };
};
