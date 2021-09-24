import { Box, Card, CardContent, CardHeader, Divider, Grid } from "@material-ui/core";
import { green, red } from "@material-ui/core/colors";
import { Bar } from "react-chartjs-2";

interface PortfolioData {
  symbol: string,
  description: string,
  price: number,
  priceChange: string,
  percentChange: string,
  profitLossAmount: string,
  quantity: number,
  marketValue: string,
  portfolioAllocation: string
};

interface Props {
  dailyPercentReturn: PortfolioData[];
}

const PercentReturn = ({ dailyPercentReturn }: Props) => {
  const chartLables = dailyPercentReturn.map(data => data.symbol);
  const dataSet = dailyPercentReturn.map(data => parseFloat(data.percentChange));
  const colors = dataSet.map(value => value < 0 ? red[300] : green[300]);

  const data = {
    labels: chartLables,
    datasets: [
      {
        backgroundColor: colors,
        data: dataSet
      }
    ],
  }

  const options = {
    indexAxis: 'y' as 'y',
    plugins: { legend: { display: false } },
    maintainAspectRatio: false,
    responsive: true
  };

  return (
    <Grid
      item
      lg={6}
      md={6}
      xl={6}
      xs={12}
    >
      <Card style={{ height: '100%' }}>
        <CardHeader title="Daily Percentage Returns"/>
        <Divider />
        <CardContent>
          <Box>
            <Bar
              data={data}
              height={400}
              options={options}
            />
          </Box>
        </CardContent>
      </Card>
    </Grid>
  )
};

export default PercentReturn;