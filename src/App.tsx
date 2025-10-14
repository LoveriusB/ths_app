import { Grid } from "@mui/material";

import { Routes, Route } from "react-router-dom";
import { useSelectedTheme } from "./hooks/useSelectedTheme";
import {
  Admin,
  Cancel,
  Home,
  NotFound,
  Success,
  Terminal,
  ThemeWrapper,
} from "./components";

export const App = () => {
  const { selectedTheme } = useSelectedTheme();
  return (
    <Grid>
      <Routes>
        <Route
          path="/"
          element={
            <ThemeWrapper theme={selectedTheme}>
              <Home />
            </ThemeWrapper>
          }
        />
        <Route
          path="/admin"
          element={
            <ThemeWrapper theme={selectedTheme}>
              <Admin />
            </ThemeWrapper>
          }
        />
        <Route
          path="/terminal"
          element={
            <ThemeWrapper theme="dark">
              <Terminal />
            </ThemeWrapper>
          }
        />
        <Route
          path="/success"
          element={
            <ThemeWrapper theme={selectedTheme}>
              <Success />
            </ThemeWrapper>
          }
        />
        <Route
          path="/cancel"
          element={
            <ThemeWrapper theme={selectedTheme}>
              <Cancel />
            </ThemeWrapper>
          }
        />
        <Route
          path="*"
          element={
            <ThemeWrapper theme={selectedTheme}>
              <NotFound />
            </ThemeWrapper>
          }
        />
      </Routes>
    </Grid>
  );
};

export default App;
