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

const PercentReturn = ({ dailyPercentReturn }) => {
  let data;
  if (dailyPercentReturn) {
    const labels = dailyPercentReturn.map(data => data.symbol);
    const dataSet = dailyPercentReturn.map(data => data.percentChange);
    const colors = dataSet.map((value) => value < 0 ? red[300] : green[300]);

    data = {
      datasets: [
        {
          backgroundColor: colors,
          data: dataSet,
        },
      ],
      labels: labels
    };
  }


  const options = {
    indexAxis: 'y',
    plugins: { legend: { display: false } },
    animation: true,
    maintainAspectRatio: false,
    responsive: true
  };

  return (
    <Card>
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
  );
};

export default PercentReturn;