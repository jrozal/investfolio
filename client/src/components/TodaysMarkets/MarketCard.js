import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { theme } from "../../global/theme";
import Chart from "./Chart";
import { styled } from "@mui/material/styles";

const ChartCardContent = styled(CardContent)`
  &:last-child {
    padding-bottom: 0;
  }
`;

const PercentChangeTypography = styled(Typography)`
  color: ${(props) => (props.percentchange > 0 ? "#0d6f3f" : "#e01616")};
`;

const MarketCard = ({ heading, marketData }) => {
  const { symbol, today, percentChange, priceChange } = marketData;
  const renderPriceWithCommas = (price) => {
    if (typeof price === "number") {
      price = price.toFixed(2);
    }
    return "$" + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const renderArrowIcon = (price) => {
    return price > 0 ? (
      <ArrowDropUpIcon sx={{ fontSize: 40, marginLeft: "-15px" }} />
    ) : (
      <ArrowDropDownIcon sx={{ fontSize: 40, marginLeft: "-15px" }} />
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Card variant="rounded-soft">
        <Box sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          <CardHeader title={heading} sx={{ height: "3rem", padding: "0px" }} />
          <Typography sx={{ color: "#CBCBCD", fontSize: "13px" }}>
            Last 24h
          </Typography>
        </Box>
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
                }}
              >
                <Box sx={{ height: "20px", width: "20px" }}>
                  {renderArrowIcon(today)}
                </Box>
                <Typography
                  sx={{ marginRight: 1, fontSize: "1.5rem" }}
                >
                  {renderPriceWithCommas(today)}
                </Typography>
              </Box>
              <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
              }}>
                <PercentChangeTypography
                  percentchange={priceChange}
                  sx={{ marginRight: 1, fontSize: "0.85rem"}}
                >
                  {priceChange > 0 && "+"}
                  {renderPriceWithCommas(priceChange.toFixed(2))}
                </PercentChangeTypography>
                <PercentChangeTypography
                  percentchange={percentChange}
                  sx={{ marginRight: 1, fontSize: "1rem", fontWeight: 700 }}
                >
                  {percentChange > 0 && "+"}
                  {percentChange.toFixed(2)}%
                </PercentChangeTypography>
              </Box>
            </Box>
          </Grid>
        </ChartCardContent>
      </Card>
    </ThemeProvider>
  );
};

export default MarketCard;
