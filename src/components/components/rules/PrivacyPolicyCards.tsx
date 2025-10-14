import {
  Grid,
  Card,
  CardContent,
  Typography,
  Divider,
  Link,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

export const PrivacyPolicyCards = () => {
  return (
    <>
      <Grid size={{ xs: 12 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="subtitle1" color="textSecondary">
              Responsable
            </Typography>
            <Divider />
            <Typography variant="h6">THS (association de fait)</Typography>
            <Typography variant="body2">
              Contact :{' '}
              <Link href="mailto:admin@ths-airsoft.com">
                admin@ths-airsoft.com
              </Link>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="subtitle1" color="textSecondary">
              Finalités
            </Typography>
            <Divider />
            <List dense>
              <ListItem disableGutters>
                <ListItemText primary="Gérer l'inscription" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="Envoyer email de confirmation" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="Contacter si nécessaire" />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="subtitle1" color="textSecondary">
              Durée
            </Typography>
            <Divider />
            <Typography variant="h6">Jusqu'à la fin de l'événement</Typography>
            <Typography variant="body2">
              Suppression automatique au plus tard <strong>3 mois</strong> après
              la fin.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};
