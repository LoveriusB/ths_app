import { Stack, Typography, Link } from '@mui/material';

export const RulesFooter = () => {
  return (
    <Stack
      direction={'row'}
      justifyContent="space-between"
      alignItems={{ xs: 'flex-start', sm: 'center' }}
      spacing={1}
    >
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} THS — Tous droits réservés
      </Typography>
      <Stack direction="row" spacing={2}>
        <Link href="mailto:admin@ths-airsoft.com" underline="hover">
          Contact
        </Link>
      </Stack>
    </Stack>
  );
};
