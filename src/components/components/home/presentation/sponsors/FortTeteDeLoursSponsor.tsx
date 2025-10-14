import { IconButton } from "@mui/material";
import { useState } from "react";
import teteDeLours from "../../../../SVG/tete_de_l_ours_logo.svg";
import { SponsorDialog } from "./SponsorDialog";

export const FortTeteDeLoursSponsor = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <IconButton onClick={() => setOpen(true)}>
        <img
          src={teteDeLours}
          alt="Tête de Lours Logo"
          style={{ minWidth: 150, maxWidth: 150, height: "auto" }}
        />
      </IconButton>
      <SponsorDialog
        open={open}
        onClose={() => setOpen(false)}
        info={{
          name: "Bärenkopf - Tête de l'Ours",
          description:
            "Perché au cœur des Vosges, le Fort de la Tête de l'Ours dévoile un dédale impressionnant de galeries, de bunkers et de couloirs oubliés, vestiges d'une fortification du XIXᵉ siècle. Aujourd'hui réinvesti par des passionnés d'histoire et d'airsoft, il mêle patrimoine militaire et adrénaline. Entre nature sauvage et béton brut, ce lieu unique offre une immersion totale dans une ambiance post-apocalyptique. Un terrain mythique où chaque pierre semble raconter une bataille oubliée.",
          highlights: [
            "Terrain de jeu exceptionnel",
            "Galeries",
            "Bunkers",
            "Fortification",
            "Grande partie extérieure",
          ],
          links: {
            website:
              "https://www.facebook.com/p/La-T%C3%AAte-de-lOURS-B%C3%A4renkopf-100057069415706/",
          },
          coverUrl:
            "https://thspublic.s3.eu-west-3.amazonaws.com/barenkopf_background.jpg",
          logoUrl:
            "https://thspublic.s3.eu-west-3.amazonaws.com/barenkopf_logo.jpg",
          locationLabel: "Vosges, France",
          tagline: "Sponsor officiel de l'OP",
        }}
      />
    </>
  );
};
