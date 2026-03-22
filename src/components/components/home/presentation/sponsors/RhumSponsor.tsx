import { IconButton } from "@mui/material";
import { useState } from "react";
import Rhum from "../../../../SVG/Rhum.svg";
import { SponsorDialog } from "./SponsorDialog";

export const RhumSponsor = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <IconButton onClick={() => setOpen(true)}>
        <img src={Rhum} alt="Rhum Logo" style={{ minWidth: 150, maxWidth: 150, height: "auto" }} />
      </IconButton>
      <SponsorDialog
        open={open}
        onClose={() => setOpen(false)}
        info={{
          name: "Tous les chemins mènent à Rhum",
          locationLabel: "Liège - Belgique",
          description:
            "Découvrez Jacquy et son univers de passionné de rhum. Des conseils d'expert, une sélection de rhums rares et des dégustations pour les amateurs comme les connaisseurs. Plongez dans l'art du rhum avec Jacquy, votre guide vers les saveurs exquises du monde du rhum. Jacquy se fera un plaisir de se rendre à domicile pour vous faire découvrir sa collection de rhums d'exception, partager des anecdotes passionnantes et vous guider dans une dégustation personnalisée. Que vous soyez novice ou connaisseur, Jacquy saura vous faire vivre une expérience unique autour du rhum, directement chez vous.",
          highlights: [
            "Sélection de rhums rares et d'exception",
            "Dégustations personnalisées à domicile",
            "Conseils d'expert pour les amateurs et connaisseurs",
          ],
          coverUrl: "https://thspublic.s3.eu-west-3.amazonaws.com/Rhum.jpg",
          logoUrl: "https://thspublic.s3.eu-west-3.amazonaws.com/RhumLogo.jpg",
          links: {
            website: "https://www.facebook.com/profile.php?id=61584575761693",
          },
        }}
      />
    </>
  );
};
