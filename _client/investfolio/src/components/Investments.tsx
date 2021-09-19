import {
  Box,
  Card,
  CardHeader,
  Divider,
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
    <Card>
      <CardHeader title="Portfolio"/>
      <Divider/>
      <Box minWidth={800}>
        <Table>
          <TableHead>
            <TableRow>
              {headings.map((heading) => <TableCell>{heading}</TableCell>)}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow hover>
              {exampleData.map((value) => <TableCell>{value}</TableCell>)}
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </Card>
  )
};

export default Investments;