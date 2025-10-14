import { Palette } from '@mui/material';
import { MuiDefaultTheme } from '../MuiDefaultTheme';

export const MuiPalette: Palette = {
  ...MuiDefaultTheme.palette,
  mode: 'light',

  common: {
    black: '#000000',
    white: '#ffffff',
  },

  background: {
    default: '#f7f9fc', // blanc cassé très léger
    paper: '#ffffff', // cartes blanches pour contraste
  },

  text: {
    primary: '#1e1e1e', // texte principal noir doux
    secondary: '#555c63', // gris moyen
    disabled: 'rgba(0, 0, 0, 0.38)',
  },

  divider: 'rgba(0, 0, 0, 0.12)',

  action: {
    active: '#333333',
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
    disabled: 'rgba(0, 0, 0, 0.26)',
    disabledOpacity: 0.26,
    disabledBackground: 'rgba(0, 0, 0, 0.08)',
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.16,
  },

  primary: {
    main: '#1976d2', // bleu Material classique
    light: '#63a4ff',
    dark: '#004ba0',
    contrastText: '#ffffff',
  },

  secondary: {
    main: '#8e24aa', // conserve ton violet
    light: '#bc51e0',
    dark: '#5c007a',
    contrastText: '#ffffff',
  },

  info: {
    main: '#0288d1',
    light: '#4fc3f7',
    dark: '#01579b',
    contrastText: '#ffffff',
  },

  success: {
    main: '#2e7d32',
    light: '#81c784',
    dark: '#1b5e20',
    contrastText: '#ffffff',
  },

  warning: {
    main: '#ed6c02',
    light: '#ffb74d',
    dark: '#e65100',
    contrastText: '#ffffff',
  },

  error: {
    main: '#d32f2f',
    light: '#ef5350',
    dark: '#b71c1c',
    contrastText: '#ffffff',
  },
};
