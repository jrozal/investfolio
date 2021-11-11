// parse data for client
const parseIndexData = (data) => {
  return data.map((record) => {
    return {
      symbol: record.symbol,
      today: record.c || record.last,
      change: record.dp || (((record.last - record.open) / record.open) * 100),
      chartData: record.chartData
    }
  });
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
        let priceChange = (apiData.data.last - apiData.data.open).toFixed(2);
        let percentChange = ((priceChange / apiData.data.open) * 100).toFixed(2);
        let profitLossAmount = (queryData.shares * priceChange).toFixed(2);
        let marketValue = (queryData.shares * apiData.data.last).toFixed(2);

        newData[i] = {
          symbol: queryData.symbol,
          description: queryData.description,
          price: apiData.data.last,
          pricePaid: queryData.pricePaid,
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
          pricePaid: queryData.pricePaid,
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
    let marketValue = (queryData.shares * (apiData.data.c || apiData.data.last)).toFixed(2);
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