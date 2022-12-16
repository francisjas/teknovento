import React from 'react';
import './CustomerSide.css';
import LabTabs from './NavBar';
import { Home } from '@mui/icons-material';
import HomePage from './CustomerHome';
import ViewOrder from './ViewOrders';
import BuyItems from './BuyItems';
import Aboutus from './AboutUs';
import ToPay from './ToPay';
import ToPayForm from './ToPayForm';




function CustomerSide() {
  const featureName = ['Home', 'Buy Item', 'View Orders', "To Pay", 'About Us'] 
  const componentArray = [
      <HomePage/>,
      <BuyItems/>,
      <ViewOrder/>,
      <ToPay/>,
      <Aboutus/>,
        ];
  return (
    <div className= "App-header">
      <LabTabs components={componentArray} label={featureName}/>

    </div>
  );
}

export default CustomerSide;
