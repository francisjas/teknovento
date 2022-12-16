import * as React from 'react';
import './Home.css';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import TheCard, { CardDetails } from './CardItem';
import HomeCard from './HomeCard';



export default function BuyItem() {

    const [cards, setCards] = useState<CardDetails[]>([
        { title: 'Iphone 14', description: 'Phone for the rich people', quantity: 12, image: '/images/app14-1.jpeg', price: '20000' },
        { title: 'MacBook Air', description: 'Laptop for the rich people', quantity: 12, image: '/images/macbook.jpeg', price: '20000' },
        { title: 'Iphone 13', description: 'Phone for the rich people', quantity: 12, image: '/images/app13.jpeg', price: '20000' },
        { title: 'ASUS Republic of Gamers', description: 'Gaming Laptop for gamers', quantity: 12, image: '/images/ASUS.jpeg', price: '20000' },
        { title: 'Realme 10 Pro', description: 'Gaming Phone', quantity: 12, image: '/images/realme10.jpeg', price: '20000' },
        { title: 'Vivo V21', description: 'Laptop', quantity: 12, image: '/images/Picture1.jpg', price: '20000' },
        { title: 'Samsung Galaxy s21', description: 'Cellphone', quantity: 12, image: '/images/Galaxy_s21.jpeg', price: '20000' },
        { title: 'AirPods Pro', description: 'Good Quality earbuds', quantity: 12, image: '/images/2AirPods-Pro.jpeg', price: '20000' },
        { title: 'Realme 9 Pro', description: 'Gaming Phone', quantity: 12, image: '/images/realme9.jpeg', price: '20000' }

    ])

    let len = cards.length - 3;

    return (

        <div className='HomePage' style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <div className='circle'>
                <img src={'/Images/ombre.png'} />
            </div>
            <div className='TableRecent'>
                    <div className='Cards'>
                        {cards.splice(len, 6).map((item, i) =>
                            <HomeCard key={i} title={item.title} image={item.image} description={item.description} quantity={item.quantity} price={item.price} />
                        )}
                    </div>
            </div>
            <div className='Recently'>
                Recently Added Items
            </div>
        </div>
    );
}