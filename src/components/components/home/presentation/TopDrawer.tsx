import { Grid, Paper, Typography } from "@mui/material";
import logo from "../../../SVG/LOGO.svg";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useSelectedTheme } from "../../../../hooks/useSelectedTheme";

export const TopDrawer: React.FC = () => {
  const { setTheme, selectedTheme } = useSelectedTheme();
  return (
    <Paper id="top-header" variant="header">
      <Grid
        container
        height={"100%"}
        alignItems={"center"}
        id="top-drawer-content"
      >
        <Grid size={{ xs: 2 }} container justifyContent="center">
          <img src={logo} alt="Logo" width={100} />
        </Grid>
        <Grid size={{ xs: 8 }} container justifyContent={"center"}>
          <Grid container justifyContent={"center"}>
            <Grid>
              <Typography variant="h1OPEX">OPEX</Typography>
            </Grid>
            <Grid>
              <Typography variant="h1T">T</Typography>
            </Grid>
            <Grid>
              <Typography variant="h1H">H</Typography>
            </Grid>
            <Grid>
              <Typography variant="h1S">S</Typography>
            </Grid>
            <Grid>
              <Typography variant="h1OPEX">2O26</Typography>
            </Grid>
          </Grid>
          <Typography variant="caption">Come and join us...</Typography>
        </Grid>
        <Grid size={{ xs: 2 }}>
          {selectedTheme === "dark" ? (
            <LightModeIcon
              onClick={() => setTheme("light")}
              sx={{ cursor: "pointer" }}
              fontSize="large"
              color="primary"
              titleAccess="Switch to light theme"
            />
          ) : (
            <NightlightRoundIcon
              onClick={() => setTheme("dark")}
              sx={{ cursor: "pointer" }}
              fontSize="large"
              color="primary"
              titleAccess="Switch to dark theme"
            />
          )}
        </Grid>
      </Grid>
    </Paper>
  );
};
