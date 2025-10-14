import { Components } from '@mui/material';
import { Theme } from '@mui/material/styles';

export const MuiPaper: Components['MuiPaper'] = {
  styleOverrides: {
    root: {
      borderRadius: '8px',
    },
  },
  defaultProps: {
    elevation: 4,
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
      props: { variant: 'window' },
      style: ({ theme }) => ({
        position: 'relative',
        display: 'block',
        flexDirection: 'column',
        overflow: 'hidden',
        height: '100%',
        margin: 0,
        padding: 0,
        borderRadius: '6px 6px 6px 6px',
        boxShadow: (theme as Theme).shadows[17],
      }),
    },
    {
      props: { variant: 'windowBar' },
      style: {
        display: 'flex',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '6px 16px',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        color: '#FFFFFF',
        borderRadius: '6px 6px 0 0',
      },
    },
    {
      props: { variant: 'windowContent' },
      style: {
        flex: 1,
        margin: 0,
        padding: 0,
        borderRadius: '0 0 6px 6px',
        backgroundColor: 'transparent',
      },
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
