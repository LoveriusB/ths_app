import { Typography } from '@mui/material';
import { Section, SectionControlProps } from '../../../misc/Section';
import UpdateIcon from '@mui/icons-material/UpdateOutlined';

export const Update: React.FC<SectionControlProps> = ({
  expanded,
  setExpanded,
}) => {
  return (
    <Section
      id="maj"
      title="Mise à jour"
      icon={<UpdateIcon />}
      expanded={expanded}
      setExpanded={setExpanded}
    >
      <Typography>
        Cette politique pourra être mise à jour si nécessaire (par exemple, en
        cas d'évolution légale ou technique). La version la plus récente sera
        toujours disponible sur le site.
      </Typography>
    </Section>
  );
};
