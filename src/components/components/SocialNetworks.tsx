import { FC } from 'react';
import { ResponsiveDialog } from './misc/ResponsiveDialog';
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';

interface SocialNetworksProps {
  open: boolean;
  onClose: () => void;
}

export const SocialNetworks: FC<SocialNetworksProps> = ({ onClose, open }) => {
  return (
    <ResponsiveDialog open={open} onClose={onClose}>
      <DialogTitle>Nos réseaux sociaux</DialogTitle>
      <DialogContent dividers>
        <Button
          fullWidth
          variant="discord"
          href="https://discord.gg/HVtVHXksuP"
          target="_blank"
        >
          Discord
        </Button>
        <Button
          fullWidth
          variant="youtube"
          href="https://www.youtube.com/@THS-airsoft"
          target="_blank"
        >
          Youtube
        </Button>
        <Button
          fullWidth
          variant="instagram"
          href="https://www.instagram.com/thehive.ths?igsh=aHprd2hsZDc0dnBh"
          target="_blank"
        >
          Instagram
        </Button>
        <Button
          fullWidth
          variant="facebook"
          href="https://www.facebook.com/profile.php?id=61574878091138"
          target="_blank"
        >
          Facebook
        </Button>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={onClose}>
          Annuler
        </Button>
      </DialogActions>
    </ResponsiveDialog>
  );
};
