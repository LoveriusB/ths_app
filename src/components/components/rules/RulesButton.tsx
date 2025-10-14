import {
  Button,
  ButtonProps,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { ResponsiveDialog } from "../misc/ResponsiveDialog";
import { ReplicaRules } from "./ReplicaRules";
import { RulesDisclaimer } from "./RulesDisclaimer";

export const RulesButton: React.FC<ButtonProps> = ({ ...props }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Grid>
      <ResponsiveDialog
        open={open}
        onClose={() => setOpen(false)}
        lateralColor="warning"
      >
        <DialogTitle>Règles sur les puissances</DialogTitle>
        <Divider />
        <DialogContent>
          <RulesDisclaimer
            text="Toutes les répliques doivent être testées et présentées à la zone chroni
              AVANT de démarrer l'OP."
          />
          <ReplicaRules />
          <RulesDisclaimer text="Les HPA et Snipers seront testées à la bille de jeu (en joules) tandis que les AEG et GBBR seront testées à la 0.20g en FPS" />
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button type="button" onClick={() => setOpen(false)}>
            Fermer
          </Button>
        </DialogActions>
      </ResponsiveDialog>
      <Button variant="outlined" onClick={() => setOpen(true)} {...props}>
        <Typography variant="iconnedText">Puissances</Typography>
      </Button>
    </Grid>
  );
};
