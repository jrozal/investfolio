import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  colors,
  useTheme
} from '@material-ui/core';

const AssetAllocation = (props) => {
  const theme = useTheme();

  const dummyData = {
    labels: ['AAPL', 'GOOGL', 'FB'],
    datasets: [
      {
        data: [33, 33, 33],
        backgroundColor: [
          colors.indigo[500],
          colors.red[600],
          colors.orange[600]
        ],
        hoverOffset: 4
      }
    ]
  };

  const options = {
    animation: false,
    layout: { padding: 0 },
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    responsive: true,
  }

  return (
    <Card {...props}>
      <CardHeader title="Asset Allocation" />
      <Divider />
      <CardContent>
        <Box>
          <Pie
            data={dummyData}
            height={300}
            options={options}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default AssetAllocation;