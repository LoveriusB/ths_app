import { Components, Theme } from '@mui/material';

export const MuiSelect: Components<Omit<Theme, 'components'>>['MuiSelect'] = {
  styleOverrides: {
    root: {
      minWidth: 100,
      maxWidth: 'none',
      fontFamily: 'Muli',
    },
  },
};
