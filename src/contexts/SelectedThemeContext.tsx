import React, { useMemo, useState } from 'react';

export interface SelectedThemeContext {
  /**
   * the selected theme style. Either light or dark
   */
  selectedTheme: 'light' | 'dark';

  /**
   * get the item corresponding to the id set in params.
   */
  setTheme: (style: 'light' | 'dark') => void;
}

export const selectedThemeContext =
  React.createContext<SelectedThemeContext | null>(null);

export const SelectedThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedTheme, setSelectedTheme] = useState<'light' | 'dark'>(
    (window.localStorage.getItem('selectedTheme') as 'light' | 'dark') ||
      'dark',
  );

  const setTheme = (theme: 'light' | 'dark') => {
    console.log('Setting theme to ', theme);
    setSelectedTheme(theme);
    window.localStorage.setItem('selectedTheme', theme);
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
    [selectedTheme],
  );
  return (
    <selectedThemeContext.Provider value={value}>
      {children}
    </selectedThemeContext.Provider>
  );
};
