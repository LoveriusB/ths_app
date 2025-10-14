import { Grid, Typography } from '@mui/material';

export const Introduction = () => {
  return (
    <Grid>
      <Typography variant="body1">
        Welcome to the THS interactive web terminal. Congratulation on ending up
        here.
      </Typography>
      <Typography variant="body1">
        You have completed step on of our challenge. Well done. Take a pen and a
        sheet of paper, you'll need it.
      </Typography>
      <Typography variant="body1">
        Hint: Type <span style={{ color: '#00FF88' }}>'help'</span> for a list
        of available commands.
      </Typography>
    </Grid>
  );
};
