import { Typography } from '@mui/material';

export interface warnProps {
  message: string;
}

export const Warn: React.FC<warnProps> = ({ message }) => {
  return (
    <Typography>
      <span style={{ color: '#FFA500' }}>[WARN]</span>: {message}
    </Typography>
  );
};
