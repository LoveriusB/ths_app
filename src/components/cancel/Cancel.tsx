import { Button, Grid, Paper, Typography } from "@mui/material";

export interface CancelProps {
  [key: string]: string;
}

export const Cancel: React.FC<CancelProps> = () => {
  return (
    <Grid
      container
      spacing={2}
      alignItems={"center"}
      justifyContent={"center"}
      height={"100vh"}
    >
      <Grid size={{ xs: 12, sm: 10, md: 8, lg: 6, xl: 4 }}>
        <Paper elevation={24}>
          <Grid container spacing={2} justifyContent={"center"}>
            <Typography variant="h2" color="#ec3e3eff">
              Annulé
            </Typography>
          </Grid>
          <Grid container spacing={2} justifyContent={"center"}>
            <Typography variant="h6">Votre paiement a été annulé.</Typography>
          </Grid>
          <Grid container spacing={2} justifyContent={"center"}>
            <Button
              onClick={() => {
                const a = document.createElement("a");
                a.href = "/";
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
