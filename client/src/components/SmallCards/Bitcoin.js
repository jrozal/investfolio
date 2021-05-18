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
            variant="h6"
          >
            Bitcoin
          </Typography>
          <Typography
            color="textSecondary"
            variant="h7"
          >
            BTC / U.S. Dollar
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
            style={{ paddingTop: 10, paddingBottom: 10 }}
          >
              $44,907.31
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            style={{
              backgroundColor: red[600],
              height: 56,
              width: 56
            }}
          >
            <TrendingDownIcon style={{ fontSize: '2.25rem'  }} />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        style={{
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <Typography
          variant="body2"
          style={{
            color: red[900],
            paddingRight: 10,
            fontSize: '1rem',
            fontWeight: 500
          }}
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