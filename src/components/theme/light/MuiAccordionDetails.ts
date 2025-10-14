import { Components, Theme } from '@mui/material';

export const MuiAccordionDetails: Components<
  Omit<Theme, 'components'>
>['MuiAccordionDetails'] = {
  styleOverrides: {
    root: {
      padding: '0',
    },
  },
};
