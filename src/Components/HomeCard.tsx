import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardHeader } from '@mui/material';
import { CardDetails } from './CardItem';


export default function HomeCard(props:CardDetails) {
  return (
    <div style={{paddingTop: '100px', display: "inline-block", padding: '40px'}}>
    <Card sx={{ width: 350, height: 470,  backgroundColor: '#A4BE7B'}}>

      <CardHeader
        title = {props.title}
        price = {props.price}
      />
      <CardMedia

        component="img"
        height={320}
        width={200}
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