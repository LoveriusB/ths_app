import BakeryDiningOutlinedIcon from '@mui/icons-material/BakeryDiningOutlined';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import CelebrationOutlinedIcon from '@mui/icons-material/CelebrationOutlined';
import LocalPoliceOutlinedIcon from '@mui/icons-material/LocalPoliceOutlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumberOutlined';

import { Card } from '../Card/Card';

export interface HomeAddedValueProps {
  [key: string]: string;
}

const data = {
  title: "Ce qu'on vous offre",
  topIconnedTexts: [
    { icon: <WaterDropOutlinedIcon color="primary" />, text: '2L / jour' },
    {
      icon: <BakeryDiningOutlinedIcon color="primary" />,
      text: 'Le petit déjeuner',
    },
    {
      icon: <CardGiftcardOutlinedIcon color="primary" />,
      text: "Un 'welcome pack'",
    },
  ],
  cardListItems: [
    {
      icon: <CardGiftcardOutlinedIcon color="primary" />,
      texts: [
        "Pack de bienvenue : une petite attention pour vous mettre dans l'ambiance dès l'arrivée.",
      ],
    },
    {
      icon: <ConfirmationNumberIcon color="primary" />,
      texts: [
        "Une tombola : Samedi soir, à l'heure de l'apéro, une tombola sera effectuée !",
      ],
    },
    {
      icon: <BakeryDiningOutlinedIcon color="primary" />,
      texts: [
        'Petit-déjeuner offert : histoire de commencer la journée avec le ventre plein et le sourire.',
      ],
    },
    {
      icon: <WaterDropOutlinedIcon color="primary" />,
      texts: [
        "2L d'eau par jour : pour que personne ne tombe à sec entre les missions.",
      ],
    },
    {
      icon: <CelebrationOutlinedIcon color="primary" />,
      texts: [
        "Des activités annexes facultatives : pour se détendre et renforcer l'esprit du week end.",
      ],
    },
    {
      icon: <LocalPoliceOutlinedIcon color="primary" />,
      texts: [
        "Un staff réellement dévoué : qui sera présent pour vous accompagner et répondre à vos besoins tout au long de l'événement.",
      ],
    },
  ],
};

export const HomeAddedValue: React.FC<HomeAddedValueProps> = () => {
  return <Card {...data} />;
};
