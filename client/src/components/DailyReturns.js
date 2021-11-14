import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Grid,
  ThemeProvider
} from "@mui/material";
import { theme } from "../global/theme";
import { Bar } from "react-chartjs-2";


const DailyReturns = ({ dailyReturnsData }) => {
  const chartLabels = dailyReturnsData.map((data) => data.symbol);
  const dataSet = dailyReturnsData.map((data) => parseFloat(data.percentChange));

  const data = (canvas) => {
    const ctx = canvas.getContext("2d");

    const greenGradient = ctx.createLinearGradient(0, 0, 0, 400);
    greenGradient.addColorStop(0, "rgba(152, 222, 91, 1)");
    greenGradient.addColorStop(1, "rgba(8, 225, 174, 1)");

    const redGradient = ctx.createLinearGradient(0, 0, 0, 400);
    redGradient.addColorStop(0, "rgba(130, 114, 114, 1)");
    redGradient.addColorStop(1, "rgba(216, 196, 173, 1)");

  const colors = dataSet.map((value) =>
    value < 0 ? redGradient : greenGradient
  );


    return {
      labels: chartLabels,
      datasets: [
        {
          backgroundColor: colors,
          data: dataSet,
        },
      ],
    };
  };

  const options = {
    indexAxis: "y",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          title: function (context) {
            return "";
          },
          label: function (context) {
            return ` ${context.label}: ${context.dataset.data[
              context.dataIndex
            ].toFixed(2)}%`;
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          callback: function (value, index, values) {
            return value + "%";
          },
          font: {
            family: "Lato, sans-serif",
            size: 13,
          },
          color: "#4c4c4c"
        },
        grid: {
          color: "",
        },
      },
      y: {
        ticks: {
          font: {
            family: "Lato, sans-serif",
            size: 13,
          },
          color: "#4c4c4c"
        },
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid item lg={6} md={6} xl={6} xs={12}>
        <Card sx={{ height: "100%" }} variant="rounded-soft">
          <CardHeader
            title="Daily Percentage Returns"
            sx={{ height: "3rem", padding: "0px" }}
          />
          <CardContent>
            <Box>
              <Bar data={data} height={450} options={options} />
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </ThemeProvider>
  );
};

export default DailyReturns;