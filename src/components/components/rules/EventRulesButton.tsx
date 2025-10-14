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
import { EventRules } from './EventRules';
import { ResponsiveDialog } from '../misc/ResponsiveDialog';
import { isNil } from 'lodash';

interface EventRulesButtonProps {
  buttonProps?: ButtonProps;
  dialogProps?: Omit<DialogProps, 'open'>;
  onAccept?: () => void;
  onRefuse?: () => void;
}

export const EventRulesButton: React.FC<EventRulesButtonProps> = ({
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
        lateralColor="warning"
      >
        <DialogTitle>Règles de l'évènement</DialogTitle>
        <DialogContent dividers>
          <EventRules />
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={() => setOpen(false)}>
            Fermer
          </Button>
          {!isNil(onRefuse) && !isNil(onAccept) && (
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
        <Typography variant="iconnedText">Règles de l'évènement</Typography>
      </Button>
    </>
  );
};
