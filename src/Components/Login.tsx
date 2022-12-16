import React from "react";
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login(){
  const navigate = useNavigate();

    const goToCreate = () => {
        navigate('/CreateAccount');
    };

    const goToHome = () => {
      navigate('/Customer');
    };

    return (
        <div className="Main"><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <div className="LoginHeader">
          
          </div>
          <br/>
          <div className="inputs">
            <input className="username" placeholder="Username" style={{color: "black", marginLeft: '500px'}}/>
            <br/>
            <input className="password" placeholder="Password" type="password" style={{color: "black", marginLeft: '500px'}}/>
          </div>
          <br/>
          <div className="or">
            <button className="login" style={{marginLeft: '500px'}} onClick={goToHome}>LOG IN</button>
            <div className='or' style={{marginLeft: '500px', color: "black"}}>__________________ OR __________________</div><br/>
            <button className="createnew" style={{marginLeft: '500px'}}onClick={goToCreate} >Create New Account</button>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          </div>
      </div>
    );
}

export default Login;