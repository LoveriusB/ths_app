import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import { SponsorDialog } from './SponsorDialog';
import protectOrSave from '../../../../SVG/protect_or_save.svg';

export const ProtectOrSaveSponsor = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <IconButton onClick={() => setOpen(true)}>
        <img
          src={protectOrSave}
          alt="Protect or Save Logo"
          style={{ minWidth: 150, maxWidth: 150, height: 'auto' }}
        />
      </IconButton>
      <SponsorDialog
        open={open}
        onClose={() => setOpen(false)}
        info={{
          name: 'Protect or Save',
          description:
            "Découvrez Protect Or Save, le magasin tactique d'Enghien dédié aux professionnels de la sécurité, aux forces de l'ordre et aux passionnés d'équipement de terrain. Gilets balistiques, tenues d'intervention, matériel médical tactique : tout y est pensé pour la performance et la fiabilité.",
          highlights: [
            'Protection balistique',
            'Equipements tactiques',
            'Spécialiste en secourisme tactique',
          ],
          links: {
            website: 'https://www.protectorsave.be/',
            contactLink: 'https://www.protectorsave.be/contactez-nous.html',
            instagram: 'https://www.instagram.com/protect_or_save/',
          },
          coverUrl:
            'https://media.cdnws.com/_i/207274/RAW-1837/1455/40/banniere-protect-or-save-2000x770.jpeg',
          logoUrl:
            'https://media.cdnws.com/_i/207274/2665/3199/66/logo-transparent-copie-416x416.png',
          locationLabel: 'Enghien - Belgique',
          tagline: "Sponsor officiel de l'OP",
        }}
      />
    </>
  );
};
