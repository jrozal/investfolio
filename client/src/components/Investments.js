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

const Investments = ({ portfolioData }) => {

  return (
    portfolioData !== undefined
    ? <Card>
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
                  <TableCell>
                    Shares
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {portfolioData.map((data, i) => (
                  <TableRow
                    hover
                    key={i}
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
                      {data.percentChange}%
                    </TableCell>
                    <TableCell>
                      {data.profitLossAmount}
                    </TableCell>
                    <TableCell>
                      {data.quantity}
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
    : <div>loading..</div>
  )
}

export default Investments;