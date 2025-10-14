import { Typography } from "@mui/material";
import { CommandHandler } from "../../../../../commons-utils";

export const defaultCommand: CommandHandler = (_ctx) => {
  console.log(_ctx);
  return {
    response: (
      <Typography>
        Command not found. Type "help" for a list of available commands.
      </Typography>
    ),
  };
};
