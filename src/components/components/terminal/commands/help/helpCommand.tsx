import { Grid } from "@mui/material";
import { CommandNames, commands } from "..";
import { CommandHandler } from "../../../../../commons-utils";
import { HelpFooter } from "./HelpFooter";
import { HelpSection } from "./HelpSection";
import { HelpTitle } from "./HelpTitle";

export const helpCommand: CommandHandler = (_ctx) => {
  console.log(_ctx);
  return {
    response: (
      <Grid>
        <HelpTitle />
        {Object.entries(CommandNames).map(([name, commandName]) => {
          const command = commands[commandName];
          return (
            <HelpSection
              key={name}
              command={command}
              commandName={commandName}
            />
          );
        })}
        <HelpFooter />
      </Grid>
    ),
  };
};
