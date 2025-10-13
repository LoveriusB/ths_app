import { Typography } from '@mui/material';

export interface infoProps {
  message: string;
}

export const Info: React.FC<infoProps> = ({ message }) => {
  return (
    <Typography>
      <span style={{ color: '#00FFFF' }}>[INFO]</span>: {message}
    </Typography>
  );
};
