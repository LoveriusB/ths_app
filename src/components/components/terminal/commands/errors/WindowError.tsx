import { Typography } from '@mui/material';

export interface WindowErrorProps {
  fileName: string;
}

export const WindowError: React.FC<WindowErrorProps> = ({ fileName }) => {
  return <Typography>{fileName} does not exist.</Typography>;
};
