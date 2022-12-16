import { Box } from '@mui/material';
import TheCard, { CardDetails } from  './CardItem';
const Cards:CardDetails[] = [
  {title:'Iphone 14', description:'Phone for the rich people',quantity: 12, image:'/images/app14-1.jpeg',price: '20000'},
  {title:'MacBook Air', description:'Laptop for the rich people',quantity: 12, image:'/images/macbook.jpeg',price: '20000'},
  {title:'Iphone 13', description:'Phone for the rich people',quantity: 12, image:'/images/app13.jpeg',price: '20000'},
  {title:'ASUS Republic of Gamers',description:'Gaming Laptop for gamers',quantity: 12, image:'/images/ASUS.jpeg',price: '20000'},
  {title:'Realme 10 Pro', description:'Gaming Phone',quantity: 12 ,image:'/images/realme10.jpeg',price: '20000'},
  {title:'Vivo V21', description:'Laptop',quantity: 12, image:'/images/Picture1.jpg',price: '20000'},
  {title:'Samsung Galaxy s21', description:'Cellphone',quantity: 12, image:'/images/Galaxy_s21.jpeg',price: '20000'},
  {title:'AirPods Pro',description:'Good Quality earbuds',quantity: 12, image:'/images/2AirPods-Pro.jpeg',price: '20000'},
  {title:'Realme 9 Pro',description:'Gaming Phone',quantity: 12, image:'/images/realme9.jpeg',price: '20000'}
 ]

  
  export default function BuyItem() {
  
    return (
      <Box
          sx={{
            display: 'inline-block',
            flexDirection: 'column',
            alignItems: 'center',
            '& > *': {
              m: 0.3,
            },
          }}
        >
      <div style={{paddingTop: '90px' }}>
  
        { Cards.map((item,i)=>
              <TheCard key={i} title={item.title} image={item.image} description={item.description} quantity ={item.quantity} price ={item.price}/>
          )}
      </div>
      </Box>
    );
  }