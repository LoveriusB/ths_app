import { Typography } from '@mui/material';

export interface okProps {
  message: string;
}

export const Ok: React.FC<okProps> = ({ message }) => {
  return (
    <Typography>
      <span style={{ color: '#00FF00' }}>[OK]</span>: {message}
    </Typography>
  );
};
