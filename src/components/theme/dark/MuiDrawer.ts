import { Theme } from '@emotion/react';
import { Components } from '@mui/material';

export const MuiDrawer: Components<Omit<Theme, 'components'>>['MuiDrawer'] = {
  styleOverrides: {
    root: {
      borderBottomLeftRadius: '8px',
      borderBottomRightRadius: '8px',
      backgroundColor: '#ffffff',
    },
    paper: {
      minHeight: '120px',
    },
  },
  variants: [
    {
      props: { variant: 'persistent' },
      style: {
        position: 'relative',
        borderBottomLeftRadius: '8px',
        borderBottomRightRadius: '8px',
        minHeight: '120px',
      },
    },
  ],
};
