import { Box, Card, CardContent, CardHeader, Divider, Grid } from "@material-ui/core";
import { Pie } from 'react-chartjs-2';

interface AssetAllocationData {
  symbol: string,
  portfolioAllocation: string
}

interface Props {
  assetAllocationData: AssetAllocationData[];
}

const AssetAllocation = ({ assetAllocationData }: Props) => {
  const chartLabels = assetAllocationData.map(data => data.symbol);
  const dataSet = assetAllocationData.map(data => (
    (parseFloat(data.portfolioAllocation) * 100)
  ));


  const data = {
    labels: chartLabels,
    datasets: [
      {
        data: dataSet,
        backgroundColor: [
          '#E7F09F',
          '#5760A0',
          '#8B94C0',
          '#07B088',
          '#12123D',
          '#bff9e4',
          '#8CDABF',
          '#B5A2CF',
          '#A9E6E6',
          '#1EBC82',
          '#06734F',
          '#A5E7E7'
        ],
        hoverOffset: 4
      }
    ]
  };

  const options = {
    layout: { padding: 0 },
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <Grid
      item
      lg={6}
      md={6}
      xl={6}
      xs={12}
    >
      <Card>
        <CardHeader title="Asset Allocation"/>
          <Divider/>
          <CardContent>
            <Box>
              <Pie
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

export default AssetAllocation;