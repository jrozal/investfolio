import { Avatar, makeStyles } from '@material-ui/core';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import { green, red } from '@material-ui/core/colors';

interface Props {
  priceChange: number;
};

const useStyles = makeStyles({
  avatar: {
    height: 56,
    width: 56,
    backgroundColor: (props) => props > 0
    ? green[600]
    : red[600]
  },
  trending: {
    fontSize: '2.25rem'
  },
});

const TrendingArrow = ({ priceChange }: Props) => {
  const classes = useStyles(priceChange);

  return (
    <Avatar className={classes.avatar}>
      {priceChange > 0
      ? <TrendingUpIcon className={classes.trending}/>
      : <TrendingDownIcon className={classes.trending}/>}
    </Avatar>
  )
};

export default TrendingArrow;