import {
  Grid,
  Card,
  CardContent,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

export const EventRulesCards = () => {
  return (
    <>
      {/* Obligations (Sécurité) */}
      <Grid size={{ xs: 12, md: 4 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="subtitle1" color="textSecondary">
              Sécurité
            </Typography>
            <Divider />
            <Typography variant="h6" sx={{ mt: 1 }}>
              Obligations
            </Typography>
            <List dense>
              <ListItem disableGutters>
                <ListItemText primary="Lunettes obligatoires (filet / mesh interdit)" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="Aucun tir hors zone de jeu/chrony" />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Grid>

      {/* Conduite en jeu */}
      <Grid size={{ xs: 12, md: 4 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="subtitle1" color="textSecondary">
              Jeu & fair-play
            </Typography>
            <Divider />
            <Typography variant="h6" sx={{ mt: 1 }}>
              Conduite
            </Typography>
            <List dense>
              <ListItem disableGutters>
                <ListItemText primary="Prenez vos hits & Pas de blind fire" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="Les marshals ont toujours raison" />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Grid>

      {/* Chrony & puissance */}
      <Grid size={{ xs: 12, md: 4 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography variant="subtitle1" color="textSecondary">
              Chrony & puissance
            </Typography>
            <Divider />
            <Typography variant="h6" sx={{ mt: 1 }}>
              Contrôles
            </Typography>
            <List dense>
              <ListItem disableGutters>
                <ListItemText primary="Chrony avant de jouer obligatoire" />
              </ListItem>
              <ListItem disableGutters>
                <ListItemText primary="Seuil ≤ 1,99 J & Tolérance 0. Seul notre chroni compte." />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};
