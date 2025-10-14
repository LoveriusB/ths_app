import { Theme } from '@emotion/react';
import { Components } from '@mui/material';

export const MuiSvgIcon: Components<Omit<Theme, 'components'>>['MuiSvgIcon'] = {
  styleOverrides: {
    root: {
      width: '1em',
      height: '1em',
    },
    colorError: {
      fill: '#f44336',
    },
    colorPrimary: {
      fill: '#62808e',
    },
  },
};
