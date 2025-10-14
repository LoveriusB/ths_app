import { IconButton } from '@mui/material';
import teteDeLours from '../../../../SVG/tete_de_l_ours_logo.svg';
import { useState } from 'react';
import { SponsorDialog } from './SponsorDialog';

export const FortTeteDeLoursSponsor = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <IconButton onClick={() => setOpen(true)}>
        <img
          src={teteDeLours}
          alt="Tête de Lours Logo"
          style={{ minWidth: 150, maxWidth: 150, height: 'auto' }}
        />
      </IconButton>
      <SponsorDialog
        open={open}
        onClose={() => setOpen(false)}
        info={{
          name: "Bärenkopf - Tête de l'Ours",
          description:
            "Perché au cœur des Vosges, le Fort de la Tête de l'Ours dévoile un dédale impressionnant de galeries, de bunkers et de couloirs oubliés, vestiges d'une fortification du XIXᵉ siècle. Aujourd'hui réinvesti par des passionnés d'histoire et d'airsoft, il mêle patrimoine militaire et adrénaline. Entre nature sauvage et béton brut, ce lieu unique offre une immersion totale dans une ambiance post-apocalyptique. Un terrain mythique où chaque pierre semble raconter une bataille oubliée.",
          highlights: [
            'Terrain de jeu exceptionnel',
            'Galeries',
            'Bunkers',
            'Fortification',
            'Grande partie extérieure',
          ],
          links: {
            website:
              'https://www.facebook.com/p/La-T%C3%AAte-de-lOURS-B%C3%A4renkopf-100057069415706/',
          },
          coverUrl:
            'https://scontent-bru2-1.xx.fbcdn.net/v/t39.30808-6/481683777_1144127570832879_6843564212942564532_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=YL5fHCN5B-sQ7kNvwEmTNhh&_nc_oc=AdmTHGvmPrTqFNBlYaz8qUUH3tTET9RqvfYjTD1CY2kpvePWwe6AlDbpYlfnRp2ZLdQ&_nc_zt=23&_nc_ht=scontent-bru2-1.xx&_nc_gid=tVgOxMnP6ZIrOrc_hpA-Zw&oh=00_AfeHHmYg8I6oQr16w8Oda1J_oKIWnyY4eDYLfOJQNFoT9Q&oe=68ED87A1',
          logoUrl:
            'https://scontent-bru2-1.xx.fbcdn.net/v/t39.30808-6/358715269_774700704442236_3011480573256548122_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=5T_DaoImXkkQ7kNvwFrhrbh&_nc_oc=AdleT6a2IZnwvkQRJs6LoKZkssQc1DDUy6bgPBkYuorPixgZynVOQ9Wq_TfIid9-aEs&_nc_zt=23&_nc_ht=scontent-bru2-1.xx&_nc_gid=KiYZNdrvik3SeaH6dFbkmw&oh=00_AffvM-ON3GeGThD11nabEdO5dgc9z6gKhU-WM3lfVFaCTw&oe=68ED8BD6',
          locationLabel: 'Vosges, France',
          tagline: "Sponsor officiel de l'OP",
        }}
      />
    </>
  );
};
