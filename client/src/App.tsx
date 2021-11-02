import { Box, Container, CssBaseline, Grid, makeStyles } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import Header from "./components/Header";
import IndexCards from './components/IndexCards';
import AssetAllocation from "./components/AssetAllocation";
import PercentReturn from "./components/PercentReturn";
import Investments from "./components/InvestmentTable";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import "react-perfect-scrollbar/dist/css/styles.css";
import { theme } from "./styles/theme";
import API from "./api";

interface PortfolioRecord {
  symbol: string | null,
  description: string | null,
  pricePaid: string | null,
  quantity: number | string | null,
};

const useStyles = makeStyles({
  root: {
    '& .MuiPaper-rounded': {
      borderRadius: '8px'
    },
    '& .MuiPaper-elevation1': {
      boxShadow: `0px 2px 4px -1px rgb(0 0 0 / 11%)`
    },
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64
  },
  content: {
    paddingTop: 56,
    paddingBottom: 24,
    overflow: 'auto'
  },
});

const App = () => {
  const classes = useStyles();
  const [portfolioData, setPortfolioData] = useState([]);
  const [assetAllocationData, setAssetAllocationData] = useState([]);
  const [indexData, setIndexData] = useState([]);

  const getPortfolioData = async () => {
    try {
      const response = await API.get('/portfolio-data');
      setPortfolioData(response.data.data)
      setAssetAllocationData(response.data.portfolioAllocation);
    } catch (e) {
      console.error(e);
    }
  };

  const getIndexData = async () => {
    try {
      const response = await API.get('/index-data');
      setIndexData(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  const addPortfolioData = async (values: PortfolioRecord) => {
    try {
      const response = await API.post('/portfolio-data', values);
      if (response.statusText === 'Created') {
        getPortfolioData();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const updatePortfolioData = async (values: PortfolioRecord) => {
    try {
      const response = await API.patch('/portfolio-data', values);
      if (response.statusText === 'Update success') {
        getPortfolioData();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const deletePortfolioData = async (symbol: string | null) => {
    try {
      const response = await API.delete('/portfolio-data', { data: { symbol: symbol } });
      if (response.statusText === 'Deletion success') {
        getPortfolioData();
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getPortfolioData();
    getIndexData();
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <div className={classes.content}>
            <Box>
              <Container>
                <Grid container spacing={3}>
                  <IndexCards indexData={indexData} />
                  <AssetAllocation assetAllocationData={assetAllocationData} />
                  <PercentReturn dailyPercentReturn={portfolioData} />
                  <Investments
                    portfolioData={portfolioData}
                    addPortfolioData={addPortfolioData}
                    updatePortfolioData={updatePortfolioData}
                    deletePortfolioData={deletePortfolioData}
                  />
                </Grid>
              </Container>
            </Box>
          </div>
        </div>
      </div>
      <Footer />
    </ThemeProvider>
  )
};

export default App;
