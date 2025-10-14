import { CssBaseline, ThemeProvider } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from '../theme/Theme'; // ou ton thème custom

interface ThemeWrapperProps {
  children: React.ReactNode;
  theme: 'dark' | 'light';
}

export const ThemeWrapper = ({ children, theme }: ThemeWrapperProps) => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  </StyledEngineProvider>
);
