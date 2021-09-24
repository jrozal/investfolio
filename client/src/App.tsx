import { Box, Container, CssBaseline, Grid, makeStyles } from "@material-ui/core";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import Investments from "./components/Investments";
import IndexCards from './components/IndexCards';
import Navbar from "./components/Navbar";
import AssetAllocation from "./components/AssetAllocation";
import PercentReturn from "./components/PercentReturn";
import { useEffect, useState } from "react";
import axios from "axios";

const theme = createTheme({
  palette: {
    background: {
      default: '#f2f2f2'
    }
  },
  typography: {
    h5: {
      fontSize: '1.25rem'
    }
  }
});

const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '90%',
    margin: 'auto'
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 24,
    paddingBottom: 24
  },
});


const App = () => {
  const classes = useStyles();
  const [portfolioData, setPortfolioData] = useState([]);
  const [assetAllocationData, setAssetAllocationData] = useState([]);
  const [indexData, setIndexData] = useState([]);

  const getPortfolioData = async () => {
    const response = await axios.get('http://localhost:3001/portfolio-data')
    setPortfolioData(response.data.data)
    setAssetAllocationData(response.data.portfolioAllocation);
  };

  const getIndexData = async () => {
    const response = await axios.get('http://localhost:3001/index-data');
    setIndexData(response.data);
  };

  useEffect(() => {
    getPortfolioData();
    getIndexData();
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Navbar/>
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <div className={classes.content}>
            <Box>
              <Container>
                <Grid container spacing={3}>
                  <IndexCards indexData={indexData} />
                  <AssetAllocation assetAllocationData={assetAllocationData}/>
                  <PercentReturn dailyPercentReturn={portfolioData}/>
                  <Investments portfolioData={portfolioData}/>
                </Grid>
              </Container>
            </Box>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
};

export default App;
