import { Typography, List, ListItem, ListItemText, Link } from '@mui/material';
import { Section, SectionControlProps } from '../../../misc/Section';
import PolicyIcon from '@mui/icons-material/PolicyOutlined';

export const RightsOverData: React.FC<SectionControlProps> = ({
  expanded,
  setExpanded,
}) => {
  return (
    <Section
      id="droits"
      title="Vos droits (RGPD)"
      icon={<PolicyIcon />}
      expanded={expanded}
      setExpanded={setExpanded}
    >
      <Typography>
        Conformément au RGPD, vous disposez des droits suivants :
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="droit d’accès à vos données," />
        </ListItem>
        <ListItem>
          <ListItemText primary="droit de rectification si elles sont incorrectes," />
        </ListItem>
        <ListItem>
          <ListItemText primary="droit d’effacement (“droit à l’oubli”)," />
        </ListItem>
        <ListItem>
          <ListItemText primary="droit d’opposition au traitement." />
        </ListItem>
      </List>
      <Typography>
        Pour exercer ces droits, vous pouvez nous contacter à :{' '}
        <Link href="mailto:admin@ths-airsoft.com">admin@ths-airsoft.com</Link>.
        Nous traiterons votre demande dans un délai maximum de{' '}
        <strong>30 jours</strong>.
      </Typography>
    </Section>
  );
};
