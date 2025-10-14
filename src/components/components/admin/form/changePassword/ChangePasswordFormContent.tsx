import { Check, Key } from "@mui/icons-material";
import { Grid, InputAdornment } from "@mui/material";
import { TextDetailEditable } from "../../../misc/TextDetailEdiable";

export const ChangePasswordFormContent = () => {
  return (
    <Grid container spacing={2} flexDirection="column">
      <TextDetailEditable
        label="MDP"
        type="password"
        name="newPassword"
        value=""
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <Key />
              </InputAdornment>
            ),
          },
        }}
      />
      <TextDetailEditable
        label="Confirmer MDP"
        type="password"
        name="confirmPassword"
        value=""
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <Check />
              </InputAdornment>
            ),
          },
        }}
      />
    </Grid>
  );
};
