import React from 'react'
import { NavLink } from 'react-router-dom';

const Landing = () => {


    return (
        <div style={{textAlign: 'center'}}><br/><br/>
        this is landing page<br/><br/><br/>
        <button><NavLink to = "/register" style = {{textDecoration: 'none'}}>Click here to register</NavLink></button><br/><br/><br/>
        <button><NavLink to = "/login" style = {{textDecoration: 'none'}}>Click here to login</NavLink></button><br/><br/><br/>
        </div>
    )
}

export default Landing; 