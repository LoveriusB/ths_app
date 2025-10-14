import {
  DialogProps,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';
import { ResponsiveDialog } from '../misc/ResponsiveDialog';
import { JSX } from 'react';

interface ErrorDialogProps extends Omit<DialogProps, 'onClose'> {
  message: JSX.Element;
  onClose: () => void;
}

export const ErrorDialog: React.FC<ErrorDialogProps> = ({
  open,
  onClose,
  message,
}) => {
  return (
    <ResponsiveDialog open={open} onClose={onClose} lateralColor="error">
      <DialogTitle>Error!</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onClose()} color="primary">
          Fermer
        </Button>
      </DialogActions>
    </ResponsiveDialog>
  );
};
