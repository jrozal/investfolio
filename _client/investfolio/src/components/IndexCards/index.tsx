import { Grid } from '@material-ui/core';
import React from 'react';
import SmallCard from './SmallCard';

interface Props {
  marketData: [number, number, number, number]
}


const IndexCards = (props: Props) => {
  return (
    <React.Fragment>
      {props.marketData.map((item: number) => (
        <Grid
          item
          lg={3}
          sm={6}
          xl={3}
          xs={12}
        >
          <SmallCard data={item}/>
        </Grid>
      ))}
    </React.Fragment>
  );
};

export default IndexCards;