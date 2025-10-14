import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogProps,
  DialogTitle,
} from "@mui/material";
import { JSX } from "react";
import { ResponsiveDialog } from "../misc/ResponsiveDialog";

interface ErrorDialogProps extends Omit<DialogProps, "onClose"> {
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
