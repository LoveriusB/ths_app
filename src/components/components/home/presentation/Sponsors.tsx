import { Divider, Grid, Paper, Typography } from '@mui/material';
import { TheUnitSponsor } from './sponsors/TheUnitSponsor';
import { FortTeteDeLoursSponsor } from './sponsors/FortTeteDeLoursSponsor';
import { ProtectOrSaveSponsor } from './sponsors/ProtecteOrSaveSponsor';
import { OwledgeSponsor } from './sponsors/OwledgeSponsor';
import { TheShootingBarSponsor } from './sponsors/TheSHootingBar';
import { ABZAVSponsor } from './sponsors/ABZAVSponsor';

export interface SponsorsProps {
  [key: string]: string;
}

export const Sponsors: React.FC<SponsorsProps> = () => {
  return (
    <Grid container justifyContent={'center'} width={'100%'} marginBottom={2}>
      <Grid size={{ xs: 11.5, sm: 11.5, md: 11, lg: 11, xl: 8 }}>
        <Paper variant="homePaper">
          <Grid container justifyContent={'center'} width={'100%'} padding={2}>
            <Grid container flexDirection={'column'} alignItems={'center'}>
              <Typography variant="h4">Partenaires</Typography>
              <Typography variant="caption">
                Cliquez pour découvrir nos partenaires. Certains ont un cadeau
                pour vous !
              </Typography>
            </Grid>
          </Grid>
          <Divider />
          <Grid
            container
            size={{ xs: 12 }}
            justifyContent={'center'}
            padding={2}
            spacing={2}
          >
            <Grid container justifyContent={'center'} spacing={2}>
              <TheUnitSponsor />
              <FortTeteDeLoursSponsor />
              <ProtectOrSaveSponsor />
            </Grid>
            <Grid container justifyContent={'center'} spacing={2}>
              <OwledgeSponsor />
              <TheShootingBarSponsor />
              <ABZAVSponsor />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};
