import { AlignHorizontalCenter, Search } from "@mui/icons-material";
import { Button, Card, CardMedia, Checkbox, InputAdornment, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { useState } from "react";
import TheCard, { CardDetails } from "./CardItem";
import SearchIcon from '@mui/icons-material/Search';



export default function DenseTable() {
    const [cards,setCards] = useState<CardDetails[]>([
        { title: 'Iphone 14', description: 'Phone for the rich people', quantity: 12, image: '/images/app14-1.jpeg', price: '20000' },
        { title: 'MacBook Air', description: 'Laptop for the rich people', quantity: 12, image: '/images/macbook.jpeg', price: '20000' },
        { title: 'Iphone 13', description: 'Phone for the rich people', quantity: 12, image: '/images/app13.jpeg', price: '20000' },
        { title: 'ASUS Republic of Gamers', description: 'Gaming Laptop for gamers', quantity: 12, image: '/images/ASUS.jpeg', price: '20000' },
        { title: 'Realme 10 Pro', description: 'Gaming Phone', quantity: 12, image: '/images/realme10.jpeg', price: '20000' },
        { title: 'Vivo V21', description: 'Laptop', quantity: 12, image: '/images/Picture1.jpg', price: '20000' },
        { title: 'Samsung Galaxy s21', description: 'Cellphone', quantity: 12, image: '/images/Galaxy_s21.jpeg', price: '20000' },
        { title: 'AirPods Pro', description: 'Good Quality earbuds', quantity: 12, image: '/images/2AirPods-Pro.jpeg', price: '20000' },
        { title: 'Realme 9 Pro', description: 'Gaming Phone', quantity: 12, image: '/images/realme9.jpeg', price: '20000' }
    ])
    
    return (
    <div className="viewTable">
        <TextField
                id="outlined-basic"
                variant="outlined"
                label="Search Items"
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
                        <TableCell align="center" sx={{fontSize: 16}}>PRICE</TableCell>
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
                                <Card sx={{ width: 110, height: 120,  backgroundColor: '#A4BE7B'}}>
                                     <CardMedia component="img"height={120} width={110}image={row.image}/>
                                </Card>
                            </TableCell>
                            <TableCell align="center" sx={{fontSize: 18}}>{row.price}</TableCell>
                            <TableCell align="center" sx={{fontSize: 18}}>{row.quantity}</TableCell>
                            <TableCell align="center" sx={{fontSize: 18}}>{row.description}</TableCell>
                            <TableCell align="right" sx={{fontSize: 18}}>
                            <Button variant="contained" sx={{backgroundColor: '#285430', padding: "1rem"}}>Edit Item</Button>
                             <Button> <Button variant="contained" sx={{backgroundColor: 'Red', padding: '1rem'}}>Delete Item</Button></Button>
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