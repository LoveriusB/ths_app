import { Components, Theme } from '@mui/material';

export const MuiPaper: Components['MuiPaper'] = {
  styleOverrides: {
    root: {
      borderRadius: '8px',
      border: '1px solid rgba(0, 0, 0, 0.06)',
      backgroundImage: 'none',
    },
  },

  defaultProps: {
    elevation: 2, // plus doux en clair
    square: false,
  },

  variants: [
    {
      props: { variant: 'homePaper' },
      style: ({ theme }) => ({
        height: '100%',
        padding: '20px',
        minWidth: 400,
        boxShadow: (theme as Theme).shadows[7],
      }),
    },
    {
      props: { variant: 'footer' },
      style: ({ theme }) => ({
        minHeight: 120,
        padding: '20px',
        width: '100%',
        border: 'none',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        boxShadow: (theme as Theme).shadows[7],
      }),
    },
    {
      props: { variant: 'header' },
      style: ({ theme }) => ({
        minHeight: 120,
        maxHeight: 120,
        margin: '0 0  34px 0',
        width: '100%',
        border: 'none',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        boxShadow: (theme as Theme).shadows[7],
      }),
    },
    {
      props: { variant: 'playerList' },
      style: ({ theme }) => ({
        width: '100%',
        padding: 16,
        boxShadow: (theme as Theme).shadows[7],
      }),
    },
  ],
};
