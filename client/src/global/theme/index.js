import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    background: {
      default: "#F4F6FA",
    },
  },
  typography: {
    fontFamily: "Lato, sans-serif",
    h5: {
      fontSize: "1.3rem",
      fontWeight: 700,
    },
    h6: {
      fontSize: "1.3rem",
      fontWeight: 700,
    },
  },
  components: {
    MuiCard: {
      variants: [
        {
          props: { variant: "rounded-soft" },
          style: {
            borderRadius: "12px",
            padding: "5px 20px 20px 20px",
            boxShadow: "0 0 8px rgba(0,0,0,0.11)",
          },
        },
      ],
    },
  },
});