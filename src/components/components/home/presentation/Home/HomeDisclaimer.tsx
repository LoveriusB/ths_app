import BackHandOutlinedIcon from '@mui/icons-material/BackHandOutlined';
import BalanceIcon from '@mui/icons-material/Balance';
import SickOutlinedIcon from '@mui/icons-material/SickOutlined';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';

import { Card } from '../Card/Card';

export interface HomeDisclaimerProps {
  [key: string]: string;
}

const data = {
  title: 'Responsabilités',
  topIconnedTexts: [
    { icon: <SickOutlinedIcon color="primary" />, text: 'Blessures' },
    { icon: <BackHandOutlinedIcon color="primary" />, text: 'Vol' },
    { icon: <ThunderstormOutlinedIcon color="primary" />, text: 'intempéries' },
  ],
  cardListItems: [
    {
      icon: <BalanceIcon color="primary" />,
      texts: [
        "La participation à cet événement se fait sous l'entière responsabilité des joueurs. L'organisation et les marshals déclinent toute responsabilité en cas d'accident, blessure, perte, vol ou dégradation de matériel personnel.",
        "Chaque joueur est tenu d'être couvert par sa propre assurance et de respecter les règles de sécurité strictes communiquées.",
      ],
    },
    {
      icon: <ThunderstormOutlinedIcon color="primary" />,
      texts: [
        "En cas d'intempéries (pluie, vent, chaleur, etc.), l'événement sera maintenu sauf décision contraire du propriétaire.",
        'Les participants assument les risques liés aux conditions météorologiques et doivent prévoir un équipement adapté tant sur le terrain de jeu que dans la safe zone.',
      ],
    },
  ],
};

export const HomeDisclaimer: React.FC<HomeDisclaimerProps> = () => {
  return <Card {...data} />;
};
