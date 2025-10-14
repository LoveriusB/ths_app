import { Theme } from '@emotion/react';
import { Components } from '@mui/material';

export const MuiIconButton: Components<
  Omit<Theme, 'components'>
>['MuiIconButton'] = {
  styleOverrides: {
    root: {
      borderRadius: '8px',
    },
    sizeSmall: {
      padding: '6px',
    },
  },
};
