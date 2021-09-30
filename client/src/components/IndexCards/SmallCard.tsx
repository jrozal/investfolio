import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core';
import PriceChange from './PriceChange';
import TrendingArrow from './TrendingArrow';

interface Props {
  data: {
    symbol: string,
    today: number,
    change: number
  }
}

const SmallCard = ({ data }: Props) => {
  const { symbol, today, change } = data;
  const priceChange = parseFloat(change.toFixed(2));
  const symbolDescription: { [key: string]: string } = {
    'SPY': 'S&P 500',
    'IWM': 'Russell 2000',
    'QQQ': 'Nasdaq 100',
    'BTC/USD': 'Bitcoin'
  };

  return (
    <Card>
      <CardContent>
        <Grid
          container
          spacing={3}
          style={{ justifyContent: 'space-between' }}
        >
          <Grid item>
            <Typography
              variant="h6"
            >
              {symbolDescription[symbol]}
            </Typography>
            <Typography
              color="textSecondary"
              style={{ fontSize: '0.9rem' }}
            >
              {symbol}
            </Typography>
            <Typography
              color="textPrimary"
              variant="h4"
              style={{ paddingTop: 10, paddingBottom: 10 }}
            >
              {today}
            </Typography>
          </Grid>
          <Grid item>
            <TrendingArrow priceChange={priceChange} />
          </Grid>
        </Grid>
        <Box
          style={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <PriceChange priceChange={priceChange} />
          <Typography>
            Last 24h
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
};

export default SmallCard;