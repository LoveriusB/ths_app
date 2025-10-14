import { Components, Theme } from '@mui/material';

export const MuiDivider: Components<Omit<Theme, 'components'>>['MuiDivider'] = {
  styleOverrides: {
    root: {
      margin: '12px 0',
    },
  },
  variants: [
    {
      props: { orientation: 'vertical' },
      style: {
        margin: 0,
        color: '#ffffff33',
        height: 'auto',
      },
    },
  ],
};
