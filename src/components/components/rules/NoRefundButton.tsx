import {
  Button,
  ButtonProps,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { NoRefundContent } from './NoRefundContent';
import { ResponsiveDialog } from '../misc/ResponsiveDialog';
import { isNil } from 'lodash';

interface NoRefundButtonProps {
  buttonProps?: ButtonProps;
  dialogProps?: Omit<DialogProps, 'open'>;
  onAccept?: () => void;
  onRefuse?: () => void;
}

export const NoRefundButton: React.FC<NoRefundButtonProps> = ({
  buttonProps,
  dialogProps,
  onAccept,
  onRefuse,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ResponsiveDialog
        open={open}
        onClose={() => setOpen(false)}
        {...dialogProps}
        lateralColor={'error'}
      >
        <DialogTitle>Pas de remboursement</DialogTitle>
        <DialogContent dividers>
          <NoRefundContent />
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={() => setOpen(false)}>
            Fermer
          </Button>
          {!isNil(onAccept) && !isNil(onRefuse) && (
            <>
              <Button
                variant="outlined"
                onClick={() => {
                  onRefuse();
                  setOpen(false);
                }}
              >
                Je refuse
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  onAccept();
                  setOpen(false);
                }}
              >
                J'accepte
              </Button>
            </>
          )}
        </DialogActions>
      </ResponsiveDialog>
      <Button onClick={() => setOpen(true)} {...buttonProps} variant="outlined">
        <Typography variant="iconnedText">
          politique de remboursement
        </Typography>
      </Button>
    </>
  );
};
