import { createTheme, Theme } from '@mui/material';
import { MuiDefaultTheme } from './MuiDefaultTheme';

// ===================== Dark theme =====================
import { MuiAccordion as darkMuiAccordion } from './dark/MuiAccordion';
import { MuiAccordionDetails as darkMuiAccordionDetails } from './dark/MuiAccordionDetails';
import { MuiAccordionSummary as darkMuiAccordionSummary } from './dark/MuiAccordionSummary';
import { MuiButton as darkMuiButton } from './dark/MuiButton';
import { MuiCircularProgress as darkCircularProgress } from './dark/MuiCircularProgress';
import {
  MuiDialog as darkDialog,
  MuiDialogActions as darkDialogActions,
  MuiDialogTitles as darkDialogTitle,
} from './dark/MuiDialog';
import { MuiDivider as darkMuiDivider } from './dark/MuiDivider';
import { MuiDrawer as darkMuiDrawer } from './dark/MuiDrawer';
import { MuiFormControlLabel as darkMuiFormControlLabel } from './dark/MuiFormControlLabel';
import { MuiIconButton as darkMuiIconButton } from './dark/MuiIconButton';
import { MuiInputLabel as darkInputLabel } from './dark/MuiInputLabel';
import { MuiMenuItem as darkMenuItem } from './dark/MuiMenuItem';
import { MuiPalette as darkPalette } from './dark/MuiPalette';
import { MuiPaper as darkPaper } from './dark/MuiPaper';
import { MuiSelect as darkSelect } from './dark/MuiSelect';
import { MuiSvgIcon as darkMuiSvgIcon } from './dark/MuiSvgIcon';
import { MuiTable as darkMuiTable } from './dark/MuiTable';
import { MuiTableCell as darkMuiTableCell } from './dark/MuiTableCell';
import { MuiTableHead as darkMuiTableHead } from './dark/MuiTableHead';
import { MuiTableRow as darkMuiTableRow } from './dark/MuiTableRow';
import { MuiTypography as darkTypography } from './dark/MuiTypography';
import { MuiCssBaseline as darkMuiCssBaseline } from './dark/MuiCssBaseline';

// ===================== Light theme =====================
import { MuiAccordion as lightMuiAccordion } from './light/MuiAccordion';
import { MuiAccordionDetails as lightMuiAccordionDetails } from './light/MuiAccordionDetails';
import { MuiAccordionSummary as lightMuiAccordionSummary } from './light/MuiAccordionSummary';
import { MuiButton as lightMuiButton } from './light/MuiButton';
import { MuiCircularProgress as lightCircularProgress } from './light/MuiCircularProgress';
import {
  MuiDialog as lightDialog,
  MuiDialogActions as lightDialogActions,
  MuiDialogTitles as lightDialogTitle,
} from './light/MuiDialog';
import { MuiDivider as lightMuiDivider } from './light/MuiDivider';
import { MuiDrawer as lightMuiDrawer } from './light/MuiDrawer';
import { MuiFormControlLabel as lightMuiFormControlLabel } from './light/MuiFormControlLabel';
import { MuiIconButton as lightMuiIconButton } from './light/MuiIconButton';
import { MuiInputLabel as lightInputLabel } from './light/MuiInputLabel';
import { MuiMenuItem as lightMenuItem } from './light/MuiMenuItem';
import { MuiPalette as lightPalette } from './light/MuiPalette';
import { MuiPaper as lightPaper } from './light/MuiPaper';
import { MuiSelect as lightSelect } from './light/MuiSelect';
import { MuiSvgIcon as lightMuiSvgIcon } from './light/MuiSvgIcon';
import { MuiTable as lightMuiTable } from './light/MuiTable';
import { MuiTableCell as lightMuiTableCell } from './light/MuiTableCell';
import { MuiTableHead as lightMuiTableHead } from './light/MuiTableHead';
import { MuiTableRow as lightMuiTableRow } from './light/MuiTableRow';
import { MuiTypography as lightTypography } from './light/MuiTypography';

export const darkTheme: Theme = createTheme({
  ...MuiDefaultTheme,
  palette: darkPalette,
  components: {
    MuiAccordion: darkMuiAccordion,
    MuiAccordionDetails: darkMuiAccordionDetails,
    MuiAccordionSummary: darkMuiAccordionSummary,
    MuiButton: darkMuiButton,
    MuiCircularProgress: darkCircularProgress,
    MuiDialog: darkDialog,
    MuiDialogActions: darkDialogActions,
    MuiDialogTitle: darkDialogTitle,
    MuiDivider: darkMuiDivider,
    MuiDrawer: darkMuiDrawer,
    MuiFormControlLabel: darkMuiFormControlLabel,
    MuiIconButton: darkMuiIconButton,
    MuiInputLabel: darkInputLabel,
    MuiMenuItem: darkMenuItem,
    MuiPaper: darkPaper,
    MuiSelect: darkSelect,
    MuiSvgIcon: darkMuiSvgIcon,
    MuiTable: darkMuiTable,
    MuiTableCell: darkMuiTableCell,
    MuiTableHead: darkMuiTableHead,
    MuiTableRow: darkMuiTableRow,
    MuiTypography: darkTypography,
    MuiCssBaseline: darkMuiCssBaseline,
  },
});

export const lightTheme: Theme = createTheme({
  ...MuiDefaultTheme,
  palette: lightPalette,
  components: {
    MuiAccordion: lightMuiAccordion,
    MuiAccordionDetails: lightMuiAccordionDetails,
    MuiAccordionSummary: lightMuiAccordionSummary,
    MuiButton: lightMuiButton,
    MuiCircularProgress: lightCircularProgress,
    MuiDialog: lightDialog,
    MuiDialogActions: lightDialogActions,
    MuiDialogTitle: lightDialogTitle,
    MuiDivider: lightMuiDivider,
    MuiDrawer: lightMuiDrawer,
    MuiFormControlLabel: lightMuiFormControlLabel,
    MuiIconButton: lightMuiIconButton,
    MuiInputLabel: lightInputLabel,
    MuiMenuItem: lightMenuItem,
    MuiPaper: lightPaper,
    MuiSelect: lightSelect,
    MuiSvgIcon: lightMuiSvgIcon,
    MuiTable: lightMuiTable,
    MuiTableCell: lightMuiTableCell,
    MuiTableHead: lightMuiTableHead,
    MuiTableRow: lightMuiTableRow,
    MuiTypography: lightTypography,
  },
});
