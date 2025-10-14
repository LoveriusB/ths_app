import { Theme } from '@emotion/react';
import { Components } from '@mui/material';

export const MuiMenuItem: Components<Omit<Theme, 'components'>>['MuiMenuItem'] =
  {
    styleOverrides: {
      root: {
        fontFamily: 'Muli',
      },
    },
  };
