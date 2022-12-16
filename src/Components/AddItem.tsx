import { Opacity } from "@mui/icons-material";
import { Outlet, Link } from "react-router-dom";
import { Box, Button, Card, TextField } from "@mui/material";
import './AddItem.css';



export default function AdditemForm() {
    return (
        <div className="ItemsAdded" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            
          
        }}>
        
            <Card sx={{ height: 700,minWidth: '700px', backgroundColor: '#FFFFFF', borderRadius: '25px', alignItems: 'center'}} style={{marginTop: '80px'}}>
                <div style={{ backgroundColor: "green", margin: "25px", paddingRight: '5px', paddingTop: '5px', borderRadius: '20px', maxWidth: '700px' }}>
                    <div style={{ padding: '15px', fontSize: '20px' }}>Item Name</div>
                    <TextField id="standard-basic" variant="standard" sx={{ padding: '15px', minWidth: '600px' }}></TextField>
                </div>

                <div style={{ backgroundColor: "green", margin: "25px", paddingRight: '5px', paddingTop: '5px', borderRadius: '20px' }}>
                    <div style={{ padding: '15px', fontSize: '20px' }}>Item Price</div>
                    <TextField id="standard-basic" variant="standard" sx={{ padding: '15px', minWidth: '600px'}}></TextField>
                </div>

                <div style={{ backgroundColor: "green", margin: "25px", paddingBottom: '5px', paddingTop: '5px', borderRadius: '20px' }}>
                    <div style={{ padding: '15px', fontSize: '20px' }}>Item Quantity</div>
                    <TextField id="standard-basic" variant="standard" sx={{ padding: '15px', minWidth: '600px'}}></TextField>
                </div>

                <div style={{ backgroundColor: "green", margin: "25px", paddingRight: '5px', paddingTop: '5px', borderRadius: '20px' }}>
                    <div style={{ padding: '15px', fontSize: '20px' }}>Item Description</div>
                    <TextField id="standard-basic" variant="standard" sx={{ padding: '15px',minWidth: '600px' }}></TextField>
                </div>
                <Button variant="contained" sx={{backgroundColor: 'Green', minWidth: '200px', minHeight: '50px'}}>Add Item</Button>
            </Card>
        </div>   

            );

}