import { Grid, Typography } from "@mui/material";
import { FC } from "react";
import { CommandEntry } from "../../../../../commons-utils";

interface IHelpSectionProps {
  commandName: string; // The name of the command to display
  command: CommandEntry; // The command entry containing metadata and handler
}

export const HelpSection: FC<IHelpSectionProps> = ({
  commandName,
  command,
}) => {
  return (
    <Grid key={commandName} sx={{ padding: 1 }}>
      <Typography>
        <span role="img" aria-label="package">
          📦
        </span>{" "}
        {commandName}
      </Typography>
      <Grid position={"relative"} marginLeft={"1rem"}>
        <span> ↪ {command.meta?.description}</span>
        <br />
        <span role="img" aria-label="scroll">
          🧾
        </span>{" "}
        Usage: {command.meta?.usage}
        <br />
        <span role="img" aria-label="gear">
          ⚙️
        </span>{" "}
        Options:{" "}
        {(command.meta?.options?.length ?? 0) > 0
          ? command.meta?.options?.join(", ")
          : "none"}
        <br />
      </Grid>
    </Grid>
  );
};
