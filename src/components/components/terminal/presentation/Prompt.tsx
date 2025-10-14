import { Grid, Typography } from "@mui/material";
import useFolders from "../../../../hooks/useFolders";

export const Prompt = () => {
  const { currentAriane } = useFolders();
  return (
    <Grid component="div" sx={{ display: "flex", alignItems: "center" }}>
      <Typography component="span" sx={{ color: "#55f" }}>
        Copy1216
      </Typography>
      <Typography component="span">@</Typography>
      <Typography component="span" sx={{ color: "#5f5" }}>
        ths-machine
      </Typography>
      <Typography component="span">:</Typography>
      <Typography component="span" sx={{ color: "#fff" }}>
        {currentAriane.map((folder) => folder.name).join("/") || "~"}
      </Typography>
      <Typography component="span">$</Typography>
    </Grid>
  );
};
