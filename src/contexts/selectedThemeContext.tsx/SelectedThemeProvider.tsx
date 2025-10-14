import { useState, useMemo } from "react";
import { selectedThemeContext } from "./SelectedThemeContext";

export const SelectedThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedTheme, setSelectedTheme] = useState<"light" | "dark">(
    (window.localStorage.getItem("selectedTheme") as "light" | "dark") || "dark"
  );

  const setTheme = (theme: "light" | "dark") => {
    console.log("Setting theme to ", theme);
    setSelectedTheme(theme);
    window.localStorage.setItem("selectedTheme", theme);
  };

  /**
   * This should avoid a change on every render.
   * Those values shall be changed ONLY if the state changes.
   * The functions will never change, so not needed in the array of dependencies
   */
  const value = useMemo(
    () => ({
      selectedTheme,
      setTheme,
    }),
    [selectedTheme]
  );
  return (
    <selectedThemeContext.Provider value={value}>
      {children}
    </selectedThemeContext.Provider>
  );
};
