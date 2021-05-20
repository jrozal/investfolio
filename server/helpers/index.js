// parse data for client
const parseIndexData = (data) => {
  let newData = {};

  for (stock in data) {
    let today = parseFloat(data[stock].values[0].close).toFixed(2);
    let yesterday = parseFloat(data[stock].values[1].close).toFixed(2);
    let change = (((today - yesterday) / yesterday) * 100).toFixed(2) + '%';

    newData[stock] = {
      today: today,
      yesterday: yesterday,
      change: change
    }
  }

  return newData;
};

// calculate portfolio data for client
const calculatePortfolioData = async (apiData, queryData) => {
  let newData = [];
  let portfolioAllocation = [];
  let portfolioValue = 0;

  await queryData.forEach((qData, i) => {
    let aData = apiData[i];

    if (aData.symbol === qData.symbol) {

      if (aData.symbol.includes('USD')) {
        let priceChange = (aData.data.c[0] - aData.data.o[0]).toFixed(2);
        let percentChange = ((priceChange / aData.data.o[0]) * 100).toFixed(2);
        let profitLossAmount = (qData.shares * priceChange).toFixed(2);
        let marketValue = (qData.shares * aData.data.c[0]).toFixed(2);

        newData[i] = {
          symbol: qData.symbol,
          description: qData.description,
          price: aData.data.c[0],
          priceChange: priceChange,
          percentChange: percentChange,
          profitLossAmount: profitLossAmount,
          quantity: qData.shares,
          marketValue: marketValue
        }

        portfolioValue += parseFloat(marketValue);
      }
      else {
        let priceChange = (aData.data.c - aData.data.pc).toFixed(2);
        let percentChange = ((priceChange / aData.data.pc) * 100).toFixed(2);
        let profitLossAmount = (qData.shares * priceChange).toFixed(2);
        let marketValue = (qData.shares * aData.data.c).toFixed(2);

        newData[i] = {
          symbol: qData.symbol,
          description: qData.description,
          price: aData.data.c,
          priceChange: priceChange,
          percentChange: percentChange,
          profitLossAmount: profitLossAmount,
          quantity: qData.shares,
          marketValue: marketValue
        }

        portfolioValue += parseFloat(marketValue);
      }
    }
  });

  await queryData.forEach((qData, i) => {
    let aData = apiData[i];
    let marketValue = (qData.shares * aData.data.c).toFixed(2);
    let calculatedAllocation = (parseFloat(marketValue) / parseFloat(portfolioValue)).toFixed(2);
    newData[i]['portfolioAllocation'] = calculatedAllocation;

    portfolioAllocation.push({
      symbol: qData.symbol,
      portfolioAllocation: calculatedAllocation
    });
  });

  return {
    data: newData,
    portfolioAllocation: portfolioAllocation
  }
};

module.exports = { parseIndexData, calculatePortfolioData }