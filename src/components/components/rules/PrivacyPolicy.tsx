import {
  Button,
  ButtonProps,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  Typography,
} from "@mui/material";
import { isNil } from "lodash";
import { useState } from "react";
import { ResponsiveDialog } from "../misc/ResponsiveDialog";
import { PrivacyPolicyContent } from "./PrivacyPolicyContent";

interface PrivacyPolicyButtonProps {
  buttonProps?: ButtonProps;
  dialogProps?: Omit<DialogProps, "open" | "onClose">;
  onAccept?: () => void;
  onRefuse?: () => void;
}

export const PrivacyPolicyButton: React.FC<PrivacyPolicyButtonProps> = ({
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
        lateralColor="info"
      >
        <DialogTitle>Politique de Confidentialité</DialogTitle>
        <DialogContent dividers>
          <PrivacyPolicyContent />
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
      <Button variant="outlined" onClick={() => setOpen(true)} {...buttonProps}>
        <Typography variant="iconnedText">
          Politique de Confidentialité
        </Typography>
      </Button>
    </>
  );
};
