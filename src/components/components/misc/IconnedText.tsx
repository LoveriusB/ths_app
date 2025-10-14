import { Button, Grid, Typography } from '@mui/material';

interface IconnedTextProps {
  icon: React.ReactNode;
  text: string;
  actionButton?: React.ReactNode;
  button?: boolean;
  href?: string; // optionnel quand pas de bouton
}

export const IconnedText: React.FC<IconnedTextProps> = ({
  icon,
  text,
  button,
  href,
  actionButton,
}) => {
  return (
    <Grid container alignItems="center">
      <Grid
        container
        size={{ xs: 2, sm: 2, md: 12, lg: 12, xl: 2 }}
        justifyContent={'center'}
      >
        {icon}
      </Grid>
      <Grid
        size={{ xs: 10, sm: 10, md: 12, lg: 12, xl: 10 }}
        container
        justifyContent="center"
      >
        {button ? (
          // We allow sx here since it's a unique case in app.
          <Button href={href ?? ''} target="_blank" size="small" sx={{ p: 0 }}>
            <Typography component={'p'} variant="iconnedText">
              {text}
            </Typography>
          </Button>
        ) : (
          <Typography component={'p'} variant="iconnedText">
            {text}
          </Typography>
        )}
        {actionButton && actionButton}
      </Grid>
    </Grid>
  );
};
