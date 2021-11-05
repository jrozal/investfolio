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

const TableBodyCell = styled(TableCell)`
  padding: 10px;
`;

const Portfolio = ({ data }) => {
  const headings = ['Symbol', 'Description', 'Price', 'Today\'s Price Change', 'Today\'s % Change', 'Today\'s Gain/Loss', 'Shares'];

  return (
    <Grid item lg={12} md={12} xl={12} xs={12}>
      <Card>
        <Card
          sx={{
            display: "flex",
            justifyContent: "space-between",
            height: "3rem",
            boxShadow: "none",
          }}
        >
          <CardHeader title="Portfolio" />
          <Button sx={{ padding: "16px" }}>Add Investment</Button>
        </Card>
        <PerfectScrollbar>
          <Box sx={{ minWidth: 800 }}>
            <Table>
              <TableHead>
                <TableRow>
                  {headings.map((heading, i) => (
                    <TableCell
                      key={i}
                      sx={{
                        padding: "10px",
                        color: "#CBCBCD",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        borderTop: "1px solid #e0e0e0",
                        backgroundColor: "#FEFDFF",
                      }}
                    >
                      {heading}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((record, i) => (
                  <TableRow
                    sx={{
                      cursor: "pointer",
                      ":hover": {
                        backgroundColor: "#F7F7F7",
                      },
                    }}
                  >
                    <TableBodyCell>{record.symbol}</TableBodyCell>
                    <TableBodyCell>{record.description}</TableBodyCell>
                    <TableBodyCell>{record.price}</TableBodyCell>
                    <TableBodyCell>{record.priceChange}</TableBodyCell>
                    <TableBodyCell>{record.percentChange}</TableBodyCell>
                    <TableBodyCell>{record.profitLossAmount}</TableBodyCell>
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