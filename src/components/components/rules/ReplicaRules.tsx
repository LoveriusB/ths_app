import {
  AccordionDetails,
  Divider,
  Grid,
  List,
  ListItem,
  Typography,
} from '@mui/material';

import { useState } from 'react';
import { MachineGun } from '../home/presentation/icons/MachineGun';
import { DMR } from '../home/presentation/icons/DMR';
import { Sniper } from '../home/presentation/icons/Sniper';
import { Section } from '../misc/Section';

export interface IReplicaRules {
  [key: string]: string;
}

const rules = [
  {
    category: 'AEG / GBBR / SPRING / HPA',
    rules: [
      {
        title: 'Assault + soutien',
        details: [
          '400 FPS (AEG & GBBR) / 1.5 Joules Max (HPA)',
          'Pas de distances de tir minimum',
          'Full auto interdit à l’intérieur des catacombes',
        ],
        icon: <MachineGun />,
      },
      {
        title: 'DMR',
        details: [
          '420 FPS (AEG & GBBR) / 1,65 joules Max (HPA)',
          "distance d'engagement de minimum 15 M",
          'Semi-auto uniquement',
        ],
        icon: <DMR />,
      },
      {
        title: 'Sniper',
        details: [
          '1,99 joules Max',
          'distance d’engagement de minimum 20 M',
          'Semi-auto uniquement',
        ],
        icon: <Sniper />,
      },
    ],
  },
];

export const ReplicaRules: React.FC<IReplicaRules> = () => {
  const [expanded, setExpanded] = useState<string | null>(null);
  return (
    <Grid sx={{ mb: 3 }}>
      {rules.map((rule) => (
        <Grid key={rule.category}>
          <Typography variant="h6">{rule.category}</Typography>
          <Divider />
          {rule.rules.map((rule, index) => (
            <Section
              id={rule.title}
              title={rule.title}
              icon={rule.icon}
              key={`${rule.title} ${index}`}
              expanded={expanded}
              setExpanded={setExpanded}
            >
              <AccordionDetails>
                <List>
                  {rule.details.map((detail) => (
                    <ListItem key={`${detail} ${index}`}>
                      <Typography variant="body1">{detail}</Typography>
                    </ListItem>
                  ))}
                </List>
              </AccordionDetails>
            </Section>
          ))}
        </Grid>
      ))}
    </Grid>
  );
};
