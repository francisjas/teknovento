import { AlignHorizontalCenter, Search, WidthFullRounded } from "@mui/icons-material";
import { Button, Card, CardMedia, Checkbox, InputAdornment, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { minWidth } from "@mui/system";
import { useState } from "react";
import { buyitemDetails } from "./BuyItemCard";
import SearchIcon from '@mui/icons-material/Search';
import './Tables.css';


export default function DenseTable() {
  const [cards, setCards] = useState<buyitemDetails[]>([
    { title: 'Iphone 14', remainingpayment: 20000, description: 'Phone for the rich people', price: 'PHP 4000',Availablequantity: 10, quantity: 2, image: '/images/app14-1.jpeg' },
    { title: 'MacBook Air',remainingpayment: 20000, description: 'Phone for the rich people', price: 'PHP 4000',Availablequantity: 10, quantity: 2, image: '/images/macbook.jpeg' },
    { title: 'Iphone 13', remainingpayment: 20000, description: 'Phone for the rich people', price: 'PHP 4000',Availablequantity: 10, quantity: 2, image: '/images/app13.jpeg' }
])

  return (
    <div className="viewTable">
      <TextField
        id="outlined-basic"
        variant="outlined"
        label="Search Orders"
        sx={{
          bgcolor: "#A4BE7B", marginLeft: "4rem", borderRadius: '30px', width: 650, marginTop:5
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <TableContainer component={Paper} style={{ alignItems: "center", maxWidth: 1600 }} sx={{ marginTop: 10 }}  >
          <Table style={{ width: 1600, borderCollapse:'separate',borderSpacing: '0px 5px', borderRadius:'10px'}} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell sx={{fontSize: 16}}>ITEM</TableCell>
                <TableCell align="center" sx={{fontSize: 16}}></TableCell>
                <TableCell align="center" sx={{fontSize: 16}}>TOTAL PRICE</TableCell>
                <TableCell align="center" sx={{fontSize: 16}}>QUANTITY</TableCell>
                <TableCell align="center" sx={{fontSize: 16}}>DESCRIPTION</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cards.map((row, i) => (
                <TableRow
                  key={row.title}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 }, backgroundColor: "#C3DBBC"}}
                  style={{height: 180}}
                >
                  <TableCell component="th" scope="row" sx={{fontSize: 18}}> {row.title}</TableCell>
                  <TableCell align="center">
                    <Card sx={{ width: 110, height: 120, backgroundColor: '#A4BE7B' }}>
                      <CardMedia component="img" height={120} width={110} image={row.image} />
                    </Card>
                  </TableCell>
                  <TableCell align="center" sx={{fontSize: 18}}>{row.price}</TableCell>
                  <TableCell align="center" sx={{fontSize: 18}}>{row.quantity}</TableCell>
                  <TableCell align="center" sx={{fontSize: 18}}>{row.description}</TableCell>
                  <TableCell align="center" sx={{fontSize: 18}}>
                    <Button> <Button variant="contained" sx={{ backgroundColor: "darkolivegreen", padding: '1rem'}}>Cancel Order</Button></Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}