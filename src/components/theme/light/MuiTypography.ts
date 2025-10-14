import { Components, Theme } from '@mui/material';

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    ascii: true;
  }
}

export const MuiTypography: Components<
  Omit<Theme, 'components'>
>['MuiTypography'] = {
  styleOverrides: {
    root: {
      fontFamily: 'Muli',
    },
  },
  variants: [
    {
      props: { variant: 'h1OPEX' },
      style: ({ theme }) => ({
        fontSize: '3rem',
        fontWeight: 200,
        textAlign: 'center',
        marginRight: '1rem',
        [theme.breakpoints.only('sm')]: {
          fontSize: '2.5rem',
        },
        [theme.breakpoints.only('xs')]: {
          fontSize: '2rem',
        },
      }),
    },
    {
      props: { variant: 'h1T' },
      style: ({ theme }) => ({
        fontSize: '3rem',
        fontWeight: 200,
        textAlign: 'center',
        [theme.breakpoints.only('sm')]: {
          fontSize: '2.5rem',
        },
        [theme.breakpoints.only('xs')]: {
          fontSize: '2rem',
        },
      }),
    },
    {
      props: { variant: 'h1H' },
      style: ({ theme }) => ({
        color: '#fff200',
        fontSize: '3rem',
        fontWeight: 200,
        textAlign: 'center',
        [theme.breakpoints.only('sm')]: {
          fontSize: '2.5rem',
        },
        [theme.breakpoints.only('xs')]: {
          fontSize: '2rem',
        },
      }),
    },
    {
      props: { variant: 'h1S' },
      style: ({ theme }) => ({
        color: '#ff0000',
        fontSize: '3rem',
        fontWeight: 200,
        textAlign: 'center',
        marginRight: '1rem',
        [theme.breakpoints.only('sm')]: {
          fontSize: '2.5rem',
        },
        [theme.breakpoints.only('xs')]: {
          fontSize: '2rem',
        },
      }),
    },
    {
      props: { variant: 'h1' },
      style: {
        fontSize: '3rem',
        textAlign: 'center',
      },
    },
    {
      props: { variant: 'h2' },
      style: ({ theme }) => ({
        fontSize: '2.5rem',
        [theme.breakpoints.only('sm')]: {
          fontSize: '2rem',
        },
        [theme.breakpoints.only('xs')]: {
          fontSize: '1.5rem',
        },
      }),
    },
    {
      props: { variant: 'caption' },
      style: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      },
    },
    {
      props: { variant: 'body1' },
      style: {
        fontFamily: 'Muli',
      },
    },
    {
      props: { variant: 'iconnedText' },
      style: ({ theme }) => ({
        fontFamily: 'Muli',
        fontSize: '0.8rem',
        textTransform: 'none',
        textAlign: 'left', // Left aligned by default
        [theme.breakpoints.between('md', 'xl')]: {
          // except for medium to extra large screens (not including XL)
          textAlign: 'center',
        },
      }),
    },
    {
      props: { variant: 'copyright' },
      style: ({ theme }) => ({
        fontFamily: 'Muli',
      }),
    },
    {
      props: { variant: 'checkbox' },
      style: {
        fontFamily: 'Muli',
        fontSize: '0.875rem',
        textAlign: 'justify',
        minWidth: '100%',
      },
    },
  ],
};
