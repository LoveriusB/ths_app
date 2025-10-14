import GroupsIcon from "@mui/icons-material/GroupsOutlined";
import { Typography } from "@mui/material";
import { Section, SectionControlProps } from "../../../misc/Section";

export const ForWho: React.FC<SectionControlProps> = ({
  expanded,
  setExpanded,
}) => {
  return (
    <Section
      id="public"
      title="Public concerné"
      icon={<GroupsIcon />}
      expanded={expanded}
      setExpanded={setExpanded}
    >
      <Typography>
        Le site est destiné uniquement à des personnes majeures.
      </Typography>
      <Typography>
        Aucune donnée sensible (santé, opinions politiques, etc.) n'est
        collectée.
      </Typography>
    </Section>
  );
};
