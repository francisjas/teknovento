import { Opacity } from "@mui/icons-material";
import { Box, Button, Card, TextField } from "@mui/material";


export default function ToPayForm() {
    return (

        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            
          
        }}>
            <Card sx={{ height: 700,minWidth: '700px', backgroundColor: '#FFFFFF', borderRadius: '25px', alignItems: 'center'}}>
                <div style={{ backgroundColor: "#A4BE7B", margin: "25px", paddingRight: '5px', paddingTop: '5px', borderRadius: '20px', maxWidth: '700px' }}>
                    <div style={{ padding: '15px', fontSize: '20px' }}>Item Name</div>
                    <TextField id="standard-basic" variant="standard" sx={{ padding: '15px', minWidth: '600px' }}></TextField>
                </div>

                <div style={{ backgroundColor: "#A4BE7B", margin: "25px", paddingRight: '5px', paddingTop: '5px', borderRadius: '20px' }}>
                    <div style={{ padding: '15px', fontSize: '20px' }}>Remaining Price</div>
                    <TextField id="standard-basic" variant="standard" sx={{ padding: '15px', minWidth: '600px'}}></TextField>
                </div>

                <div style={{ backgroundColor: "#A4BE7B", margin: "25px", paddingBottom: '5px', paddingTop: '5px', borderRadius: '20px' }}>
                    <div style={{ padding: '15px', fontSize: '20px' }}>Mode of Payment</div>
                    <TextField id="standard-basic" variant="standard" sx={{ padding: '15px', minWidth: '600px'}}></TextField>
                </div>

                <div style={{ backgroundColor: "#A4BE7B", margin: "25px", paddingRight: '5px', paddingTop: '5px', borderRadius: '20px' }}>
                    <div style={{ padding: '15px', fontSize: '20px' }}>Amount</div>
                    <TextField id="standard-basic" variant="standard" sx={{ padding: '15px',minWidth: '600px' }}></TextField>
                </div>

                <Button variant="contained" sx={{backgroundColor: '#285430', paddingRight: "25px",marginLeft:'17.8rem'}}>Add Payment</Button>

            </Card>
        </div>   

            );

}