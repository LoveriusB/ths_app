import { Button, Grid } from "@mui/material";
import { useUser } from "../../../hooks/useUser";
import { BottomDrawer } from "../home/presentation/BottomDrawer";
import { TopDrawer } from "../home/presentation/TopDrawer";
import { AdminMailReminder } from "./adminMailReminder/AdminMailReminder";

export const AuthAdmin = () => {
  const { adminSignOut } = useUser();

  return (
    <Grid container minHeight={"100vh"} justifyContent={"center"}>
      <TopDrawer />
      <Grid width={"100%"} container alignItems={"center"} direction={"column"}>
        <Button onClick={() => adminSignOut({ global: true })}>Sign Out</Button>
        <AdminMailReminder />
      </Grid>
      <Grid sx={{ mt: "auto", width: "100%" }}>
        <BottomDrawer />
      </Grid>
    </Grid>
  );
};
