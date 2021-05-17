import React from 'react';
import Navbar from './Navbar'
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { styled } from '@material-ui/core/styles';
import AssetAllocation from './AssetAllocation';
import Investments from './Investments';
import SP500 from './SmallCards/SP500';
import Nasdaq from './SmallCards/Nasdaq';
import Russell2000 from './SmallCards/Russell2000';
import Bitcoin from './SmallCards/Bitcoin';

const background = createMuiTheme({
  palette: {
    background: {
      // default: "#f4f6f8", //old bg color
      default: "#FEFBEF",
      height: '100%',
      width: '100%'
    }
  }
});

const AppRoot = styled('div')({
  display: 'flex',
  height: '100%',
  overflow: 'hidden',
  width: '100%'
});

const AppWrapper = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
  paddingTop: 64
});

const AppContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden',
  paddingTop: 24,
  paddingBottom: 24
});

const AppContent = styled('div')({
  flex: '1 1 auto',
  height: '100%',
});

const App = () => (
  <MuiThemeProvider theme={background}>
    <CssBaseline />
    <AppRoot>
      <Navbar />
      <AppWrapper>
        <AppContainer>
          <AppContent>
            <Box>
              <Container maxWidth={false}>
                <Grid
                  container
                  spacing={3}
                >
                  <Grid
                    item
                    lg={3}
                    sm={6}
                    xl={3}
                    xs={12}
                  >
                    <SP500 />
                  </Grid>
                  <Grid
                    item
                    lg={3}
                    sm={6}
                    xl={3}
                    xs={12}
                  >
                    <Nasdaq />
                  </Grid>
                  <Grid
                    item
                    lg={3}
                    sm={6}
                    xl={3}
                    xs={12}
                  >
                    <Russell2000 />
                  </Grid>
                  <Grid
                    item
                    lg={3}
                    sm={6}
                    xl={3}
                    xs={12}
                  >
                    <Bitcoin sx={{ height: '100%' }} />
                  </Grid>
                  <Grid
                    item
                    lg={4}
                    md={6}
                    xl={3}
                    xs={12}
                  >
                    <AssetAllocation sx={{ height: '100%' }} />
                  </Grid>
                  <Grid
                    item
                    lg={8}
                    md={12}
                    xl={9}
                    xs={12}
                  >
                    <Investments />
                  </Grid>
                </Grid>
              </Container>
            </Box>
          </AppContent>
        </AppContainer>
      </AppWrapper>
    </AppRoot>
  </MuiThemeProvider>
);

export default App;