import { Box, Card, CardContent, CardHeader, Divider, Grid } from "@material-ui/core";
import { Pie } from 'react-chartjs-2';


const AssetAllocation = () => {
  const data = {
    labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
    datasets: [
      {
        data: [20, 20, 20, 20, 20],
        backgroundColor: [
          '#E7F09F',
          '#5760A0',
          '#8B94C0',
          '#07B088',
          '#12123D',
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