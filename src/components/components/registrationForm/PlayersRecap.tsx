import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import { FormValues } from './RegisterDialog';
import { useState } from 'react';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { PlayerConfirmations } from './PlayerConfirmations';

interface PlayersRecapProps {
  values: FormValues;
}

export const PlayersRecap: React.FC<PlayersRecapProps> = ({ values }) => {
  const [expanded, setExpanded] = useState<number | undefined>(undefined);

  return (
    <Grid>
      <Typography variant="h5" gutterBottom>
        Récapitulatif des joueurs à inscrire:
      </Typography>
      {values.players.map((player, index) => (
        <Accordion
          key={player.email}
          disableGutters
          expanded={expanded === index}
          onChange={() => setExpanded(expanded === index ? undefined : index)}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{player.callSign}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem>Prénom: {player.firstName}</ListItem>
              <ListItem>Nom: {player.lastName}</ListItem>
              <ListItem>Age: {player.age}</ListItem>
              <ListItem>email: {player.email}</ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
      <Grid
        container
        flexDirection="column"
        spacing={2}
        marginTop={2}
        width={'100%'}
      >
        <PlayerConfirmations />
      </Grid>
    </Grid>
  );
};
