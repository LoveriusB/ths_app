import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EuroIcon from "@mui/icons-material/Euro";
import LocationPinIcon from "@mui/icons-material/LocationPin";
import PetsIcon from "@mui/icons-material/PetsOutlined";

import { Card } from "../Card/Card";

export interface HomeInfoProps {
  [key: string]: string;
}

const data = {
  title: "Infos",
  topIconnedTexts: [
    { icon: <EuroIcon color="primary" />, text: "125 €" },
    { icon: <CalendarMonthIcon color="primary" />, text: "1-3 mai 2026" },
    {
      icon: <LocationPinIcon color="primary" />,
      text: "La Tête de l'Ours",
      button: true,
      href:
        "https://www.google.com/maps/search/fort+de+La+T%C3%AAte+de+l'Ours,+Haut-du-Them-Ch%C3%A2teau-Lambert,+France/@47.8603146,6.741342,18.5z?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D",
    },
  ],
  cardListItems: [
    {
      icon: <PetsIcon color="primary" />,
      texts: [
        "Préparez vos répliques, l'aventure commence ! Du vendredi 1er au dimanche 3 mai 2026, la THS vous invite à participer à son OPEX qui se déroulera dans le cadre unique de La Tête de l'Ours, dans le massif des Vosges, en France.",
        "Trois jours intenses, rythmés par des scénarios immersifs, des affrontements stratégiques et une ambiance qui promet de marquer les esprits.",
      ],
    },
    {
      icon: <EuroIcon color="primary" />,
      texts: [
        "La participation est fixée à 125 € pour l'ensemble de l'événement. Ce tarif est valable pour les 3 jours et pour chaque joueur inscrit.",
      ],
    },
    {
      icon: <AccessTimeIcon color="primary" />,
      texts: [
        "L'accueil des joueurs se fera la veille à partir de 18h45, le jeudi 30 avril, afin que chacun ait le temps de s'installer, de préparer son matériel et de plonger directement dans l'expérience.",
      ],
    },
    {
      icon: <BedtimeOutlinedIcon color="primary" />,
      texts: [
        'Le logement se fait en "tente / van" personnel uniquement. La place étant limitée, merci de prévoir du matériel compact. Les grandes installations type tonnelle de 15 m² ne seront pas acceptées afin de laisser de la place à tous.',
      ],
    },
  ],
};

export const HomeInfo: React.FC<HomeInfoProps> = () => {
  return <Card {...data} />;
};
