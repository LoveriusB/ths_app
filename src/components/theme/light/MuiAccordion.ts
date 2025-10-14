import { Components, Theme } from '@mui/material';

export const MuiAccordion: Components<
  Omit<Theme, 'components'>
>['MuiAccordion'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      width: '100%',
      minWidth: '100%',
      boxShadow: theme.shadows[7],
    }),
  },
};
