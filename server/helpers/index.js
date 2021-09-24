// parse data for client
const parseIndexData = (data) => {
  let newData = [];

  for (stock in data) {
    let today = parseFloat(data[stock].values[0].close).toFixed(2);
    let yesterday = parseFloat(data[stock].values[1].close).toFixed(2);
    let change = (((today - yesterday) / yesterday) * 100).toFixed(2) + '%';

    newData.push({
      symbol: stock,
      today: today,
      yesterday: yesterday,
      change: change
    });
  }

  return newData;
};

// calculate portfolio data for client
const calculatePortfolioData = async (apiDataRecord, queryDataRecord) => {
  let newData = [];
  let portfolioAllocation = [];
  let portfolioValue = 0;

  await queryDataRecord.forEach((queryData, i) => {
    let apiData = apiDataRecord[i];

    if (apiData.symbol === queryData.symbol) {

      if (apiData.symbol.includes('USD')) {
        let priceChange = (apiData.data.c[0] - apiData.data.o[0]).toFixed(2);
        let percentChange = ((priceChange / apiData.data.o[0]) * 100).toFixed(2);
        let profitLossAmount = (queryData.shares * priceChange).toFixed(2);
        let marketValue = (queryData.shares * apiData.data.c[0]).toFixed(2);

        newData[i] = {
          symbol: queryData.symbol,
          description: queryData.description,
          price: apiData.data.c[0],
          priceChange: priceChange,
          percentChange: percentChange,
          profitLossAmount: profitLossAmount,
          quantity: queryData.shares,
          marketValue: marketValue
        }

        portfolioValue += parseFloat(marketValue);
      }
      else {
        let priceChange = (apiData.data.c - apiData.data.pc).toFixed(2);
        let percentChange = ((priceChange / apiData.data.pc) * 100).toFixed(2);
        let profitLossAmount = (queryData.shares * priceChange).toFixed(2);
        let marketValue = (queryData.shares * apiData.data.c).toFixed(2);

        newData[i] = {
          symbol: queryData.symbol,
          description: queryData.description,
          price: apiData.data.c,
          priceChange: priceChange,
          percentChange: percentChange,
          profitLossAmount: profitLossAmount,
          quantity: queryData.shares,
          marketValue: marketValue
        }

        portfolioValue += parseFloat(marketValue);
      }
    }
  });

  await queryDataRecord.forEach((queryData, i) => {
    let apiData = apiDataRecord[i];
    let marketValue = (queryData.shares * apiData.data.c).toFixed(2);
    let calculatedAllocation = (parseFloat(marketValue) / parseFloat(portfolioValue)).toFixed(2);
    newData[i]['portfolioAllocation'] = calculatedAllocation;

    portfolioAllocation.push({
      symbol: queryData.symbol,
      portfolioAllocation: calculatedAllocation
    });
  });

  return {
    data: newData,
    portfolioAllocation: portfolioAllocation
  }
};

module.exports = { parseIndexData, calculatePortfolioData }