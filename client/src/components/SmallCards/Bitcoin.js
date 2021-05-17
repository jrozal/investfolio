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

const Bitcoin = (props) => (
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
            Bitcoin
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
              $44,907.31
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
        <TrendingDownIcon style={{ color: red[900], paddingRight: 5 }}/>
        <Typography
          variant="body2"
          style={{
            color: red[900],
            paddingRight: 10
          }}
          fontWeight={500}
        >
          -6.30%
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

export default Bitcoin;