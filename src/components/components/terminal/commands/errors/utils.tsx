import { Grid } from '@mui/material';
import { CommandNames } from '..';

export const getUsageError = (commandName: CommandNames) => {
  switch (commandName) {
    case CommandNames.FILE:
      return <code>file [path]</code>;
    case CommandNames.CHANGE_DIRECTORY:
      return (
        <Grid>
          <code>cd [path]</code>
          <br />
          <code>or if you want to come back in arborescence</code>
          <br />
          <code>cd ..</code>
        </Grid>
      );
    default:
      return <code>Invalid arguments, type 'help' for more information</code>;
  }
};
