import { Box, Button, Card, CardMedia, Checkbox, Icon, InputAdornment, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';
import { buyitemDetails } from './BuyItemCard';
import TheCardBuyItem from './BuyItemCard';
import { useState } from 'react';
import Icons from './Icon';
import SearchIcon from '@mui/icons-material/Search';




export default function DenseTable() {

    const [cards, setCards] = useState<buyitemDetails[]>([
        { title: 'Iphone 14', remainingpayment: 20000, description: 'Phone for the rich people', price: 'PHP 4000', Availablequantity: 10, quantity: 2, image: '/images/app14-1.jpeg' },
        { title: 'MacBook Air', remainingpayment: 20000, description: 'Phone for the rich people', price: 'PHP 4000', Availablequantity: 10, quantity: 2, image: '/images/macbook.jpeg' },
        { title: 'Iphone 13', remainingpayment: 20000, description: 'Phone for the rich people', price: 'PHP 4000', Availablequantity: 10, quantity: 2, image: '/images/app13.jpeg' }
    ])


    const clickUp = (title: string) => {
        setCards(
            cards.map(cards => {
                if (cards.title === title && cards.Availablequantity > cards.quantity) {
                    return { ...cards, quantity: cards.quantity + 1 };
                } else {
                    return cards;
                }
            })
        );
    }

    const clickDown = (title: string) => {
        setCards(
            cards.map(cards => {
                if (cards.title === title && cards.quantity > 0) {
                    return { ...cards, quantity: cards.quantity - 1 };
                } else {
                    return cards;
                }
            })
        );
    }




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
            <TableContainer component={Paper} style={{ alignItems: "center", maxWidth: 1600 }} sx={{ marginTop: 10, marginLeft: 2 }} >
                <Table style={{ width: 1600, borderCollapse: 'separate', borderSpacing: '0px 5px', borderRadius: '10px' }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ITEM</TableCell>
                            <TableCell align="center" sx={{ fontSize: 16 }}></TableCell>
                            <TableCell align="center" sx={{ fontSize: 16 }}>DESCRIPTION</TableCell>
                            <TableCell align="center" sx={{ fontSize: 16 }}>PRICE</TableCell>
                            <TableCell align="center" sx={{ fontSize: 16 }}>AVAILABLEQUANTITY</TableCell>
                            <TableCell align="center" sx={{ fontSize: 16 }}></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cards.map((row, i) => (
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
                                <TableCell align="center" sx={{ fontSize: 16 }}>{row.description}</TableCell>
                                <TableCell align="center" sx={{ fontSize: 16 }}>{row.price}</TableCell>
                                <TableCell align="center" sx={{ fontSize: 16 }}>{row.Availablequantity}</TableCell>
                                <TableCell align="center"><div style={{ display: "flex", justifyContent: "center" }}>
                                    <Box><Box style={{ backgroundColor: "white", minWidth: "50px", textAlign: "center", marginLeft: "5px", marginTop: "30px" }}>{row.quantity}</Box></Box>
                                    <Stack><Icons title={row.title} image='/Images/ups.png' click={clickUp} /> <Icons title={row.title} image='/Images/down.png' click={clickDown} /></Stack>
                                    <Button variant="contained" color="success" sx={{ height: 50, marginTop: 2 }}>Buy Item</Button></div>
                                </TableCell>
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}