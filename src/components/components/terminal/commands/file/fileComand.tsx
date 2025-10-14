import { Grid } from "@mui/material";
import {
  CommandHandler,
  Ok,
  Info,
  Warn,
  Done,
} from "../../../../../commons-utils";
import { ContextError } from "../errors/ContextError";
import { isEmpty } from "lodash";
import { WrongArgsError } from "../errors/NoArgsError";
import { CommandNames } from "..";

export const fileCommand: CommandHandler = (ctx) => {
  const windowContext = ctx.inject?.windowContext;
  const terminalContext = ctx.inject?.terminalContext;

  if (!ctx.inject || !windowContext) {
    return { response: <ContextError contextName="Window" /> };
  }

  if (!ctx.inject || !terminalContext) {
    return { response: <ContextError contextName="Terminal" /> };
  }

  if (isEmpty(ctx.args)) {
    return { response: <WrongArgsError commandName={CommandNames.FILE} /> };
  }

  const latency = Math.round(Math.random() * 100);
  return {
    response: (
      <Grid>
        Opening {ctx.args[0]}... <br />$ init photo-upload --secure --debug
      </Grid>
    ),
    toBeExecuted: [
      {
        function: windowContext.openWindow,
        args: [ctx.args[0]],
      },
    ],
    toBeBuffered: [
      <Info message={`Loading file: ${ctx.args[0]} locally...`} />,
      <Info message="Initializing secure protocol (TLS v1.3)..." />,
      <Ok
        message={`Encrypted connection established with aws.BScloud.net (latency: ${latency} ms)`}
      />,
      <Warn message="File contains suspicious metadata (EXIF tag: GhostShot v3.1)" />,
      <Info message="Cleaning up metadata..." />,
      <Ok message="File ready for encoding" />,
      <Info message="Downloading picture..." />,
      <Done message="Done." />,
    ],
  };
};
