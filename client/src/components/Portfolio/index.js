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
import styles from './Portfolio.module.css';
import { styled } from '@mui/material/styles';

const CustomTableCell = styled(TableCell)`
  padding: 10px;
`;

const Portfolio = ({ data }) => {
  const headings = ['Symbol', 'Description', 'Price', 'Today\'s Price Change', 'Today\'s % Change', 'Today\'s Gain/Loss', 'Shares'];

  return (
    <Grid item lg={12} md={12} xl={12} xs={12}>
      <Card>
        <Card className={styles.cardHeader}>
          <CardHeader title="Portfolio" />
          <Button className={styles.button}>Add Investment</Button>
        </Card>
        <PerfectScrollbar>
          <Box sx={{ minWidth: 800 }}>
            <Table>
              <TableHead>
                <TableRow>
                  {headings.map((heading, i) => (
                    <TableCell key={i}>{heading}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((record, i) => (
                  <TableRow className={styles.tableRow}>
                    <CustomTableCell>{record.symbol}</CustomTableCell>
                    <CustomTableCell>{record.description}</CustomTableCell>
                    <CustomTableCell>{record.price}</CustomTableCell>
                    <CustomTableCell>{record.priceChange}</CustomTableCell>
                    <CustomTableCell>{record.percentChange}</CustomTableCell>
                    <CustomTableCell>{record.profitLossAmount}</CustomTableCell>
                    <CustomTableCell>{record.quantity}</CustomTableCell>
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