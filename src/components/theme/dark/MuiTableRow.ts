import { Components, Theme } from '@mui/material';

export const MuiTableRow: Components<Omit<Theme, 'components'>>['MuiTableRow'] =
  {
    styleOverrides: {
      root: {},
    },
  };
