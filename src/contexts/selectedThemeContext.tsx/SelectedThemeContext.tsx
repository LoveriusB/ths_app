import React from "react";

export interface SelectedThemeContext {
  /**
   * the selected theme style. Either light or dark
   */
  selectedTheme: "light" | "dark";

  /**
   * get the item corresponding to the id set in params.
   */
  setTheme: (style: "light" | "dark") => void;
}

export const selectedThemeContext = React.createContext<SelectedThemeContext | null>(
  null
);
