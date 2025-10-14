import { Components, Theme } from '@mui/material';
import { grey } from '@mui/material/colors';

export const MuiCssBaseline: Components<
  Omit<Theme, 'components'>
>['MuiCssBaseline'] = {
  styleOverrides: {
    body: {
      /* Firefox */
      scrollbarWidth: 'thin',
      scrollbarColor: `${grey[700]} ${grey[900]}`,

      /* chromium based */
      '&::-webkit-scrollbar': {
        width: 10,
        height: 10,
      },
      '&::-webkit-scrollbar-track': {
        background: '#0f1216',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: grey[700],
        borderRadius: 8,
        border: '2px solid #0f1216',
        backgroundClip: 'padding-box',
      },
      '&::-webkit-scrollbar-thumb:hover': {
        backgroundColor: grey[600],
      },
      '&::-webkit-scrollbar-corner': {
        background: '#0f1216',
      },
    },
  },
};
