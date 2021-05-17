import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const dummyData = [
  {
    id: 1,
    symbol: 'AAPL',
    description: 'Apple Inc',
    price: 100,
    priceChange: '$100.01',
    percentChange: '10%',
    profitLossAmount: '+$50',
    quantity: 30.5,
    portfolioAllocation: '33.3%'
  },
  {
    id: 2,
    symbol: 'GOOGL',
    description: 'Alphabet Inc Class A',
    price: 100,
    priceChange: '$100.02',
    percentChange: '10%',
    profitLossAmount: '+$50',
    quantity: 25.1,
    portfolioAllocation: '33.3%'
  },
  {
    id: 3,
    symbol: 'FB',
    description: 'Facebook, Inc. Common Stock',
    price: 100,
    priceChange: '$100.03',
    percentChange: '10%',
    profitLossAmount: '+$50',
    quantity: 10.99,
    portfolioAllocation: '33.3%'
  }
];

const Investments = ({ className, ...rest }) => {
  const [portfolio, setPortfolio] = useState(dummyData);

  return (
    <Card>
      <CardHeader title="Portfolio"/>
      <Divider />
        <Box minWidth={800}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Symbol
                </TableCell>
                <TableCell>
                  Description
                </TableCell>
                <TableCell>
                  Price
                </TableCell>
                <TableCell>
                  Today's Price Change
                </TableCell>
                <TableCell>
                  Today's % Change
                </TableCell>
                <TableCell>
                  Today's Gain/Loss
                </TableCell>
                <TableCell sortDirection="desc">
                  <Tooltip
                    enterDelay={300}
                    title="Sort"
                  >
                    <TableSortLabel
                      active
                      direction="desc"
                    >
                      Shares
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
                <TableCell>
                  Portfolio Allocation
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {portfolio.map((data) => (
                <TableRow
                  hover
                  key={data.id}
                >
                  <TableCell>
                    {data.symbol}
                  </TableCell>
                  <TableCell>
                    {data.description}
                  </TableCell>
                  <TableCell>
                    {data.price}
                  </TableCell>
                  <TableCell>
                    {data.priceChange}
                  </TableCell>
                  <TableCell>
                    {data.percentChange}
                  </TableCell>
                  <TableCell>
                    {data.profitLossAmount}
                  </TableCell>
                  <TableCell>
                    {data.quantity}
                  </TableCell>
                  <TableCell>
                    {data.portfolioAllocation}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      <Box
        display="flex"
        justifyContent="flex-end"
        p={2}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          View all
      </Button>
      </Box>
    </Card>
  );
}

export default Investments;