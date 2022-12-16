import React from "react";
import './Create.css';
import { useNavigate } from 'react-router-dom';

function Create() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/');
  };

  const goToCusReg = () => {
    navigate('/CusReg');
  };

  const goToManReg = () => {
    navigate('/ManReg');
  };

    return (
      <div className="Create" style={{color: "white"}}>
        <img src={'/images/arrow.png'} alt="arrow" width={20} height={20} style={{float: "left", paddingLeft: '30px', paddingTop:'30px'}} onClick={goToMain}/>
              <text style={{float: "left", paddingLeft: '30px', paddingTop:'30px'}} onClick={goToMain}>LOG IN </text>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <div className="SignHeader" style={{marginRight: '90%'}}>
            
          </div>
          <br/>
          <br/>
          <div className="or"><br/><br/>
            <button className="signupman" style={{marginLeft: '520px'}} onClick={goToManReg}>Signup As Manager</button>
            <div className='or' style={{marginLeft: '520px', color: "black"}}>_________________ OR _________________</div><br/>
            <button className="signupcus" style={{marginLeft: '520px'}} onClick={goToCusReg}>Signup As Customer</button>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          </div>
      </div>
    );
  }
  
  
  
  export default Create;