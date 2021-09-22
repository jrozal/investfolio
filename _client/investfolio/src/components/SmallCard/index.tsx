import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core';
import PriceChange from './PriceChange';
import TrendingArrow from './TrendingArrow';


const SmallCard = () => {

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
              color="textSecondary"
              variant="h6"
            >
              S&P 500
            </Typography>
            <Typography
              color="textSecondary"
              style={{ fontSize: '0.9rem' }}
            >
              SPX
            </Typography>
          </Grid>
          <Grid item>
            <TrendingArrow priceChange={1}/>
          </Grid>
        </Grid>
        <Box
          style={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <PriceChange priceChange={1}/>
          <Typography>
            Last 24h
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
};

export default SmallCard;