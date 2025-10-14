import { IconButton } from '@mui/material';
import ABZAV from '../../../../SVG/ABZAV.svg';
import { useState } from 'react';
import { SponsorDialog } from './SponsorDialog';

export const ABZAVSponsor = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <IconButton onClick={() => setOpen(true)}>
        <img
          src={ABZAV}
          alt="ABZAV Logo"
          style={{ minWidth: 150, maxWidth: 150, height: 'auto' }}
        />
      </IconButton>
      <SponsorDialog
        open={open}
        onClose={() => setOpen(false)}
        info={{
          name: 'Airsoft Belgium - ABZAV',
          locationLabel: 'Zaventem - Belgique',
          description:
            "Plonge dans l'univers d'ABZAV, la référence airsoft à Bruxelles. Découvre du matériel haut de gamme, testé et approuvé par les vrais passionnés. Des répliques, équipements et conseils pros pour tous les styles de jeu. Le spot parfait pour équiper ton prochain combat.",
          highlights: [
            "Promotion de l'airsoft et du paintball",
            'Sécurité et fair-play',
            'Cadre légal pour les joueurs et organisateurs',
          ],
          coverUrl:
            'https://www.airsoft-belgium.com/img/ets_multilayerslider/airsoft-belgium_abzav_shop_05_2025_replique_aeg_gbb_pa_gbbr.jpg',
          logoUrl:
            'https://www.airsoft-belgium.com/img/ybc_blog/post/thumb/2-Logo-AB-2015.jpg',
          links: {
            website: 'https://www.airsoft-belgium.com/',
          },
        }}
      />
    </>
  );
};
