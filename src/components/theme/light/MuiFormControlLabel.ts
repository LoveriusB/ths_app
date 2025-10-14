import { Components, Theme } from '@mui/material';

export const MuiFormControlLabel: Components<
  Omit<Theme, 'components'>
>['MuiFormControlLabel'] = {
  styleOverrides: {
    root: {
      fontFamily: 'Muli',
      width: '100%',
    },
    label: {
      width: '100%',
      fontFamily: 'Muli',
    },
  },
};
