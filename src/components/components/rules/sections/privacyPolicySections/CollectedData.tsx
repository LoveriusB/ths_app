import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtlOutlined";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { Section, SectionControlProps } from "../../../misc/Section";

export const CollectedData: React.FC<SectionControlProps> = ({
  expanded,
  setExpanded,
}) => {
  return (
    <Section
      id="donnees-collectees"
      title="Quelles données sont collectées ?"
      icon={<ChecklistRtlIcon />}
      expanded={expanded}
      setExpanded={setExpanded}
    >
      <Typography>
        Lors de votre inscription à un événement, nous collectons uniquement les
        informations suivantes :
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Nom et prénom" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Adresse email" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Âge" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Team et callsign (pseudo)" />
        </ListItem>
      </List>
      <Typography>
        Ces informations sont saisies directement par vous via le formulaire
        d'inscription.
      </Typography>
    </Section>
  );
};
