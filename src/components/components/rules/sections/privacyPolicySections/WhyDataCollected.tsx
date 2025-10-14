import { Typography, List, ListItem, ListItemText } from '@mui/material';
import { Section, SectionControlProps } from '../../../misc/Section';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

export const WhyDataCollected: React.FC<SectionControlProps> = ({
  expanded,
  setExpanded,
}) => {
  return (
    <Section
      id="pourquoi"
      title="Pourquoi ces données sont-elles collectées ?"
      icon={<HelpOutlineIcon />}
      expanded={expanded}
      setExpanded={setExpanded}
    >
      <Typography>Les données sont utilisées uniquement pour :</Typography>
      <List>
        <ListItem>
          <ListItemText primary="gérer votre inscription à l'événement," />
        </ListItem>
        <ListItem>
          <ListItemText primary="vous envoyer un email de confirmation et de bienvenue," />
        </ListItem>
        <ListItem>
          <ListItemText primary="permettre à l'organisation de prendre contact si nécessaire." />
        </ListItem>
      </List>
      <Typography>
        {' '}
        Aucune autre utilisation n'est faite (pas de publicité, pas de
        profilage, pas de revente).
      </Typography>
    </Section>
  );
};
