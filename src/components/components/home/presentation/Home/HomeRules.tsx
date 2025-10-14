import BackpackOutlinedIcon from '@mui/icons-material/BackpackOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import GrassIcon from '@mui/icons-material/Grass';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import SpeedIcon from '@mui/icons-material/SpeedOutlined';

import { RulesButton } from '../../../rules/RulesButton';
import { Card } from '../Card/Card';

export interface HomeRulesProps {
  [key: string]: string;
}

const data = {
  title: 'Règles',
  topIconnedTexts: [
    {
      icon: <RemoveRedEyeOutlinedIcon color="primary" />,
      text: 'Protection occulaire',
    },
    { icon: <GrassIcon color="primary" />, text: 'Billes bio' },
    {
      icon: <SpeedIcon color="primary" />,
      text: 'Max 1.99 Joules',
    },
  ],
  cardListItems: [
    {
      icon: <RemoveRedEyeOutlinedIcon color="primary" />,
      texts: [
        "Protection oculaire obligatoire : elle doit être portée en continu dès l'entrée sur le terrain.",
      ],
    },
    {
      icon: <GrassIcon color="primary" />,
      texts: [
        "Billes bio uniquement : Nous imposons un respect du site et de l'environnement.",
      ],
    },
    {
      icon: <SpeedIcon color="primary" />,
      texts: ['Puissance limitée : '],
      actionButton: <RulesButton fullWidth />,
    },
    {
      icon: <HandshakeOutlinedIcon color="primary" />,
      texts: [
        'Fair-play absolu : chaque touche doit être annoncée honnêtement.',
      ],
    },
    {
      icon: <BackpackOutlinedIcon color="primary" />,
      texts: [
        'Équipement adapté : prévoyez chargeurs, batteries et tenues prêtes à tenir sur la durée.',
      ],
    },
    {
      icon: <CampaignOutlinedIcon color="primary" />,
      texts: [
        "Respect des consignes : les marshals sont là pour assurer la sécurité, l'encadrement de votre expérience et la fluidité du jeu.",
      ],
    },
  ],
};

export const HomeRules: React.FC<HomeRulesProps> = () => {
  return <Card {...data} />;
};
