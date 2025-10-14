import { Grid, Typography } from '@mui/material';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';

export interface RulesDisclaimerProps {
  text: string;
}

export const RulesDisclaimer: React.FC<RulesDisclaimerProps> = ({ text }) => {
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      wrap="nowrap"
      alignItems="center"
      sx={{ mb: 3 }}
    >
      <WarningAmberOutlinedIcon color="warning" />
      <Typography>{text}</Typography>
      <WarningAmberOutlinedIcon color="warning" />
    </Grid>
  );
};
