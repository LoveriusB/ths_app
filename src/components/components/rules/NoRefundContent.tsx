import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import WarningAmberIcon from '@mui/icons-material/WarningAmberOutlined';
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Divider,
  Grid,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import { BadgesList } from '../misc/BadgesList';

export const NoRefundContent = () => {
  return (
    <Box padding={{ xs: 3, md: 4 }}>
      <Grid>
        <Grid marginBottom={2}>
          <BadgesList
            list={[
              { icon: <MoneyOffIcon />, label: 'Aucun remboursement' },
              { icon: <DoNotDisturbOnIcon />, label: 'Paiement définitif' },
              { icon: <WarningAmberIcon />, label: 'Politique stricte' },
            ]}
            color="error"
          />
        </Grid>
        <Stack spacing={2}>
          <Stack direction="row" alignItems="center" spacing={1.5}>
            <MoneyOffIcon color="error" fontSize="large" />
            <Typography variant="h5" component="h2">
              Aucun remboursement
            </Typography>
          </Stack>

          <Alert severity="error" icon={<DoNotDisturbOnIcon />}>
            <AlertTitle>Important</AlertTitle>
            Une fois votre inscription <strong>validée</strong>, nous engageons
            des <strong>frais</strong> d'organisation. Pour cette raison, les
            paiements ne sont <strong>pas remboursables</strong>. Merci de votre
            compréhension.
          </Alert>

          <Typography variant="body1">
            Pour plus d'informations, vous pouvez nous contacter à :{' '}
            <Link href="mailto:admin@ths-airsoft.com">
              admin@ths-airsoft.com
            </Link>
            .
          </Typography>

          <Divider />

          <Stack direction={{ xs: 'column' }} spacing={1.5}>
            <Button
              component={Link}
              href="mailto:admin@ths-airsoft.com"
              variant="contained"
              color="error"
            >
              Contacter l'organisation
            </Button>
          </Stack>

          <Typography variant="caption" color="textSecondary">
            Cette mention complète le règlement de l'évènement et s'applique à
            toutes les inscriptions.
          </Typography>
        </Stack>
      </Grid>
    </Box>
  );
};
