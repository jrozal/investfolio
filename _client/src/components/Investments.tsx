import {
  Box,
  Card,
  CardHeader,
  Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';

const Investments = () => {
  const headings = ['Symbol', 'Description', 'Price', 'Today\'s Price Change', 'Today\'s % Change', 'Today\'s Gain/Loss', 'Shares'];
  const exampleData = ['SPY', 'SPDR S&P 500 ETF', '441.40', '−4.31', '-0.97%', '-4.31', '1'];

  return (
    <Grid
      item
      lg={12}
      md={12}
      xl={9}
      xs={12}
    >
      <Card>
        <CardHeader title="Portfolio"/>
        <Divider/>
        <Box minWidth={800}>
          <Table>
            <TableHead>
              <TableRow>
                {headings.map((heading, i) => <TableCell key={i}>{heading}</TableCell>)}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow hover>
                {exampleData.map((value, i) => <TableCell key={i}>{value}</TableCell>)}
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </Card>
    </Grid>
  )
};

export default Investments;