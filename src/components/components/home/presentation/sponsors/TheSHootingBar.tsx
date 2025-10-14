import { IconButton } from '@mui/material';
import { useState } from 'react';
import theShootingBar from '../../../../SVG/TheShootingBar.svg';
import { SponsorDialog } from './SponsorDialog';

export const TheShootingBarSponsor = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <IconButton onClick={() => setOpen(true)}>
        <img
          src={theShootingBar}
          alt="The Shooting Bar Logo"
          style={{ minWidth: 150, maxWidth: 150, height: 'auto' }}
        />
      </IconButton>
      <SponsorDialog
        open={open}
        onClose={() => setOpen(false)}
        info={{
          name: 'Shooters',
          logoUrl: theShootingBar,
          coverUrl: 'https://thspublic.s3.eu-west-3.amazonaws.com/SHOOTERS.png',
          tagline: "Sponsor officiel de l'OP",
          description:
            "Découvre Shooters, le tout premier bar immersif de tir à Bruxelles. Entre adrénaline et ambiance speakeasy, viens tester ton précision en toute sécurité. Un concept inédit mêlant cocktails et challenge. L'expérience parfaite pour ceux qui veulent sortir… autrement.",
          highlights: ['Un bar et des flingues', 'Une approche réelle du tir'],
          locationLabel: 'Bruxelles - Belgique',
          links: {
            website: 'https://theshootingbar.com/',
            instagram: 'https://www.instagram.com/shooters_brussels/',
          },
        }}
      />
    </>
  );
};
