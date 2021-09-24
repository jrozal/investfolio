import { Grid } from '@material-ui/core';
import SmallCard from './SmallCard';

interface IndexData {
  symbol: string,
  today: string,
  yesterday: string,
  change: string
}

interface Props {
  indexData: IndexData[];
}

const IndexCards = ({ indexData }: Props) => {
  return (
    <>
      {indexData.map((item, i) => (
        <Grid
          key={i}
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <SmallCard data={item}/>
        </Grid>
      ))}
    </>
  );
};

export default IndexCards;