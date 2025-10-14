import { Button, Grid, Paper, Typography } from '@mui/material';

export interface SuccessProps {
  [key: string]: string;
}

export const Success: React.FC<SuccessProps> = () => {
  return (
    <Grid
      container
      spacing={2}
      alignItems={'center'}
      justifyContent={'center'}
      height={'100vh'}
    >
      <Grid size={{ xs: 12, sm: 10, md: 8, lg: 6, xl: 4 }}>
        <Paper sx={{ padding: 4 }}>
          <Grid container spacing={2} justifyContent={'center'}>
            <Typography variant="h2" color="#49e9a3" textAlign={'center'}>
              Succès
            </Typography>
          </Grid>
          <Grid container spacing={2} justifyContent={'center'}>
            <Typography variant="h6" textAlign={'center'}>
              Merci pour votre confiance! à très bientôt!
            </Typography>
            <Typography variant="h6" textAlign={'center'}>
              L'organisateur vous contactera prochainement par mail!
            </Typography>
          </Grid>
          <Grid container spacing={2} justifyContent={'center'}>
            <Button
              onClick={() => {
                const a = document.createElement('a');
                a.href = '/';
                a.click();
              }}
            >
              Retour à l'accueil
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};
