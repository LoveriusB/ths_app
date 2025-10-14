import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import { Typography } from "@mui/material";
import { Section, SectionControlProps } from "../../../misc/Section";

export const WhereStored: React.FC<SectionControlProps> = ({
  expanded,
  setExpanded,
}) => {
  return (
    <Section
      id="stockage"
      title="Où sont stockées vos données ?"
      icon={<CloudOutlinedIcon />}
      expanded={expanded}
      setExpanded={setExpanded}
    >
      <Typography>
        Toutes les données sont hébergées et stockées chez{" "}
        <strong>Amazon Web Services (AWS)</strong>, au sein de l'Union
        européenne lorsque c'est possible.
      </Typography>
      <Typography>
        Nous veillons à sécuriser vos informations grâce aux mesures de sécurité
        offertes par AWS (chiffrement, sauvegardes, protection des accès).
      </Typography>
    </Section>
  );
};
