import React from 'react';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography
} from '@material-ui/core';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import { green, red } from '@material-ui/core/colors';

const SP500 = (props) => (
  <Card {...props}>
    <CardContent>
      <Grid
        container
        spacing={3}
        style={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="h6"
          >
            S&P 500
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
              4,173.85
          </Typography>
        </Grid>
      </Grid>
      <Box
        style={{
          alignItems: 'center',
          display: 'flex',
        }}
        pt={1}
      >
        <TrendingUpIcon style={{ color: green[900], paddingRight: 5 }}/>
        <Typography
          variant="body2"
          style={{
            color: green[900],
            paddingRight: 10
          }}
        >
          1.49%
        </Typography>
        <Typography
          color="textSecondary"
          variant="caption"
        >
          Last 24h
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

export default SP500;