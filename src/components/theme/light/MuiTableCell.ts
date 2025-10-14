import { alpha, Components, Theme } from '@mui/material';

export const MuiTableCell: Components<
  Omit<Theme, 'components'>
>['MuiTableCell'] = {
  styleOverrides: {
    head: {
      fontWeight: 700,
      textTransform: 'uppercase',
      fontSize: '0.75rem',
    },
    body: {
      fontSize: '0.875rem',
      borderBottom: `1px solid ${alpha('#0f172a', 0.12)}`,
    },
  },
};
