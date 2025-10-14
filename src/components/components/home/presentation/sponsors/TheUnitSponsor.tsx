import { IconButton } from "@mui/material";
import { useState } from "react";
import unit from "../../../../SVG/unit_logo.svg";
import { SponsorDialog } from "./SponsorDialog";
export const TheUnitSponsor = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <IconButton onClick={() => setOpen(true)}>
        <img
          src={unit}
          alt="Unit Logo"
          style={{ minWidth: 150, maxWidth: 150, height: "auto" }}
        />
      </IconButton>
      <SponsorDialog
        open={open}
        onClose={() => setOpen(false)}
        info={{
          name: "The Unit Airsoft Team",
          description:
            "Organisation d'airsoft basée dans la région bruxelloise. The Unit coordonne plusieurs terrains, dont l'un des plus grands sites CQB d'Europe. L'équipe met l'accent sur la sécurité, le fair-play et des scénarios immersifs pour tous niveaux.",
          highlights: [
            "Terrain de jeu varié",
            "Équipe expérimentée",
            "Scénarios immersifs",
          ],
          links: {
            website: "https://www.unitairsoftteam.be/",
            contactLink: "https://m.me/100063576403463",
            instagram:
              "https://www.instagram.com/the.unit.airsoft.adventure/?utm_source=ig_web_button_share_sheet",
          },
          coverUrl:
            "https://www.unitairsoftteam.be/wp-content/uploads/2022/11/unit-head.png",
          logoUrl:
            "https://www.unitairsoftteam.be/wp-content/uploads/2022/11/cropped-logo-unit.png",
          locationLabel: "Bruxelles & alentours",
          tagline: "Sponsor officiel de l'OP",
        }}
      />
    </>
  );
};
