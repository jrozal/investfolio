import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    background: {
      default: "#F4F6FA",
    }
  },
  typography: {
    fontFamily: 'Lato, sans-serif',
    h5: {
      fontSize: '1.3rem',
      fontWeight: 700
    },
    h6: {
      fontSize: '1.3rem',
      fontWeight: 700
    },
  }
});