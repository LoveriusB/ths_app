import { Palette } from '@mui/material';
import { MuiDefaultTheme } from '../MuiDefaultTheme';

export const MuiPalette: Palette = {
  ...MuiDefaultTheme.palette,
  mode: 'dark',

  common: {
    black: '#000000',
    white: '#ffffff',
  },

  background: {
    default: '#1b1f23',
    paper: '#22272e',
  },

  text: {
    primary: '#e0e0e0',
    secondary: '#b0bec5',
    disabled: 'rgba(255, 255, 255, 0.3)',
  },

  divider: 'rgba(255, 255, 255, 0.12)',

  action: {
    active: '#e0e0e0',
    hover: 'rgba(255, 255, 255, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(255, 255, 255, 0.16)',
    selectedOpacity: 0.16,
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledOpacity: 0.3,
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
    focus: 'rgba(255, 255, 255, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.24,
  },

  primary: {
    main: '#42a5f5',
    light: '#e3f2fd',
    dark: '#42a5f5',
    contrastText: '#0d1117',
  },

  secondary: {
    main: '#8e24aa',
    light: '#bc51e0',
    dark: '#5c007a',
    contrastText: '#ffffff',
  },

  info: {
    main: '#00acc1',
    light: '#4dd0e1',
    dark: '#007c91',
    contrastText: '#0d1117',
  },

  success: {
    main: '#81c784',
    light: '#c8e6c9',
    dark: '#388e3c',
    contrastText: '#0d1117',
  },

  warning: {
    main: '#ffb74d',
    light: '#ffe0b2',
    dark: '#f57c00',
    contrastText: '#0d1117',
  },

  error: {
    main: '#ef5350',
    light: '#ffcdd2',
    dark: '#c62828',
    contrastText: '#ffffff',
  },
};
