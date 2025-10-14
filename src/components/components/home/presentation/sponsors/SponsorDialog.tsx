import {
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Stack,
  Chip,
  Divider,
  Avatar,
  Grid,
  Card,
  CardContent,
  Link as MUILink,
  Tooltip,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import VerifiedIcon from '@mui/icons-material/Verified';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import EventIcon from '@mui/icons-material/Event';
import { ResponsiveDialog } from '../../../misc/ResponsiveDialog';

// -----------------------------
// Types & default data
// -----------------------------
export type Prize = {
  title: string;
  subtitle?: string;
  valueHint?: string;
  chips?: string[];
};

export type UnitSponsorInfo = {
  name: string;
  logoUrl?: string;
  coverUrl?: string;
  tagline?: string;
  description: string;
  highlights: string[];
  locationLabel?: string;
  links?: {
    website?: string;
    instagram?: string;
    contactLink?: string;
  };
  prizes?: Prize[];
  legalNotes?: string;
};

// -----------------------------
// Styled components
// -----------------------------
const Cover = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: 180,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderTopLeftRadius: theme.shape.borderRadius,
  borderTopRightRadius: theme.shape.borderRadius,
}));

const FloatingCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  top: -40,
  marginBottom: -24,
  borderRadius: 16,
  boxShadow: theme.shadows[6],
}));

// -----------------------------
// Dialog Component
// -----------------------------
export function SponsorDialog({
  open,
  onClose,
  info,
}: {
  open: boolean;
  onClose: () => void;
  info: UnitSponsorInfo;
}) {
  return (
    <ResponsiveDialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      scroll="paper"
      slotProps={{ paper: { sx: { borderRadius: 3 } } }}
    >
      <DialogContent dividers sx={{ p: 0, border: 'none' }}>
        <Box position="relative">
          {/* Header cover */}
          <Cover
            style={{
              backgroundImage: `url(${info.coverUrl})`,
              backgroundSize: 'fit-content',
            }}
          />

          {/* Floating identity card */}
          <Box px={3}>
            <FloatingCard>
              <CardContent>
                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={2}
                  alignItems={{ xs: 'center', sm: 'flex-start' }}
                >
                  <Avatar
                    src={info.logoUrl}
                    alt={info.name}
                    sx={{ width: 72, height: 72 }}
                  />
                  <Box flex={1} textAlign={{ xs: 'center', sm: 'left' }}>
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent={{ xs: 'center', sm: 'flex-start' }}
                      spacing={1}
                    >
                      <Typography variant="h5" fontWeight={700}>
                        {info.name}
                      </Typography>
                      <Tooltip title="Sponsor officiel">
                        <VerifiedIcon fontSize="small" />
                      </Tooltip>
                    </Stack>
                    {info.tagline && (
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        mt={0.5}
                      >
                        {info.tagline}
                      </Typography>
                    )}

                    <Grid
                      direction="row"
                      container
                      spacing={1}
                      mt={1}
                      justifyContent={{ xs: 'center', sm: 'flex-start' }}
                      flexWrap="wrap"
                    >
                      <Chip
                        icon={<WorkspacePremiumIcon />}
                        label="Sponsor officiel"
                        size="small"
                        color="warning"
                      />
                      <Chip
                        icon={<MilitaryTechIcon />}
                        label="OP partenaire"
                        size="small"
                        color="warning"
                      />
                      {info.locationLabel && (
                        <Chip
                          icon={<LocationOnIcon />}
                          label={info.locationLabel}
                          size="small"
                          color="warning"
                        />
                      )}
                    </Grid>
                  </Box>
                </Stack>
              </CardContent>
            </FloatingCard>
          </Box>
        </Box>
        <Divider />
        <Box p={3}>
          {/* Description */}
          <Typography variant="body1" sx={{ mb: 2 }} textAlign={'justify'}>
            {info.description}
          </Typography>

          {/* Highlights */}
          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            flexWrap="wrap"
            sx={{ mb: 3 }}
          >
            {info.highlights.map((h, i) => (
              <Chip color="info" key={i} label={h} variant="outlined" />
            ))}
          </Stack>

          {info.prizes && <Divider sx={{ my: 2 }} />}

          {/* Prizes */}
          {info.prizes && info.prizes.length > 0 && (
            <Box>
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                sx={{ mb: 1 }}
              >
                <EventIcon />
                <Typography variant="h6" fontWeight={700}>
                  Lots à gagner pendant l'événement
                </Typography>
              </Stack>
              <Grid container spacing={2}>
                {info.prizes.map((p, idx) => (
                  <Grid size={{ xs: 12 }} key={idx}>
                    <Card
                      variant="outlined"
                      sx={{ height: '100%', borderRadius: 2 }}
                    >
                      <CardContent>
                        <Grid
                          container
                          size={{ xs: 12 }}
                          justifyContent={'center'}
                        >
                          <Grid
                            size={{ xs: 5 }}
                            container
                            flexDirection="column"
                            justifyContent={'center'}
                          >
                            <Typography fontWeight={700}>{p.title}</Typography>
                            {p.subtitle && (
                              <Typography color="textSecondary">
                                {p.subtitle}
                              </Typography>
                            )}
                            {p.valueHint && (
                              <Chip
                                label={p.valueHint}
                                size="medium"
                                color="info"
                                sx={{ mt: 1 }}
                              />
                            )}
                          </Grid>
                          <Grid container margin={'0 16px'}>
                            <Divider orientation="vertical" />
                          </Grid>
                          <Grid
                            container
                            spacing={1}
                            padding={2}
                            size={{ xs: 5 }}
                            flexDirection="column"
                            justifyContent={'center'}
                          >
                            {p.chips &&
                              p.chips.map((c, i) => (
                                <Chip key={i} label={c} size="small" />
                              ))}
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}

          {/* Legal notes */}
          {info.legalNotes && (
            <Typography
              variant="caption"
              color="textSecondary"
              sx={{ display: 'block', mt: 2 }}
            >
              {info.legalNotes}
            </Typography>
          )}
          <Stack direction={{ xs: 'column', sm: 'row' }} mt={2} spacing={1}>
            {info.links?.website && (
              <Button
                variant="outlined"
                startIcon={<LanguageIcon />}
                component={MUILink}
                href={info.links.website}
                target="_blank"
                rel="noopener"
              >
                Site web
              </Button>
            )}
            {info.links?.instagram && (
              <Button
                variant="outlined"
                startIcon={<InstagramIcon />}
                component={MUILink}
                href={info.links.instagram}
                target="_blank"
                rel="noopener"
              >
                Instagram
              </Button>
            )}
            {info.links?.contactLink && (
              <Button
                variant="outlined"
                startIcon={<MailOutlineIcon />}
                component={MUILink}
                href={`${info.links.contactLink}`}
              >
                Contacter
              </Button>
            )}
          </Stack>
        </Box>
        <Divider />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} variant="contained">
          Fermer
        </Button>
      </DialogActions>
    </ResponsiveDialog>
  );
}
