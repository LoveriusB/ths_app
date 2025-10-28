import { Grid } from "@mui/material";
import { useState } from "react";
import { RegisterDialog } from "../registrationForm/RegisterDialog";
// import { useContextLoader } from '@ths-monorepo/shared-react-resources';
// import { PlayersLists } from "../misc/PlayersLists";
import { SocialNetworks } from "../SocialNetworks";
import { BottomDrawer } from "./presentation/BottomDrawer";
import { HomeButtonRow } from "./presentation/Home/ButtonRow";
import { HomeAddedValue } from "./presentation/Home/HomeAddedValue";
import { HomeDisclaimer } from "./presentation/Home/HomeDisclaimer";
import { HomeInfo } from "./presentation/Home/HomeInfo";
import { HomeRules } from "./presentation/Home/HomeRules";
import { Sponsors } from "./presentation/Sponsors";
import { TopDrawer } from "./presentation/TopDrawer";

export interface HomeProps {
  [key: string]: string;
}

export const Home: React.FC<HomeProps> = () => {
  const [registerOpen, setRegisterOpen] = useState(false);
  const [socialNetworkOpen, setSocialNetworkOpen] = useState(false);

  return (
    <Grid container minHeight={"100vh"}>
      <TopDrawer />
      <RegisterDialog
        open={registerOpen}
        onClose={() => setRegisterOpen(false)}
      />
      <SocialNetworks
        open={socialNetworkOpen}
        onClose={() => setSocialNetworkOpen(false)}
      />
      <Sponsors />
      <Grid container spacing={2} justifyContent={"center"}>
        <Grid container size={{ xs: 12 }} justifyContent={"center"}>
          <HomeInfo />
          <HomeRules />
        </Grid>
        <Grid container size={{ xs: 12 }} justifyContent={"center"}>
          <HomeAddedValue />
          <HomeDisclaimer />
        </Grid>
      </Grid>
      <Grid container size={{ xs: 12 }} justifyContent={"center"} mt={2}>
        <HomeButtonRow
          setRegisterOpen={setRegisterOpen}
          setSocialNetworkOpen={setSocialNetworkOpen}
        />
      </Grid>
      {/* <PlayersLists /> */}
      <Grid sx={{ mt: "auto", width: "100%" }}>
        <BottomDrawer />
      </Grid>
    </Grid>
  );
};
