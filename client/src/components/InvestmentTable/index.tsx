import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  Grid,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import PerfectScrollbar from 'react-perfect-scrollbar';
import useModal from '../../useModal';
import AddInvestmentModal from './AddInvestmentModal';

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

const useStyles = makeStyles({
  addCard: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '3rem',
    boxShadow: 'none'
  },
  addButton: {
    padding: 16
  }
});

const Investments = ({ portfolioData }: Props) => {
  const classes = useStyles();
  const headings = ['Symbol', 'Description', 'Price', 'Today\'s Price Change', 'Today\'s % Change', 'Today\'s Gain/Loss', 'Shares'];
  const { open, toggle } = useModal();

  const handleClick = () => toggle();

  return (
    <Grid
      item
      lg={12}
      md={12}
      xl={12}
      xs={12}
    >
      <Card>
        <Card className={classes.addCard}>
          <CardHeader title="Portfolio"/>
          <Button
            className={classes.addButton}
            endIcon={<AddBoxIcon/>}
            size="small"
            onClick={handleClick}
          >
            Add Investment
          </Button>
        </Card>
        <AddInvestmentModal open={open} close={toggle}/>
        <Divider/>
        <PerfectScrollbar>
          <Box sx={{ minWidth: 800 }}>
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
        </PerfectScrollbar>
      </Card>
    </Grid>
  )
};

export default Investments;