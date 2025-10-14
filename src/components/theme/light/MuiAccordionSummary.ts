import { Components, Theme } from '@mui/material';

export const MuiAccordionSummary: Components<
  Omit<Theme, 'components'>
>['MuiAccordionSummary'] = {
  styleOverrides: {
    root: {
      padding: '0 16px',
      backgroundColor: '#f8f8f8ff',
    },
  },
};
