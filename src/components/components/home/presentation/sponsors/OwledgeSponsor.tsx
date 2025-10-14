import { IconButton } from "@mui/material";
import { useState } from "react";
import owledge from "../../../../SVG/owledge.svg";
import { SponsorDialog } from "./SponsorDialog";

export const OwledgeSponsor = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <IconButton onClick={() => setOpen(true)}>
        <img
          src={owledge}
          alt="Owledge Logo"
          style={{ minWidth: 150, maxWidth: 150, height: "auto" }}
        />
      </IconButton>
      <SponsorDialog
        open={open}
        onClose={() => setOpen(false)}
        info={{
          name: "Owledge",
          logoUrl: owledge,
          coverUrl:
            "https://thspublic.s3.eu-west-3.amazonaws.com/Owledge_Logo_Texte.png",
          tagline: "Sponsor officiel de l'OP",
          description:
            "Plonge dans une série de cours de programmation clairs, dynamiques et sans bullshit, pensés pour ceux qui veulent vraiment comprendre le code. Pas de blabla inutile, pas de promesses miracles : juste des explications concrètes, illustrées et accessibles. Que tu sois débutant ou curieux, tu apprendras à penser comme un vrai développeur. Une approche sincère, motivante et un ton humain pour te donner enfin envie d’apprendre à coder.",
          highlights: [
            "Des cours clairs et concrets",
            "Une approche réelle du code",
            "Un ton humain et motivant",
            "Un apprentissage à ton rythme",
          ],
          locationLabel: "En ligne",
          links: {
            website: "https://cours.owledge.be/login",
            contactLink: "mailto:support@owledge.be",
          },
        }}
      />
    </>
  );
};
