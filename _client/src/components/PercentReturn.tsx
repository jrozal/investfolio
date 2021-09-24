import { Box, Card, CardContent, CardHeader, Divider, Grid } from "@material-ui/core";
import { Bar } from "react-chartjs-2";

const PercentReturn = () => {

  const data = {
    labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet', 'Black'],
    datasets: [
      {
        backgroundColor: [
          '#E7F09F',
          '#5760A0',
          '#8B94C0',
          '#07B088',
          '#12123D',
          '#E7F09F',
          '#5760A0',
          '#8B94C0',
        ],
        data: [-3, -2, -1, -0.5, 0.5, 1, 2, 3]
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