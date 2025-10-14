import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { Typography } from "@mui/material";
import { Section, SectionControlProps } from "../../../misc/Section";

export const SharedWithWho: React.FC<SectionControlProps> = ({
  expanded,
  setExpanded,
}) => {
  return (
    <Section
      id="partage"
      title="Partage des données"
      icon={<ShareOutlinedIcon />}
      expanded={expanded}
      setExpanded={setExpanded}
    >
      <Typography>
        Vos données ne sont jamais partagées avec des tiers en dehors de notre
        organisation, sauf obligation légale.
      </Typography>
    </Section>
  );
};
