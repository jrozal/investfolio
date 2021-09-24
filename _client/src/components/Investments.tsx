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

interface PortfolioData {
  symbol: string,
  description: string,
  price: number,
  priceChange: string,
  percentChange: string,
  profitLossAmount: string,
  quantity: number,
  marketValue: string,
  portfolioAllocation: string
};

interface Props {
  portfolioData: PortfolioData[];
}

const Investments = ({ portfolioData }: Props) => {
  const headings = ['Symbol', 'Description', 'Price', 'Today\'s Price Change', 'Today\'s % Change', 'Today\'s Gain/Loss', 'Shares'];

  return (
    <Grid
      item
      lg={12}
      md={12}
      xl={12}
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
              {portfolioData.map((record, i) => (
                <TableRow hover key={i}>
                  <TableCell>{record.symbol}</TableCell>
                  <TableCell>{record.description}</TableCell>
                  <TableCell>{record.price}</TableCell>
                  <TableCell>{record.priceChange}</TableCell>
                  <TableCell>{record.percentChange}</TableCell>
                  <TableCell>{record.profitLossAmount}</TableCell>
                  <TableCell>{record.quantity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Card>
    </Grid>
  )
};

export default Investments;