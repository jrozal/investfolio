import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { theme } from "../../global/theme";
import Chart from "./Chart";
import { styled } from "@mui/material/styles";

const ChartCardContent = styled(CardContent)`
  &:last-child {
    padding-bottom: 0;
  }
`;

const PercentChangeTypography = styled(Typography)`
  color: ${(props) => (props.change > 0 ? "#0d6f3f" : "#e01616")};
`;

const MarketCard = ({ heading, marketData }) => {
  const { symbol, today, change } = marketData;
  const renderPriceWithCommas = (price) => {
    return "$" + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <ThemeProvider theme={theme}>
      <Card variant="rounded-soft">
        <CardHeader title={heading} sx={{ height: "3rem", padding: "0px" }} />
        <Box sx={{ color: "#4c4c4c", size: "1.15rem", marginTop: "-0.75rem" }}>
          {symbol}
        </Box>
        <ChartCardContent sx={{ padding: 0 }}>
          <Grid>
            <Box sx={{ width: "100%", height: 150 }}>
              <Chart chartData={marketData.chartData} />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "end",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{ marginRight: 1, fontSize: "1.15rem", fontWeight: 700 }}
                >
                  {renderPriceWithCommas(today)}
                </Typography>
                <PercentChangeTypography
                  change={change}
                  sx={{ marginRight: 1, fontSize: "1.15rem", fontWeight: 700 }}
                >
                  {change > 0 && "+"}
                  {change.toFixed(2)}%
                </PercentChangeTypography>
              </Box>
              <Box>
                <Typography sx={{ color: "#4c4c4c", fontSize: "13px" }}>
                  Last 24h
                </Typography>
              </Box>
            </Box>
          </Grid>
        </ChartCardContent>
      </Card>
    </ThemeProvider>
  );
};

export default MarketCard;
