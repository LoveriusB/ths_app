import { Typography } from '@mui/material';

export interface errorProps {
  message: string;
}

export const Error: React.FC<errorProps> = ({ message }) => {
  return (
    <Typography>
      <span style={{ color: '#CC3333' }}>[ERROR]</span>: {message}
    </Typography>
  );
};
