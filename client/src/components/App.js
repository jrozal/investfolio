import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { styled } from '@material-ui/core/styles';
import Navbar from './Navbar';
import AssetAllocation from './AssetAllocation';
import Investments from './Investments';
import PercentReturn from './PercentReturn';
import SP500 from './SmallCards/SP500';
import Nasdaq from './SmallCards/Nasdaq';
import Russell2000 from './SmallCards/Russell2000';
import Bitcoin from './SmallCards/Bitcoin';

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#f2f2f2",
      height: '100%',
      width: '100%'
    }
  },
  typography: {
    h5: {
      fontSize: '1.25rem'
    }
  }
});

const AppRoot = styled('div')({
  display: 'flex',
  height: '100%',
  overflow: 'hidden',
  width: '90%',
  margin: 'auto'
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

const App = () => {
  const [data, setData] = useState({
    indexData: {},
    portfolioData: {}
  });

  const getIndexData = () => {
    axios.get('/getIndexData')
      .then(res => {
        setData((prevState) => {
          return({
            ...prevState,
            indexData: res.data
          })
        })
      })
      .catch(err => console.log(err))
  };

  const getPortfolioData = () => {
    axios.get('/getPortfolioData')
      .then(res => {
        setData((prevState) => {
          return ({
            ...prevState,
            portfolioData: res.data
          });
        });
      })
      .catch(err => console.log(err));
  };

  const addPortfolioData = (form) => {
    axios.post('/addPortfolioData', form)
      .then(res => getPortfolioData())
      .catch(err => console.log('POST error', err));
  };

  useEffect(() => {
    getIndexData();
    getPortfolioData();
  },[]);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar/>
      <AppRoot>
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
                      <SP500 spx={data.indexData['SPX']}/>
                    </Grid>
                    <Grid
                      item
                      lg={3}
                      sm={6}
                      xl={3}
                      xs={12}
                    >
                      <Nasdaq ndx={data.indexData['NDX']}/>
                    </Grid>
                    <Grid
                      item
                      lg={3}
                      sm={6}
                      xl={3}
                      xs={12}
                    >
                      <Russell2000 rut={data.indexData['RUT']}/>
                    </Grid>
                    <Grid
                      item
                      lg={3}
                      sm={6}
                      xl={3}
                      xs={12}
                    >
                      <Bitcoin btc={data.indexData['BTC/USD']}/>
                    </Grid>
                    <Grid
                      item
                      lg={6}
                      md={6}
                      xl={3}
                      xs={12}
                    >
                      <AssetAllocation
                        portfolioAllocation={data.portfolioData.portfolioAllocation}
                        style={{ height: '100%' }} />
                    </Grid>
                    <Grid
                      item
                      lg={6}
                      md={6}
                      xl={3}
                      xs={12}
                    >
                      <PercentReturn dailyPercentReturn={data.portfolioData.data}/>
                    </Grid>
                    <Grid
                      item
                      lg={12}
                      md={12}
                      xl={9}
                      xs={12}
                    >
                      <Investments
                        portfolioData={data.portfolioData.data}
                        addPortfolioData={addPortfolioData}
                      />
                    </Grid>
                  </Grid>
                </Container>
              </Box>
            </AppContent>
          </AppContainer>
        </AppWrapper>
      </AppRoot>
    </MuiThemeProvider>
  )
};

export default App;