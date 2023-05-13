import React from 'react'
import './land.css'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import imgg from './images/home1.jpeg'

const Landing = () => {
    const navigate = useNavigate(); 

    return (
        <div style={{textAlign: "center",height: '745px',backgroundImage: `url(${imgg})`, textDecoration: 'none', textColor: 'white',   backgroundSize: 'cover',  backgroundPosition: 'center', width: '100%', backgroundRepeat: 'no-repeat' }}><br/><br/>
        <br/><br/><br/>
        <button className = "button-9"><NavLink to = "/register" style = {{textDecoration: 'none', color: 'white'}}>Click here to register</NavLink></button><br/><br/><br/>
        <button className = "button-9" style = {{textDecoration: 'none', color: "white"}}>Click here to </button><br/><br/><br/>
        </div>
    ) 
}

export default Landing; 