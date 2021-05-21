import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  colors
} from '@material-ui/core';

const AssetAllocation = ({ portfolioAllocation }) => {
  let data;
  if (portfolioAllocation) {
    const labels = portfolioAllocation.map(data => data.symbol);
    const dataSet = portfolioAllocation.map(data => (data.portfolioAllocation * 100).toFixed(2));

    data = {
      labels: labels,
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
  }

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
    <Card>
      <CardHeader title="Asset Allocation" />
      <Divider />
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
  );
};

export default AssetAllocation;