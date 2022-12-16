import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardHeader } from '@mui/material';

export interface CardDetails{
    title:string;
    quantity: string;
    image: string;
    price:string;
    Status:string;
}
export default function TheCard(props:CardDetails) {
  return (
    <div style={{paddingTop: '10px', display: "inline-block", padding: '39px'}}>
      <CardMedia
        component="img"
        height={100}
        width={100}
        image = {props.image}
      />
      <CardActions disableSpacing>
      </CardActions>
  
    </div>
    
  );
}