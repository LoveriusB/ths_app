import { Typography } from '@mui/material';
import { FC } from 'react';

interface IContextError {
  contextName: string;
}

export const ContextError: FC<IContextError> = ({ contextName }) => {
  return (
    <Typography>Error: {contextName} context is not available.</Typography>
  );
};
