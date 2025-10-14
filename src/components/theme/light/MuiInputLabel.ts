import { Components, Theme } from '@mui/material';

export const MuiInputLabel: Components<
  Omit<Theme, 'components'>
>['MuiInputLabel'] = {
  styleOverrides: {
    root: {
      fontFamily: 'Muli',
    },
  },
};
