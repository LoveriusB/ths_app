import { Components, Theme } from '@mui/material';

export const MuiButton: Components<Omit<Theme, 'components'>>['MuiButton'] = {
  styleOverrides: {
    root: {
      borderRadius: '8px',
      color: '#DFDFE0',
    },
    sizeLarge: ({ theme }) => ({
      padding: '12px 24px',
      fontSize: '1.25rem',
      margin: '24px 0',
      background: 'linear-gradient(135deg, #FF673B 17%, #FF196D 100%);',
      boxShadow: (theme as Theme).shadows[7],
    }),
    sizeSmall: {
      color: '#1e1e1e',
      textTransform: 'capitalize',
      fontFamily: 'Muli',
      fontWeight: 400,
      fontSize: '0.85rem',
    },
  },
  variants: [
    {
      props: { variant: 'discord' },
      style: () => ({
        padding: '12px 24px',
        fontSize: '1.25rem',
        margin: '12px 0',
        // background: 'linear-gradient(135deg, #5865F2, #404EED)',
        backgroundColor: '#666633',
      }),
    },
    {
      props: { variant: 'youtube' },
      style: () => ({
        padding: '12px 24px',
        fontSize: '1.25rem',
        margin: '12px 0',
        background: 'linear-gradient(135deg, #FF0000, #CC0000)',
      }),
    },
    {
      props: { variant: 'instagram' },
      style: () => ({
        padding: '12px 24px',
        fontSize: '1.25rem',
        margin: '12px 0',
        background:
          'linear-gradient(45deg, #FEDA75, #FA7E1E, #D62976, #962FBF, #4F5BD5)',
      }),
    },
    {
      props: { variant: 'facebook' },
      style: () => ({
        padding: '12px 24px',
        fontSize: '1.25rem',
        margin: '12px 0',
        background: 'linear-gradient(135deg, #1877F2, #145DBF)',
      }),
    },
  ],
};
