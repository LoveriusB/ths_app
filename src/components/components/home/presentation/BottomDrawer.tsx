import { Facebook, Instagram, YouTube } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Divider, Grid, IconButton, Paper, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import THSPatch from "../../../SVG/Patch.svg";
import { EventRulesButton } from "../../rules/EventRulesButton";
import { NoRefundButton } from "../../rules/NoRefundButton";
import { PrivacyPolicyButton } from "../../rules/PrivacyPolicy";
import DiscordIcon from "./icons/Discord";

export interface BottomDrawerProps {
  [key: string]: string;
}

export const BottomDrawer: React.FC<BottomDrawerProps> = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.only("sm"));
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));
  const isMd = useMediaQuery(theme.breakpoints.only("md"));

  return (
    <Paper variant="footer">
      <Grid container justifyContent={"space-between"} height={"100%"}>
        <Grid
          size={{ xs: 5, sm: 4, md: 3.5, lg: 4, xl: 4 }}
          container
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={3}
        >
          <Grid width={"80%"}>
            <PrivacyPolicyButton buttonProps={{ fullWidth: true }} />
          </Grid>
          <Grid width={"80%"}>
            <EventRulesButton buttonProps={{ fullWidth: true }} />
          </Grid>
          <Grid width={"80%"}>
            <NoRefundButton buttonProps={{ fullWidth: true }} />
          </Grid>
        </Grid>

        <Divider orientation="vertical" />

        <Grid
          size={{ xs: 4, sm: 5, md: 5.5, lg: 3, xl: 3 }}
          container
          justifyContent="center"
          alignItems={"center"}
        >
          <Typography variant="h4">Suivez-nous</Typography>
          <Grid size={{ xs: 12 }} container justifyContent="center">
            <IconButton
              color="inherit"
              href="https://discord.gg/HVtVHXksuP"
              target="_blank"
            >
              <DiscordIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://www.instagram.com/thehive.ths?igsh=aHprd2hsZDc0dnBh"
              target="_blank"
            >
              <YouTube
                sx={{
                  color: "#ff0000",
                }}
              />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://www.instagram.com/thehive.ths?igsh=aHprd2hsZDc0dnBh"
              target="_blank"
            >
              <Instagram
                sx={{
                  color: "#dc2743",
                }}
              />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://www.facebook.com/profile.php?id=61574878091138"
              target="_blank"
            >
              <Facebook sx={{ color: "#0862f6" }} />
            </IconButton>
          </Grid>
        </Grid>
        {!isXs && !isSmall && !isMd && <Divider orientation="vertical" />}
        <Grid
          size={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}
          container
          justifyContent={"space-around"}
        >
          <Grid size={{ xs: 4, sm: 5.5, md: 6, lg: 4, xl: 4 }} padding={4}>
            <img
              src={THSPatch}
              alt="THS Patch"
              style={{ maxHeight: 150, height: "auto" }}
            />
          </Grid>
          <Grid
            size={{ xs: 7, sm: 5.5, md: 6, lg: 8, xl: 8 }}
            container
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"flex-start"}
          >
            <Typography component={"p"} variant="copyright" color="grey.500">
              - The Hornet Squad
            </Typography>
            <Typography component={"p"} variant="copyright" color="grey.500">
              - association de fait / club sportif
            </Typography>
            <Typography component={"p"} variant="copyright" color="grey.500">
              - Belgique
            </Typography>
            <Typography
              component={"p"}
              variant="copyright"
              color="grey.500"
              sx={{ mr: 0.5 }}
            >
              - Made with
              <FavoriteIcon
                fontSize="small"
                color="primary"
                sx={{ margin: "0 0.5rem" }}
              />
              by THS - Copy{" "}
              <a
                href="mailto:brun@loveri.us"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                brun@loveri.us
              </a>
            </Typography>
            {/* </Grid> */}
          </Grid>
          <Typography component={"p"} variant="copyright" color="grey.500">
            © {new Date().getFullYear()} THS Airsoft — Tous droits réservés
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};
