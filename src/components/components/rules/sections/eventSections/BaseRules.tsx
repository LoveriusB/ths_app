import { Typography } from '@mui/material';
import { RuleList } from '../../../misc/Rule';
import { Section, SectionControlProps } from '../../../misc/Section';
import SecurityIcon from '@mui/icons-material/SecurityOutlined';

export const BaseRules: React.FC<SectionControlProps> = ({
  expanded,
  setExpanded,
}) => {
  return (
    <Section
      id="base"
      title="Règles de base"
      icon={<SecurityIcon />}
      expanded={expanded}
      setExpanded={setExpanded}
    >
      <Typography variant="body1">
        Ces règles s'appliquent en continu tout au long de l'évènement.
      </Typography>
      <RuleList
        items={[
          {
            text: 'Port de lunettes de sécurité obligatoire en zone de jeu — lunettes/grilles de protection en filet interdites !',
            type: 'ok',
          },
          {
            text: 'Chargeurs strictement interdits dans les répliques en zone de sécurité (safe zone).',
            type: 'ban',
          },
          {
            text: "Tirs de répliques interdits en dehors des zones de jeu et du chrony. Toute infraction peut mener à l'exclusion.",
            type: 'ban',
          },
          {
            text: 'Soyez vigilant en zone de jeu : terrain potentiellement dangereux (hauteurs, puits étroits…), malgré un balisage et une préparation minutieuse.',
            type: 'warn',
          },
          {
            text: 'Couteaux en zone de jeu, objets tranchants et armes réelles interdits !',
            type: 'ban',
          },
          {
            text: "En cas d'incident, assistance immédiate entre joueurs, jeu suspendu si nécessaire.",
            type: 'ok',
          },
          {
            text: "Utilisation des échelles et cordes sous l'entière responsabilité du joueur.",
            type: 'warn',
          },
          {
            text: 'Interdiction de tirer sur un joueur montant une échelle ou une corde.',
            type: 'ban',
          },
          {
            text: 'Courir fortement déconseillé et interdit dans les escaliers.',
            type: 'ban',
          },
          {
            text: 'Chaussures à tige haute fortement conseillées.',
            type: 'ok',
          },
          {
            text: 'Protections vestimentaires conseillées.',
            type: 'ok',
          },
          {
            text: "Consommation d'alcool fortement déconseillée pour jouer. Tolérée en faible quantité entre 18h30 et 20h30 pour les joueurs ne participant pas aux nocturnes.",
            type: 'warn',
          },
          {
            text: 'Toute consommation de substances illicites est interdite sur le site.',
            type: 'ban',
          },
        ]}
      />
    </Section>
  );
};
