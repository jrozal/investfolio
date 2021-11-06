import {
  Box,
  Button,
  Card,
  CardHeader,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { styled } from '@mui/material/styles';

const TableHeaderCell = styled(TableCell)`
  padding: 10px;
  color: #CBCBCD;
  font-weight: bold;
  text-transform: uppercase;
  border-top: 1px solid #e0e0e0;
  background-color: #FEFDFF;
`;

const TableBodyCellSymbol = styled(TableCell)`
  padding: 5px;
`;

const TableBodyCell = styled(TableCell)`
  padding: 5px;
  text-align: right;
`;

const Portfolio = ({ data }) => {
  const headings = ['Price', 'Today\'s Price Change', 'Today\'s % Change', 'Today\'s Gain/Loss', 'Shares'];

  const renderPriceWithCommas = (price) => {
    return '$' + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const renderPriceChange = (number) => {
    if (number < 0) {
      number = `-$${number.slice(1)}`;
      return <span style={{ color: '#e01616' }}>{number}</span>;
    }
    return <span style={{ color: '#0d6f3f' }}>${number}</span>;
  };

  const renderPercentage = (number) => {
    if (number < 0) {
      return <span style={{ color: '#e01616' }}>{number}%</span>;
    }
    return <span style={{ color: '#0d6f3f' }}>{number}%</span>;
  }

  return (
    <Grid item lg={12} md={12} xl={12} xs={12}>
      <Card
        sx={{
          borderRadius: "12px",
          padding: "5px 20px 20px 20px",
          boxShadow: "0 0 8px rgba(0,0,0,0.11)",
        }}
      >
        <Card
          sx={{
            display: "flex",
            justifyContent: "space-between",
            height: "3rem",
            boxShadow: "none",
          }}
        >
          <CardHeader
            title="Portfolio"
            sx={{ padding: "0px" }}
          />
          <Button sx={{ padding: "0px" }}>Add Investment</Button>
        </Card>
        <PerfectScrollbar>
          <Box sx={{ minWidth: 800 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeaderCell>Symbol</TableHeaderCell>
                  {headings.map((heading, i) => (
                    <TableHeaderCell key={i} sx={{ textAlign: "right" }}>
                      {heading}
                    </TableHeaderCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((record, i) => (
                  <TableRow
                    key={i}
                    sx={{
                      cursor: "pointer",
                      ":hover": {
                        backgroundColor: "#F7F7F7",
                      },
                    }}
                  >
                    <TableBodyCellSymbol>
                      <Box sx={{ fontWeight: 700 }}>{record.symbol}</Box>
                      <Box sx={{ color: "#4c4c4c" }}>{record.description}</Box>
                    </TableBodyCellSymbol>
                    <TableBodyCell>
                      {renderPriceWithCommas(record.price)}
                    </TableBodyCell>
                    <TableBodyCell>
                      {renderPriceChange(record.priceChange)}
                    </TableBodyCell>
                    <TableBodyCell>
                      {renderPercentage(record.percentChange)}
                    </TableBodyCell>
                    <TableBodyCell>
                      {renderPriceChange(record.profitLossAmount)}
                    </TableBodyCell>
                    <TableBodyCell>{record.quantity}</TableBodyCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </PerfectScrollbar>
      </Card>
    </Grid>
  );
};

export default Portfolio;