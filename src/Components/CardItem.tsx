import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardHeader } from '@mui/material';


export interface CardDetails{
    title:string;
    quantity: number;
    image: string;
    description: string;
    price: string;
}

export default function TheCard(props:CardDetails) {
  return (
    <div style={{paddingTop: '100px', display: "inline-block", padding: '39px'}}>
    <Card sx={{ width: 460, height: 700,  backgroundColor: '#A4BE7B'}}>

      <CardHeader

        title = {props.title}
        quantity = {"Quantity: "+props.quantity}


      />
      <CardMedia

        component="img"
        height={500}
        width={400}
        image = {props.image}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {props.description}
        <br>
        </br>
        <br>
        </br>

        </Typography>

      </CardContent>

      <CardActions disableSpacing>
      </CardActions>

    </Card>
    </div>
  );
}