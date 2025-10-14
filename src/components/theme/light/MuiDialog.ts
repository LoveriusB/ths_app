import { Components, Theme } from '@mui/material';

export const MuiDialog: Components<Omit<Theme, 'components'>>['MuiDialog'] = {
  styleOverrides: {
    root: {
      fontFamily: 'Muli',
    },
    paper: ({ theme }) => ({
      borderRadius: 8,
      maxWidth: 'none',
      minWidth: '90%',
      width: '90%',
      border: 'none',
      [theme.breakpoints.up('md')]: {
        minWidth: 600,
        width: 600,
      },
      [theme.breakpoints.only('xs')]: {
        minWidth: '100%',
        width: '100%',
        borderRadius: 0,
      },
    }),
  },
};

export const MuiDialogTitles: Components<
  Omit<Theme, 'components'>
>['MuiDialogTitle'] = {
  styleOverrides: {
    root: {
      fontFamily: 'Muli',
      fontSize: 32,
    },
  },
};

export const MuiDialogContent: Components<
  Omit<Theme, 'components'>
>['MuiDialogContent'] = {
  styleOverrides: {
    root: {},
  },
};

export const MuiDialogActions: Components<
  Omit<Theme, 'components'>
>['MuiDialogActions'] = {
  styleOverrides: {
    root: {
      padding: '1rem',
    },
  },
};
