import { Box, Card, CardContent, CardHeader, Grid } from "@material-ui/core";
import { Doughnut } from 'react-chartjs-2';

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
          '#B0E0DD',
          '#9CB2BB',
          '#18A657',
          '#66BD9E',
          '#414D58',
          '#364CC9',
        ],
        hoverOffset: 4
      }
    ]
  };

  const options = {
    cutout: '60%',
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
          <CardContent>
            <Box>
              <Doughnut
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