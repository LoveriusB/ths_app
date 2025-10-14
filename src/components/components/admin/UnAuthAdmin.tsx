import { Grid, Paper } from "@mui/material";
import { useState } from "react";
import { BottomDrawer } from "../home/presentation/BottomDrawer";
import { TopDrawer } from "../home/presentation/TopDrawer";
import { ChangePassword } from "./form/changePassword/ChangePasswordForm";
import { SignInForm } from "./form/singIn/SignInForm";
export const UnAuthAdmin = () => {
  const [formState, setFormState] = useState<"signIn" | "changePassword">(
    "signIn"
  );
  return (
    <Grid container minHeight={"100vh"} justifyContent={"center"}>
      <TopDrawer />
      <Paper variant="homePaper" sx={{ p: 2 }}>
        {formState === "signIn" && <SignInForm setFormState={setFormState} />}
        {formState === "changePassword" && (
          <ChangePassword setFormState={setFormState} />
        )}
      </Paper>
      <Grid sx={{ mt: "auto", width: "100%" }}>
        <BottomDrawer />
      </Grid>
    </Grid>
  );
};
