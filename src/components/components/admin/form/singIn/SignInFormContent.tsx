import { AccountCircle, Key } from "@mui/icons-material";
import { Grid, InputAdornment } from "@mui/material";
import { TextDetailEditable } from "../../../misc/TextDetailEdiable";

export const SignInFormContent = () => {
  return (
    <Grid container spacing={2} flexDirection="column">
      <TextDetailEditable
        label="Email"
        name="email"
        value=""
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          },
        }}
      />
      <TextDetailEditable
        label="Password"
        type="password"
        name="password"
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
    </Grid>
  );
};
