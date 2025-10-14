import {
  Box,
  Typography,
  Divider,
  Stack,
  Grid,
  Alert,
  AlertTitle,
} from '@mui/material';
import { BadgesList } from '../misc/BadgesList';
import GppGoodIcon from '@mui/icons-material/GppGoodOutlined';
import BlockIcon from '@mui/icons-material/BlockOutlined';
import CookieIcon from '@mui/icons-material/CookieOutlined';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import AutoDeleteIcon from '@mui/icons-material/AutoDeleteOutlined';
import { PrivacyPolicyCards } from './PrivacyPolicyCards';
import { PrivacyPolicySections } from './PrivacyPolicySections';
import { RulesFooter } from './RulesFooter';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

export const PrivacyPolicyContent = () => {
  const updatedAt = '23 septembre 2025'; // Modifiez si besoin

  return (
    <Box>
      <Stack spacing={3}>
        <Box>
          <Typography variant="body2" color="textSecondary">
            Dernière mise à jour : {updatedAt}
          </Typography>
        </Box>
        <BadgesList
          list={[
            { icon: <GppGoodIcon />, label: 'Conforme RGPD' },
            { icon: <BlockIcon />, label: 'Aucune publicité' },
            { icon: <CookieIcon />, label: 'Pas de cookies tiers' },
            {
              icon: <CloudOutlinedIcon />,
              label: 'Données hébergées sur AWS (UE si possible)',
            },
            {
              icon: <AutoDeleteIcon />,
              label: "Conservation max. 3 mois après l'événement",
            },
          ]}
          color="info"
        />

        <Grid>
          <Stack spacing={2.5}>
            <Grid container spacing={2}>
              <PrivacyPolicyCards />
            </Grid>
            <Alert severity="info" icon={<HelpOutlineOutlinedIcon />}>
              <AlertTitle>Pour faire simple</AlertTitle>
              Nous collectons <strong>uniquement</strong> les données
              nécessaires à la gestion de <strong>votre</strong> inscription et
              à l'organisation de l'événement. Nous ne partageons{' '}
              <strong>jamais</strong> vos données avec des tiers à des fins
              publicitaires. Vous pouvez demander la suppression de{' '}
              <strong>vos</strong> données à tout moment.
            </Alert>
            <Divider />
            <Stack>
              <PrivacyPolicySections />
            </Stack>
            <Divider />
          </Stack>
        </Grid>
        <RulesFooter />
      </Stack>
    </Box>
  );
};
