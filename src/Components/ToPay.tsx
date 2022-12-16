import { Box, Button, Card, CardMedia, Checkbox, InputAdornment, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import TheCardOrder from './BuyItemCard';
import * as React from 'react';
import TheCardPayment from './ToPayItems';
import TheCard, { PaymentDetails } from './ToPayItems';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

const Cards: PaymentDetails[] = [
  { title: 'Iphone 14', quantity: "40", Remainingpayment: 'PHP 4000', image: '/images/app14-1.jpeg' },
  { title: 'MacBook Air', quantity: "40", Remainingpayment: 'PHP 4000', image: '/images/macbook.jpeg' },
  { title: 'Iphone 13', quantity: "23", Remainingpayment: 'PHP 4000', image: '/images/app13.jpeg' }
]


export default function DenseTable() {
  const navigate = useNavigate();
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const goToPay = () => {
    navigate('/PayForm');
  };
  return (
    <div className="viewTable">
      <TextField
        id="outlined-basic"
        variant="outlined"
        label="Search Order"
        sx={{
          bgcolor: "#A4BE7B", marginLeft: "4rem", borderRadius: '30px', width: 650, marginTop: 5
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}

      />
      <TableContainer component={Paper} style={{ alignItems: "center", maxWidth: 1600 }} sx={{ marginTop: 10, marginLeft: 2 }} >
        <Table style={{ width: 1600, borderCollapse: 'separate', borderSpacing: '0px 5px', borderRadius: '10px' }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>ITEM</TableCell>
              <TableCell align="center" sx={{ fontSize: 16 }}></TableCell>
              <TableCell align="center" sx={{ fontSize: 16 }}>QUANTITY</TableCell>
              <TableCell align="center" sx={{ fontSize: 16 }}>REMAINING PAYMENT</TableCell>
              <TableCell align="center" sx={{ fontSize: 16 }}>STATUS</TableCell>
              <TableCell align="center" sx={{ fontSize: 16 }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Cards.map((row, i) => (
              <TableRow
                key={row.title}
                sx={{ '&:last-child td, &:last-child th': { border: 0 }, backgroundColor: "#C3DBBC", height: "50px", padding: '10px' }}
                style={{ height: 180 }}
              >
                <TableCell component="th" scope="row" sx={{ fontSize: 16 }}>
                  {row.title}
                </TableCell>
                <TableCell>
                  <Card sx={{ width: 110, height: 120, backgroundColor: '#A4BE7B' }}>
                    <CardMedia component="img" height={120} width={110} image={row.image} />
                  </Card></TableCell>
                <TableCell align="center" sx={{ fontSize: 16 }}>{row.Remainingpayment}</TableCell>
                <TableCell align="center" sx={{ fontSize: 16 }}>{row.quantity}</TableCell>
                <TableCell align="center"><Checkbox {...label} defaultChecked color="success" /></TableCell>
                <TableCell align="center"> <Button variant="contained" color="success" sx={{ height: 50, marginTop: 2 }} onClick={goToPay}>ADD PAYMENT</Button></TableCell>
              </TableRow>
            ))}

          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}