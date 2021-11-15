import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  ThemeProvider,
} from "@mui/material";
import { theme } from '../global/theme';
import { Doughnut } from 'react-chartjs-2';
import chroma from "chroma-js";

const AssetAllocation = ({ assetAllocationData }) => {
  const chartLabels = assetAllocationData.map(data => data.symbol);
  const dataSet = assetAllocationData.map(
    (data) => parseFloat(data.portfolioAllocation) * 100
  );
  const colors = chroma
    .scale(["#313bf0", "#96ffea", "#008080"])
    .mode("lrgb")
    .colors(dataSet.length);

  const data = (canvas) => {
    return {
      labels: chartLabels,
      datasets: [
        {
          data: dataSet,
          backgroundColor: colors,
          hoverOffset: 4,
        },
      ],
    };
  };

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            return ` ${context.label}: ${context.dataset.data[
              context.dataIndex
            ].toFixed(2)}%`;
          },
        },
      },
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 8,
          usePointStyle: true,
          pointStyle: "circle",
          color: "#4c4c4c",
          padding: 15,
          font: {
            family: "Lato, sans-serif",
            size: 13,
          },
        },
        title: {
          display: true,
          padding: 10,
          text: "",
        }
      },
    },
    cutout: "55%",
    layout: { padding: 0 },
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid item lg={6} md={6} xl={6} xs={12}>
        <Card variant="rounded-soft">
          <CardHeader
            title="Asset Allocation"
            sx={{ height: "3rem", padding: "0px" }}
          />
          <CardContent>
            <Box sx={{ width: "100%", height: 450 }}>
              <Doughnut data={data} height={400} options={options} />
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </ThemeProvider>
  );
};

export default AssetAllocation;
