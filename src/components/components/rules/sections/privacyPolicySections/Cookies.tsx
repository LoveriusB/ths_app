import { Typography } from '@mui/material';
import { Section, SectionControlProps } from '../../../misc/Section';
import CookieIcon from '@mui/icons-material/CookieOutlined';

export const Cookies: React.FC<SectionControlProps> = ({
  expanded,
  setExpanded,
}) => {
  return (
    <Section
      id="cookies"
      title="Cookies et traceurs"
      icon={<CookieIcon />}
      expanded={expanded}
      setExpanded={setExpanded}
    >
      <Typography>
        Notre site n'utilise pas de cookies ni de traceurs tiers.
      </Typography>
    </Section>
  );
};
