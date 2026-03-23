import { Box, Card, CardContent, Chip, Grid, Stack, Typography, alpha, styled, useTheme } from "@mui/material";
import urco from "../../../../SVG/URCO.svg";
import hydra from "../../../../SVG/HYDRA.svg";
import ShieldIcon from "@mui/icons-material/Shield";
import BiotechIcon from "@mui/icons-material/Biotech";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ScheduleIcon from "@mui/icons-material/Schedule";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

const missionItems = [
  {
    icon: ScheduleIcon,
    title: "Plusieurs scénarios intenses",
    text:
      "Une montée en pression continue à travers plusieurs missions d'environ deux heures, pensées pour faire évoluer l'histoire et vos objectifs.",
  },
  {
    icon: DarkModeIcon,
    title: "2 opérations nocturnes",
    text: "La nuit change tout : visibilité réduite, stress accru, désorientation et erreurs immédiatement punies.",
  },
  {
    icon: GpsFixedIcon,
    title: "Conflit asymétrique",
    text:
      "HYDRA prépare une frappe majeure pendant que l'URCO traque, intercepte et cherche à neutraliser toute la cellule.",
  },
];

export default function ThsHydraUrcoHero() {
  const theme = useTheme();

  const CustomCardContainer = styled(CardContent)(() => ({
    paddingBottom: 0,
    "&:last-child": {
      paddingBottom: 0,
    },
  }));

  return (
    <Grid
      container
      size={{ xs: 11.5, sm: 11.5, md: 11, lg: 11, xl: 8 }}
      justifyContent={"center"}
      spacing={2}
      sx={{ mt: 2 }}
    >
      <Grid container>
        <Grid size={{ xs: 12, lg: 6 }} container alignItems={"center"}>
          <Chip
            icon={<WarningAmberIcon />}
            label={"Opération à haut risque · 3 jours d'immersion"}
            sx={{
              mb: 3,
              px: 1,
              height: 40,
              borderRadius: 999,
              border: `1px solid ${alpha("#ffffff", 0.12)}`,
              backdropFilter: "blur(8px)",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.18em",
            }}
          />

          <Typography
            variant="h1"
            sx={{
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              fontSize: { xs: "2.5rem", md: "4.75rem" },
              maxWidth: "100%",
              overflowWrap: "break-word",
            }}
          >
            Entrez dans une guerre de l'ombre entre{" "}
            <Box component="span" sx={{ display: "inline", color: alpha(theme.palette.error.dark, 0.78) }}>
              HYDRA
            </Box>{" "}
            et{" "}
            <Box component="span" sx={{ display: "inline", color: alpha(theme.palette.warning.dark, 0.55) }}>
              URCO
            </Box>
          </Typography>

          <Typography
            sx={{
              mt: 0,
              // maxWidth: 820,
              textAlign: "justify",
              fontSize: { xs: "1rem", md: "1.125rem" },
              lineHeight: 1.9,
            }}
          >
            Pendant{" "}
            <Box component="span" sx={{ fontWeight: 700 }}>
              3 jours
            </Box>
            , vous incarnerez soit un membre de l’organisation{" "}
            <Box component="span" sx={{ fontWeight: 700, color: alpha(theme.palette.error.dark, 0.78) }}>
              HYDRA
            </Box>
            , prête à lancer un attentat chimique ou bactériologique majeur, soit un agent de
            <Box component="span" sx={{ fontWeight: 700, color: alpha(theme.palette.warning.dark, 0.55) }}>
              {" "}
              l’URCO
            </Box>
            , déterminé à déjouer cette menace et à éliminer la cellule terroriste.
          </Typography>

          <Typography
            sx={{
              mt: 0,
              // maxWidth: 820,
              fontSize: { xs: "1rem", md: "1.125rem" },
              lineHeight: 1.9,
              textAlign: "justify",
            }}
          >
            Vous vivrez{" "}
            <Box component="span" sx={{ fontWeight: 700 }}>
              plusieurs scénarios intenses
            </Box>
            , d’environ{" "}
            <Box component="span" sx={{ fontWeight: 700 }}>
              2 heures
            </Box>{" "}
            chacun, dont{" "}
            <Box component="span" sx={{ fontWeight: 700 }}>
              2 missions nocturnes
            </Box>{" "}
            conçues pour pousser vos nerfs, votre endurance et votre coordination au maximum.
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 4 }}></Stack>
        </Grid>

        <Grid size={{ xs: 12, lg: 6 }}>
          <Stack spacing={2}>
            <Card
              sx={{
                borderRadius: 4,
                border: `1px solid ${alpha("#ffffff", 0.1)}`,
                backgroundColor: alpha("#ffffff", 0.05),
                backdropFilter: "blur(12px)",
                boxShadow: "none",
              }}
            >
              <CustomCardContainer sx={{ p: 0, pb: 0 }}>
                <Grid container>
                  <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
                    <Box
                      sx={{
                        p: 3,
                        height: "100%",
                        borderRight: { md: `1px solid ${alpha("#ffffff", 0.1)}` },
                        borderBottom: { xs: `1px solid ${alpha("#ffffff", 0.1)}`, md: "none" },
                        backgroundColor: alpha(theme.palette.error.dark, 0.28),
                      }}
                    >
                      <Grid container>
                        <Grid size={8}>
                          <Box
                            sx={{
                              mb: 2,
                              display: "inline-flex",
                              p: 1.25,
                              borderRadius: 3,
                              border: `1px solid ${alpha(theme.palette.error.light, 0.2)}`,
                              backgroundColor: alpha(theme.palette.error.main, 0.1),
                            }}
                          >
                            <BiotechIcon />
                          </Box>
                          <Typography
                            sx={{
                              fontSize: 12,
                              fontWeight: 800,
                              letterSpacing: "0.26em",
                              textTransform: "uppercase",
                            }}
                          >
                            Faction révolutionnaire
                          </Typography>
                          <Typography variant="h4" sx={{ mt: 1, fontWeight: 900 }}>
                            HYDRA
                          </Typography>
                        </Grid>
                        <Grid container justifyContent={"center"} alignItems={"center"} size={4}>
                          <img src={hydra} alt="URCO" style={{ height: 124 }} />
                        </Grid>
                      </Grid>
                      <Typography sx={{ mt: 2, fontSize: "0.95rem", lineHeight: 1.8 }}>
                        Saboter, contaminer, frapper fort. Une organisation secrète prête à faire basculer toute la
                        région dans le chaos.
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
                    <Box
                      sx={{
                        p: 3,
                        height: "100%",
                        backgroundColor: alpha(theme.palette.warning.dark, 0.16),
                      }}
                    >
                      <Grid container>
                        <Grid size={8}>
                          <Box
                            sx={{
                              mb: 2,
                              display: "inline-flex",
                              p: 1.25,
                              borderRadius: 3,
                              border: `1px solid ${alpha(theme.palette.warning.light, 0.2)}`,
                              backgroundColor: alpha(theme.palette.warning.main, 0.1),
                            }}
                          >
                            <ShieldIcon />
                          </Box>
                          <Typography
                            sx={{
                              fontSize: 12,
                              fontWeight: 800,
                              letterSpacing: "0.26em",
                              textTransform: "uppercase",
                            }}
                          >
                            Force d’intervention
                          </Typography>
                          <Typography variant="h4" sx={{ mt: 1, fontWeight: 900 }}>
                            URCO
                          </Typography>
                        </Grid>
                        <Grid container justifyContent={"center"} alignItems={"center"} size={4}>
                          <img src={urco} alt="HYDRA" style={{ width: 96 }} />
                        </Grid>
                      </Grid>
                      <Typography sx={{ mt: 2, fontSize: "0.95rem", lineHeight: 1.8 }}>
                        Localiser, contenir, neutraliser. Une unité d'élite déterminée à empêcher l’attaque et à
                        démanteler Hydra avant qu’il ne soit trop tard.
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </CustomCardContainer>
            </Card>

            <Grid container spacing={2}>
              {missionItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Grid key={item.title} size={{ xs: 12, sm: 4 }}>
                    <Card
                      sx={{
                        height: "100%",
                        borderRadius: 4,
                        border: `1px solid ${alpha("#ffffff", 0.1)}`,
                        backgroundColor: alpha("#ffffff", 0.05),
                        backdropFilter: "blur(12px)",
                        boxShadow: "none",
                      }}
                    >
                      <CardContent sx={{ p: 2.5 }}>
                        <Box
                          sx={{
                            mb: 2,
                            display: "inline-flex",
                            p: 1.25,
                            borderRadius: 2.5,
                            border: `1px solid ${alpha("#ffffff", 0.1)}`,
                            backgroundColor: alpha("#ffffff", 0.05),
                          }}
                        >
                          <Icon />
                        </Box>
                        <Typography
                          sx={{
                            fontSize: 14,
                            fontWeight: 900,
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography sx={{ mt: 1.5, fontSize: "0.92rem", lineHeight: 1.8 }}>{item.text}</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
}
