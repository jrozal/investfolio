import { Grid } from "@mui/material";
import MarketCard from "./MarketCard";

const TodaysMarkets = ({ marketData }) => {
  const headings = ["S&P 500", "Nasdaq 100", "Russell 2000", "Bitcoin"];
  return (
    <>
      {marketData.map((data, i) => {
        return (
          <Grid item xs={12} sm={6} lg={3} key={i}>
            <MarketCard heading={headings[i]} marketData={data} />
          </Grid>
        );
      })}
    </>
  );
};

export default TodaysMarkets;
