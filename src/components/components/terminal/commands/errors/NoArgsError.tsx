import { Typography } from '@mui/material';
import { getUsageError } from './utils';
import { CommandNames } from '..';

interface IWrongArgsError {
  commandName: CommandNames;
}

export const WrongArgsError: React.FC<IWrongArgsError> = ({ commandName }) => {
  return (
    <Typography>
      Invalid arguments.
      <br /> Usage: <br />
      {getUsageError(commandName)}
    </Typography>
  );
};
