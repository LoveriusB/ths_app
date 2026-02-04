import { IconButton } from "@mui/material";
import { useState } from "react";
import deltaArmory from "../../../../SVG/delta_armory.svg";
import { SponsorDialog } from "./SponsorDialog";

export const DeltaArmory = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <IconButton onClick={() => setOpen(true)}>
        <img src={deltaArmory} alt="Delta Armory Logo" style={{ minWidth: 150, maxWidth: 150, height: "auto" }} />
      </IconButton>
      <SponsorDialog
        open={open}
        onClose={() => setOpen(false)}
        info={{
          name: "Delta Armory",
          description:
            "Delta Armory est une marque airsoft active depuis 2019. Elle développe et distribue une large gamme de répliques et d’accessoires, avec un focus fort sur les plateformes AR-15/M4 (AEG) ainsi que des pièces d’upgrade (gearboxes, kits HOP-up, consommables, etc.). La marque opère avec un bureau de développement à Hong Kong et une logistique basée en Europe (notamment Europe centrale et Royaume-Uni), ce qui lui permet d’approvisionner facilement le marché européen.",
          highlights: [
            "Marque airsoft (depuis 2019)",
            "Répliques AR-15 / M4 AEG",
            "Pièces d’upgrade & gearboxes",
            "Kits / pièces HOP-up",
            "Catalogue très large (+500 références)",
          ],
          links: {
            website: "https://www.delta-armory.com/",
          },
          // Images publiques (hébergées côté IWA / NürnbergMesse)
          coverUrl: "https://thspublic.s3.eu-west-3.amazonaws.com/DABanner.webp",
          logoUrl:
            "https://www.iwa.info/_next/image?q=75&url=https%3A%2F%2Fimages.nuernbergmesse.de%2Ffiles%2F291d88f3-3943-a633-c725-109d6cd7fe4e.jpg&w=640",
          locationLabel: "Banská Bystrica, Slovaquie",
          tagline: "Sponsor officiel de l'OP",
        }}
      />
    </>
  );
};
