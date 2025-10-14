import {
  Box,
  Typography,
  Stack,
  Grid,
  Divider,
  Alert,
  AlertTitle,
} from '@mui/material';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import SecurityIcon from '@mui/icons-material/SecurityOutlined';
import SportsEsportsIcon from '@mui/icons-material/SportsEsportsOutlined';
import WhatshotIcon from '@mui/icons-material/WhatshotOutlined';
import SpeedIcon from '@mui/icons-material/SpeedOutlined';
import { BadgesList } from '../misc/BadgesList';
import { RulesFooter } from './RulesFooter';
import { EventSections } from './EventSections';
import { EventRulesCards } from './EventRulesCards';

export const EventRules = () => {
  const updatedAt = '23 septembre 2025'; // Modifiez si besoin

  return (
    <Grid>
      <Stack spacing={3}>
        {/* En-tête */}
        <Box>
          <Typography variant="body2" color="textSecondary">
            Dernière mise à jour : {updatedAt}
          </Typography>
        </Box>

        <BadgesList
          list={[
            { icon: <SecurityIcon />, label: 'Sécurité avant tout' },
            { icon: <SportsEsportsIcon />, label: 'Fair-play obligatoire' },
            { icon: <SpeedIcon />, label: 'Chrony obligatoire' },
            {
              icon: <WhatshotIcon />,
              label: 'Zones camping/parking délimitées',
            },
          ]}
          color="warning"
        />

        <EventRulesCards />
        <Grid>
          <Stack spacing={2.5}>
            {/* Alerte globale */}
            <Alert severity="warning" icon={<WarningAmberIcon />}>
              <AlertTitle>Sanctions</AlertTitle>
              Tout joueur surpris en violation d'une règle pourra être prié de
              quitter l'évènement <strong>sans remboursement</strong>.
            </Alert>

            <Divider />
            <Grid>
              <EventSections />
            </Grid>
            <Divider />

            {/* Pied de page */}
            <RulesFooter />
          </Stack>
        </Grid>
      </Stack>
    </Grid>
  );
};
