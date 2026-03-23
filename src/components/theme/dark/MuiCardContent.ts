import { Components, Theme } from "@mui/material";
export const MuiCardContent: Components<Omit<Theme, "components">>["MuiCardContent"] = {
  styleOverrides: {
    root: {
      // "&:last-child": {
      //   padding: 0,
      // },
    },
  },
};
