import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import './App.css';
import Login from './Components/Login';
import RegisterCustomer from './Components/RegisterCustomer';
import RegisterManager from './Components/RegisterManager';
import ManagerSide from './Components/ManagerSide';
import CreateAccount from './Components/CreateAccount';
import CustomerSide from './Components/CustomerSide';
import ToPayForm from "./Components/ToPayForm";



function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/CreateAccount" element={<CreateAccount />} />
          <Route path="/CusReg" element={<RegisterCustomer />} />
          <Route path="/ManReg" element={<RegisterManager />} />
          <Route path="/Manager" element={<ManagerSide />} />
          <Route path="/Customer" element={<CustomerSide />} />
          <Route path="/PayForm" element={<ToPayForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
