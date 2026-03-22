import React, { useState } from "react";
import { Dialog, DialogContent, IconButton, Typography, Stack, Box, Divider, Button, Chip } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import BedRoundedIcon from "@mui/icons-material/BedRounded";
import BreakfastDiningRoundedIcon from "@mui/icons-material/BreakfastDiningRounded";
import HikingRoundedIcon from "@mui/icons-material/HikingRounded";
import PaymentsRoundedIcon from "@mui/icons-material/PaymentsRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

export const LodgeInfos = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button variant="outlined" onClick={handleOpen}>
        Voir les infos du gîte
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 5,
            overflow: "hidden",
            backgroundImage: "none",
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            px: { xs: 3, sm: 4 },
            pt: { xs: 3, sm: 4 },
            pb: 3,
            color: "common.white",
            background: `linear-gradient(135deg, #FF673B 17%, #FF196D 100%)`,
          }}
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              color: "common.white",
              bgcolor: "rgba(255,255,255,0.12)",
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.2)",
              },
            }}
          >
            <CloseRoundedIcon />
          </IconButton>

          <Stack spacing={2}>
            <Chip
              icon={<HomeRoundedIcon />}
              label="Hébergement sur place"
              sx={{
                alignSelf: "flex-start",
                color: "common.white",
                bgcolor: "rgba(255,255,255,0.14)",
                borderRadius: 2,
                "& .MuiChip-icon": {
                  color: "common.white",
                },
              }}
            />

            <Box>
              <Typography variant="h4" fontWeight={800} lineHeight={1.1}>
                Informations sur le gîte
              </Typography>

              <Typography variant="body1" sx={{ mt: 1.5, maxWidth: 700, opacity: 0.92 }}>
                Un petit hébergement est disponible à l’entrée du site, à environ 15 minutes à pied de la safe zone.
                L’endroit est cosy, pratique, et le propriétaire est très sympathique.
              </Typography>
            </Box>
          </Stack>
        </Box>

        <DialogContent sx={{ p: { xs: 3, sm: 4 } }}>
          <Stack spacing={3}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, 1fr)",
                },
                gap: 2,
              }}
            >
              <InfoCard
                icon={<BedRoundedIcon color="primary" />}
                title="Capacité"
                value="10 chambres pour une capacité totale de 21 lits."
              />
              <InfoCard
                icon={<HikingRoundedIcon color="primary" />}
                title="Accès"
                value="Situé juste à l’entrée du site, à environ 15 minutes à pied de la safe zone."
              />
              <InfoCard
                icon={<BreakfastDiningRoundedIcon color="primary" />}
                title="Petit-déjeuner"
                value="Petit-déjeuner disponible pour 10€ par personne."
              />
              <InfoCard
                icon={<PaymentsRoundedIcon color="primary" />}
                title="Tarifs"
                value="60€ la chambre par nuit. À deux, cela revient à 30€ par personne par nuit."
              />
            </Box>

            <Box
              sx={{
                p: 2.5,
                borderRadius: 3,
                bgcolor: "action.hover",
                border: "1px solid",
                borderColor: "divider",
              }}
            >
              <Stack spacing={1}>
                <Typography variant="subtitle1" fontWeight={800}>
                  Espaces accessibles
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Un salon commun ainsi qu’une cuisine accessible sont mis à disposition sur place.
                </Typography>
              </Stack>
            </Box>

            <Divider />

            <Box
              sx={{
                p: 2.5,
                borderRadius: 3,
                border: "1px solid",
                borderColor: "warning.main",
                bgcolor: "warning.main",
                color: "warning.contrastText",
              }}
            >
              <Stack direction="row" spacing={1.5} alignItems="flex-start">
                <InfoRoundedIcon sx={{ mt: "2px" }} />
                <Box>
                  <Typography variant="subtitle1" fontWeight={800}>
                    Conditions de réservation
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 0.5, opacity: 0.95 }}>
                    Toute réservation doit être demandée à l’organisation avec paiement à l’avance. Aucun remboursement
                    ne sera effectué en cas d’annulation.
                  </Typography>
                </Box>
              </Stack>
            </Box>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} justifyContent="flex-end">
              <Button onClick={handleClose} variant="contained" size="large">
                J’ai compris
              </Button>
            </Stack>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
};

type InfoCardProps = {
  icon: React.ReactNode;
  title: string;
  value: string;
};

function InfoCard({ icon, title, value }: InfoCardProps) {
  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 3,
        border: "1px solid",
        borderColor: "divider",
        bgcolor: "background.paper",
        minHeight: 110,
      }}
    >
      <Stack spacing={1.2}>
        <Box
          sx={{
            width: 42,
            height: 42,
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "action.hover",
          }}
        >
          {icon}
        </Box>

        <Typography variant="subtitle2" fontWeight={700}>
          {title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {value}
        </Typography>
      </Stack>
    </Box>
  );
}
