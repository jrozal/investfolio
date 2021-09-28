import { makeStyles } from '@material-ui/core';
import { green, red } from '@material-ui/core/colors';
import { Typography } from '@material-ui/core';

interface Props {
  priceChange: number;
};

const useStyles = makeStyles({
  price: {
    paddingRight: 10,
    fontSize: '1rem',
    fontWeight: 700,
    color: (props) => props > 0
    ? green[600]
    : red[600]
  }
});

const PriceChange = ({ priceChange }: Props) => {
  const classes = useStyles(priceChange);

  return (
    <Typography className={classes.price}>
      {priceChange > 0 && '+'}{priceChange}%
    </Typography>
  )
};

export default PriceChange;