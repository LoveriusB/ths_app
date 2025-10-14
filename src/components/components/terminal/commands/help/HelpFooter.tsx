import { Typography } from '@mui/material';

export const HelpFooter = () => {
  return (
    <Typography>
      <span role="img" aria-label="light bulb">
        💡
      </span>{' '}
      Type a command to execute it, or <strong>help</strong> to return here.
    </Typography>
  );
};
