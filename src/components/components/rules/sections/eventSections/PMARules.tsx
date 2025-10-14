import LocalHospitalIcon from "@mui/icons-material/LocalHospitalOutlined";
import { Typography } from "@mui/material";
import { Section, SectionControlProps } from "../../../misc/Section";

export const PMARules: React.FC<SectionControlProps> = ({
  expanded,
  setExpanded,
}) => {
  return (
    <Section
      id="pma"
      title="PMA (poste médical avancé)"
      icon={<LocalHospitalIcon />}
      expanded={expanded}
      setExpanded={setExpanded}
    >
      <Typography>
        Une pharmacie élémentaire pour les petites blessures est présente au
        village THS.
      </Typography>
    </Section>
  );
};
