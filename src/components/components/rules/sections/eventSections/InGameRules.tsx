import { Alert } from '@mui/material';
import { RuleList } from '../../../misc/Rule';
import { Section, SectionControlProps } from '../../../misc/Section';
import SportsEsportsIcon from '@mui/icons-material/SportsEsportsOutlined';

export const InGameRules: React.FC<SectionControlProps> = ({
  expanded,
  setExpanded,
}) => {
  return (
    <Section
      id="ingame"
      title="Règles durant les parties"
      icon={<SportsEsportsIcon />}
      expanded={expanded}
      setExpanded={setExpanded}
    >
      <RuleList
        items={[
          { text: 'Les Marshals ont toujours raison.', type: 'ok' },
          {
            text: 'Toutes les limites fixées par les Marshals doivent être respectées.',
            type: 'ok',
          },
          { text: 'Fair-play : prenez vos “hit” !', type: 'ok' },
          {
            text: 'Ne retirez en aucun cas vos lunettes de sécurité dans la zone de jeu.',
            type: 'ban',
          },
          {
            text: "Port d'un masque intégral ou d'un protège-dents recommandé.",
            type: 'ok',
          },
          {
            text: 'Protections auditives hautement recommandées (cf. grenades assourdissantes).',
            type: 'ok',
          },
          {
            text: 'En cas de perte de lunettes : arrêtez de jouer, criez “MAYDAY” et attendez les instructions des Marshals/organisateurs.',
            type: 'warn',
          },
          {
            text: 'Jeu au couteau factice silencieux : levez la main et éloignez-vous sans vous déclarer “OUT”.',
            type: 'ok',
          },
          {
            text: 'Insultes, gestes obscènes et échanges de coups strictement interdits.',
            type: 'ban',
          },
          {
            text: "Interdiction de tirer à l'aveugle (tir à la libanaise) : utilisez vos organes de visée.",
            type: 'ban',
          },
          {
            text: 'Prévoyez une lampe pour les nocturnes ou zones peu éclairées (catacombes).',
            type: 'ok',
          },
          { text: 'Laser interdit.', type: 'ban' },
          { text: 'CO₂ interdit.', type: 'ban' },
          {
            text: "À l'intérieur des catacombes : tir en semi uniquement. Assaut + SMG/PA & réplique de soutien autorisés à 1,5 joule.",
            type: 'ok',
          },
          { text: 'Les ricochets ne comptent pas.', type: 'ok' },
          {
            text: 'Les tirs répliques comptent et vous devez passer à la réplique secondaire.',
            type: 'ok',
          },
          {
            text: "Boucliers autorisés. Pas de tir à la réplique longue si utilisation d'un bouclier.",
            type: 'ok',
          },
          {
            text: 'Grenades mortelles à 10 mètres en extérieur.',
            type: 'warn',
          },
          {
            text: 'Grenades mortelles dans la même pièce en intérieur.',
            type: 'warn',
          },
          {
            text: "Grenades fumigènes de couleur (pas blanc et noir) autorisées à l'intérieur et à l'extérieur.",
            type: 'ok',
          },
          {
            text: 'Grenades assourdissantes du commerce : à moins de 10 mètres, comptent comme un “hit”.',
            type: 'warn',
          },
          {
            text: 'Grenades artisanales et pyrotechnie interdites.',
            type: 'ban',
          },
          {
            text: 'Ne déplacez aucun élément du terrain (cônes, portes, poubelles, planches, etc.).',
            type: 'ban',
          },
          {
            text: 'Ne déplacez aucun accessoire, sauf si cela fait partie de la mission.',
            type: 'warn',
          },
          {
            text: 'Utilisez les échelles avec précaution.',
            type: 'warn',
          },
          {
            text: "Dress code libre, brassard fourni par l'organisation.",
            type: 'ok',
          },
        ]}
      />
      <Alert severity="warning">
        Tout joueur en infraction pourra être exclu de l'évènement{' '}
        <strong>sans remboursement</strong>.
      </Alert>
    </Section>
  );
};
