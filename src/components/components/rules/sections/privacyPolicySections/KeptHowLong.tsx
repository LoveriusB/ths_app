import ScheduleIcon from "@mui/icons-material/ScheduleOutlined";
import { Typography } from "@mui/material";
import { Section, SectionControlProps } from "../../../misc/Section";

export const KeptHowLong: React.FC<SectionControlProps> = ({
  expanded,
  setExpanded,
}) => {
  return (
    <Section
      id="duree"
      title="Combien de temps gardons vos données ?"
      icon={<ScheduleIcon />}
      expanded={expanded}
      setExpanded={setExpanded}
    >
      <Typography>
        Vos données sont conservées uniquement pour la gestion de l'événement.
        Elles sont supprimées automatiquement au plus tard{" "}
        <strong>3 mois</strong> après la fin de l'événement.
      </Typography>
    </Section>
  );
};
