import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const theme = createMuiTheme({
  typography: {
    body1: {
      fontFamily: "'Pacifico', cursive !important",
      fontSize: '30px !important',
    }
  },
});

const Navbar = () => (
  <AppBar>
    <Toolbar>
      <ThemeProvider theme={theme}>
        <Typography>
          investfolio
        </Typography>
      </ThemeProvider>
    </Toolbar>
  </AppBar>
);

export default Navbar;