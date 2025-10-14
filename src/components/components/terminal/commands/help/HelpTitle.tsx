import { Grid, Typography } from '@mui/material';

export const HelpTitle = () => {
  return (
    <Grid
      sx={{ display: 'inline-block', border: '1px solid #00FF88' }}
      display={'flex'}
      justifyContent={'center'}
      gap={2}
      padding={2}
    >
      <Typography textAlign={'center'}>
        <span role="img" aria-label="brain">
          🧠
        </span>{' '}
        List of available commands:
      </Typography>
    </Grid>
  );
};
