import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  colors
} from '@material-ui/core';
import { green, red } from '@material-ui/core/colors';

const PercentReturn = (props) => {
  const data = [-15, 110.5, 42, 103, 70, 18, 37];
  const colors = data.map((value) => value < 0 ? red[300] : green[300]);

  const mockData = {
    datasets: [
      {
        backgroundColor: colors,
        data: data,
      },
    ],
    labels: ['ARKK', 'BTC', 'DIS', 'ETH', 'FB', 'VGT', 'VTI']
  };

  const options = {
    indexAxis: 'y',
    plugins: { legend: { display: false } },
    animation: true,
    maintainAspectRatio: false,
    responsive: true
  };

  return (
    <Card {...props}>
      <CardHeader title="Percentage Returns"/>
      <Divider />
      <CardContent>
        <Box>
          <Bar
            data={mockData}
            height={400}
            options={options}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default PercentReturn;