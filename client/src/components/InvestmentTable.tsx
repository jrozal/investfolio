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
import { useState } from "react";
import PerfectScrollbar from 'react-perfect-scrollbar';
import useModals from '../useModals';
import AddInvestmentModal from './Modals/AddInvestment';
import UpdateInvestmentModal from './Modals/UpdateInvestment';

interface PortfolioData {
  symbol: string,
  description: string,
  price: number,
  pricePaid: string,
  priceChange: string,
  percentChange: string,
  profitLossAmount: string,
  quantity: number,
  marketValue: string,
  portfolioAllocation: string
};

interface Props {
  portfolioData: PortfolioData[];
};

interface PortfolioRecord {
  symbol: string | null,
  description: string | null,
  pricePaid: string | null,
  quantity: number | null,
};

const useStyles = makeStyles({
  addCard: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '3rem',
    boxShadow: 'none'
  },
  addButton: {
    padding: 16
  },
  tableRow: {
    cursor: 'pointer'
  }
});

const Investments = ({ portfolioData }: Props) => {
  const classes = useStyles();
  const headings = ['Symbol', 'Description', 'Price', 'Today\'s Price Change', 'Today\'s % Change', 'Today\'s Gain/Loss', 'Shares'];
  const { open, toggle } = useModals();
  const [portfolioRecord, setPortfolioRecord] = useState<PortfolioRecord>({
    symbol: null,
    description: null,
    pricePaid: null,
    quantity: null
  })

  const handleClick = (modal: string) => {
    toggle(modal);
  };

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
            onClick={() => handleClick('add-investment')}
          >
            Add Investment
          </Button>
        </Card>
        <AddInvestmentModal
          open={open === 'add-investment'}
          close={toggle}
        />
        <UpdateInvestmentModal
          portfolioRecord={portfolioRecord}
          open={open === 'update-investment'}
          close={toggle}
        />
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
                  <TableRow
                    hover
                    key={i}
                    className={classes.tableRow}
                    onClick={()=> {
                      handleClick('update-investment')
                      setPortfolioRecord({
                        symbol: record.symbol,
                        description: record.description,
                        pricePaid: record.pricePaid,
                        quantity: record.quantity
                      })
                    }}
                  >
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