import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { Button } from '@mui/material';


interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    
    <Card sx={{ maxWidth: 345, backgroundColor: '#A4BE7B'}}>
        
      <CardHeader
       
        action={
          <IconButton aria-label="settings">
         
          </IconButton>
        }
        title="Iphone 14 Pro Max"
        subheader="Quantity Available: 40"
        
      />
      <CardMedia

        component="img"
        height="194"
        image="images/phone1.jpg"
        alt="Iphone 14 Pro Max"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        New Iphone for rich people
        <br>
        </br>
        <Button variant="contained" sx={{backgroundColor: '#285430'}}>Buy</Button>

        </Typography>
        
      </CardContent>
      <CardActions disableSpacing>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
      
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
        
          </Typography>
          <Typography paragraph>
           
          </Typography>
          <Typography paragraph>
            
          </Typography>
          <Typography>
            
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}