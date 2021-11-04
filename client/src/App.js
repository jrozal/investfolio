import { useState, useEffect } from 'react';
import Portfolio from './components/Portfolio';
import API from './api'
import { StyledEngineProvider } from '@mui/material/styles';

const App = () => {
  const [portfolioData, setPortfolioData] = useState([]);

  const getPortfolioData = async () => {
    try {
      const response = await API.get('/portfolio-data');
      setPortfolioData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPortfolioData();
  }, []);

  return (
    // StyledEngineProvider allows CSS-in-JS to be used
    <StyledEngineProvider injectFirst>
      <div className="App">
        <Portfolio data={portfolioData}/>
      </div>
    </StyledEngineProvider>
  );
}

export default App;
