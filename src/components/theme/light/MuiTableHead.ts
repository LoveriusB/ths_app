import { Components, Theme } from '@mui/material';

export const MuiTableHead: Components<
  Omit<Theme, 'components'>
>['MuiTableHead'] = {
  styleOverrides: {
    root: {
      backgroundColor: '#1a1a1aff',
      borderTopLeftRadius: '8px',
    },
  },
};
