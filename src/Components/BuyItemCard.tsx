import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';


export interface buyitemDetails{
    title:string;
    quantity: number;
    description: string;
    Availablequantity:number;
    remainingpayment:number;
    image: string;
    price:string;
}
export default function TheCard(props:buyitemDetails) {
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