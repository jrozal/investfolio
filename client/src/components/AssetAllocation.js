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

const AssetAllocation = ({ assetAllocationData }) => {
  const chartLabels = assetAllocationData.map(data => data.symbol);
  const dataSet = assetAllocationData.map(
    (data) => parseFloat(data.portfolioAllocation) * 100
  );

  const data = (canvas) => {
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(60, 155, 252, 0.2)");
    gradient.addColorStop(1, "rgba(91, 127, 253, 1)");

    const gradient2 = ctx.createLinearGradient(0, 0, 0, 400);
    gradient2.addColorStop(0, "rgba(255, 169, 117, 0)");
    gradient2.addColorStop(1, "rgba(255, 91, 117, 1)");

    const gradient3 = ctx.createLinearGradient(0, 0, 0, 400);
    gradient3.addColorStop(1, "rgba(226, 41, 240, 1)");
    gradient3.addColorStop(0, "rgba(154, 45, 247, 0)");

    return {
      labels: chartLabels,
      datasets: [
        {
          data: dataSet,
          backgroundColor: [
            '#EFF7F6',
            '#B0E0DD',
            '#9CB2BB',
            '#18A657',
            '#66BD9E',
            '#414D58',
            gradient3,
            "#A8ABD2",
            "#F5F6FA",
            gradient2,
            gradient,
            '#364CC9',
            "#313BF3",
            "#555158",
            "#A228DF",
            "#82A53F",
            "#529FE1",
            "#E2234B",
          ],
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
            size: "13px",
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
