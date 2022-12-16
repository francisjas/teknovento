import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BuyItem from './BuyItem';
import NavBar from './NavBar';
import LabTabs from './NavBar';
import Additem from './AddItem';
import ItemsAdded from './ItemsAdded';
import ItemsAddedTbl from './ItemsAddedTbl';
import Home from './Home';
import AddItem from './AddItem';
import Test2 from './Test2';
import Login from './Login';
import RegisterCustomer from './RegisterCustomer';
import RegisterManager from './RegisterManager';




function ManagerSide() {
  const featureName = ['Home', 'Add Item', 'Items Added']
  const componentArray = [
    <Home/>,
    <Additem />,
    <ItemsAddedTbl />
  ];
  return (
    <div className="App-header">
      <LabTabs components={componentArray} label={featureName} />
    </div>
  );
}

export default ManagerSide;
