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

module.exports = { parseIndexData }