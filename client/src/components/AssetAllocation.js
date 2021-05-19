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
    labels: ['ARKK', 'BTC', 'DIS', 'ETH', 'FB', 'VGT', 'VTI'],
    datasets: [
      {
        data: [1.2, 3.7, 7, 3.65, 4.9, 10.85, 53.96],
        backgroundColor: [
          '#E7F09F',
          '#5760A0',
          '#8B94C0',
          '#07B088',
          '#12123D',
          '#bff9e4',
          '#8CDABF'
        ],
        hoverOffset: 4
      }
    ]
  };

  const options = {
    animation: true,
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
            height={400}
            options={options}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default AssetAllocation;