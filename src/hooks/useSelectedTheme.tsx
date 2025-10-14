import { useContext } from "react";
import { selectedThemeContext } from "../contexts/selectedThemeContext.tsx/SelectedThemeContext";

export const useSelectedTheme = () => {
  const context = useContext(selectedThemeContext);
  if (!context) {
    throw new Error(
      "useSelectedTheme must be used within a SelectedThemeContextProvider"
    );
  }
  return context;
};
