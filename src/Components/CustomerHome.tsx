import { Opacity } from "@mui/icons-material";
import './CustomerHome.css';
import { Box, Button, Card, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import BuyItem from "./BuyItem";
import ItemsAdded from "./ItemsAdded";


export default function HomePage() {
    return (
        <Box>
            <Stack>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',

                }}>
                    <div className="text">
                        Your One-Stop
                    </div>
                    <div className="text1">
                        Gadget Shop
                    </div>
                    <div className="text3">
                        Get your money’s worth!
                    </div>
                    <div className="picture1">
                        <img src={'/Images/ombre.jpeg'}/>
                    </div>
                    <div className="picture2">
                        <img src={'/Images/apples.jpeg'} />
                    </div>
                    <div></div>
                </div>
                
            </Stack>
            <div className="search">
                <TextField
                    id="outlined-basic"
                    variant="outlined"
                    fullWidth
                    label="Search Items:"

                    sx={{
                        bgcolor: "#A4BE7B", marginLeft: "32rem"
                    }}

                />
            </div>
            <Stack>
                <ItemsAdded />
            </Stack>
        </Box>
    );

}