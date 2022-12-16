import React from "react";
import './Register.css';
import { useNavigate } from 'react-router-dom';


function CustomerRegistration() {
    const navigate = useNavigate();

    const goToCreate = () => {
    navigate('/Create');
     };

    const goToMain = () => {
    navigate('/');
    };


    return (
        <div className="customer">
            <img src={'/images/arrow.png'} alt="arrow" width={20} height={20} style={{ float: "left", paddingLeft: '30px', paddingTop: '30px' }} onClick={goToMain} />
            <text style={{ float: "left", paddingLeft: '30px', paddingTop: '30px', color: "white" }} onClick={goToCreate}>BACK </text>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <div className="CusHeader">

            </div>
            <br /><br /><br /><br /><br />
            <div className="inputs">
                <input className="usernamee" placeholder="Username" style={{ color: "black" }} />
                <br />
                <input className="firstname" placeholder="First Name" style={{ color: "black" }} />
                <br />
                <input className="lastname" placeholder="Last Name" style={{ color: "black" }} />
                <br />
                <input className="age" placeholder="Age" style={{ color: "black" }} />
                <br />
                <input className="address" placeholder="Address" style={{ color: "black" }} />
                <br />
                <input className="passwordd" placeholder="Password" type="password" style={{ color: "black" }} />
                <br />
                <input className="reenter" placeholder="Re-enter Password" type="password" style={{ color: "black" }} />
            </div>
            <br />
            <div>
                <button className="registerr" onClick={goToMain}>REGISTER</button>
                <br /><br /><br /><br /><br /><br />
            </div>
        </div>
    );
}
export default CustomerRegistration;