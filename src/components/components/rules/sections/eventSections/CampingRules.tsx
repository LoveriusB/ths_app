import { Typography } from '@mui/material';
import { Section, SectionControlProps } from '../../../misc/Section';
import WhatshotIcon from '@mui/icons-material/WhatshotOutlined';

export const CampingRules: React.FC<SectionControlProps> = ({
  expanded,
  setExpanded,
}) => {
  return (
    <Section
      id="camping"
      title="Camping / parking"
      icon={<WhatshotIcon />}
      expanded={expanded}
      setExpanded={setExpanded}
    >
      <Typography>
        Des zones de camping et de parking sont clairement délimitées. Il est
        interdit d'installer une tente ou de stationner en dehors de ces zones.
      </Typography>
      <Typography>
        Les espaces campings sont organisés pour permettre à tous de s'installer
        dans de bonnes conditions.
      </Typography>
      <Typography>
        Les joueurs doivent être en <strong>autonomie complète</strong>{' '}
        (nourriture, électricité, hygiène, …). Par souci de place, seul les
        tentes de 2 personnes ou moins seront autorisées.
      </Typography>
    </Section>
  );
};
