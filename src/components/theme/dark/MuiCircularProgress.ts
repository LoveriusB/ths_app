import { Components, Theme } from '@mui/material';

export const MuiCircularProgress: Components<
  Omit<Theme, 'components'>
>['MuiCircularProgress'] = {
  styleOverrides: {
    root: {
      color: '#red',
      height: '14px',
    },
  },
};
