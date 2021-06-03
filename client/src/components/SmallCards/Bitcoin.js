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

const Bitcoin = (props) => {
  const renderCardContent = () => {
    if (props.btc) {
      const priceChange = parseFloat(props.btc.change);
      let trendingArrowComponent = '';
      let priceChangeComponent = '';

      if (priceChange > 0) {
        trendingArrowComponent = (
          <Avatar
            style={{
              backgroundColor: green[600],
              height: 56,
              width: 56
            }}
          >
            <TrendingUpIcon style={{ fontSize: '2.25rem' }} />
          </Avatar>
        );

        priceChangeComponent = (
          <Typography
            variant="body2"
            style={{
              color: green[900],
              paddingRight: 10,
              fontSize: '1rem',
              fontWeight: 500
            }}
          >
            +{props.btc.change}
          </Typography>
        );


      } else {
        trendingArrowComponent = (
          <Avatar
            style={{
              backgroundColor: red[600],
              height: 56,
              width: 56
            }}
          >
            <TrendingDownIcon style={{ fontSize: '2.25rem' }} />
          </Avatar>
        );

        priceChangeComponent = (
          <Typography
            variant="body2"
            style={{
              color: red[900],
              paddingRight: 10,
              fontSize: '1rem',
              fontWeight: 500
            }}
          >
            {props.btc.change}
          </Typography>
        );
      };

      return (
        <>
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
                style={{ fontSize: '0.9rem' }}
              >
                BTC / U.S. Dollar
              </Typography>
              <Typography
                color="textPrimary"
                variant="h4"
                style={{ paddingTop: 10, paddingBottom: 10 }}
              >
                {'$' + props.btc.today}
              </Typography>
            </Grid>
            <Grid item>
              {trendingArrowComponent}
            </Grid>
          </Grid>
          <Box
            style={{
              alignItems: 'center',
              display: 'flex',
            }}
          >
              {priceChangeComponent}
            <Typography
              color="textSecondary"
              variant="caption"
            >
              Last 24h
            </Typography>
          </Box>
        </>
      )
    }
  };

  return (
    <Card>
      <CardContent>
        {renderCardContent()}
      </CardContent>
    </Card>
  )
};

export default Bitcoin;