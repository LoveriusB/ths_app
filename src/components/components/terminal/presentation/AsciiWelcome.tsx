import { Grid, Typography } from '@mui/material';

export const AsciiWelcome = () => (
  <Grid container justifyContent="center" alignItems="center">
    <Typography variant="ascii">
      <pre>
        {`
  _______       _    _        _____                _                         __   _
 |__   __|     | |  | |      / ____|       /\\     (_)                       / _| | |
    | |        | |__| |     | (___        /  \\     _   _ __   ___    ___   | |_  | |_
    | |        |  __  |      \\___ \\      / /\\ \\   | | | '__| / __|  / _ \\  |  _| | __|
    | |     _  | |  | |  _   ____) |    / ____ \\  | | | |    \\__ \\ | (_) | | |   | |_
    |_|    (_) |_|  |_| (_) |_____/    /_/    \\_\\ |_| |_|    |___/  \\___/  |_|    \\__|
    `}
      </pre>
    </Typography>
  </Grid>
);
