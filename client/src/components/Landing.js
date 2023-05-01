import React from 'react'
import './land.css'
import { NavLink } from 'react-router-dom';
import imgg from './images/home1.jpeg'

const Landing = () => {


    return (
        <div style={{textAlign: "center",height: '745px',backgroundImage: `url(${imgg})`,   backgroundSize: 'cover',  backgroundPosition: 'center', width: '100%', backgroundRepeat: 'no-repeat' }}><br/><br/>
        <br/><br/><br/>
        <button className = "button-9"><NavLink to = "/register" style = {{textDecoration: 'none'}}>Click here to register</NavLink></button><br/><br/><br/>
        <button className = "button-9"><NavLink to = "/login" style = {{textDecoration: 'none'}}>Click here to login</NavLink></button><br/><br/><br/>
        </div>
    )
}

export default Landing; 