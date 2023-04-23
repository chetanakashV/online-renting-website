import React, { useState } from 'react'
import AddP from './User/Add_property';
import ViewP from './User/View_properties';
import ViewR from './User/View_rent'
import { useNavigate } from 'react-router';

const Home = () => {
    
    const navigate = useNavigate(); 
    var user = localStorage.getItem("user")
    var loggedin = localStorage.getItem("loggedin")
    const [ap, setAp] = useState(false); 
    const [vp, setVp] = useState(false); 
    const [lpr, setLpr] = useState(false); 
    var aid = localStorage.getItem('aadhar')

    const logout = () => {
        localStorage.removeItem("aadhar")
        localStorage.setItem("user", false)
        localStorage.setItem("dba", false)
        navigate("/");
    }


    return (

        <div style = {{textAlign : 'center'}}>
             <br/> <br/>
        Welcome back, user {aid} <div style = {{position: "relative", right: "-40%"}}> <button onClick = {logout}> Logout </button> </div> <br/> <br/><br/>
            

        <button onClick={() => {setAp(!ap)}} style = {{width: '200px', height: '30px', borderRadius: '5px'}}>Add Property</button> <br/> <br/>
        {ap && <AddP/>} <br/><br/>
        <button onClick = {() => {setVp(!vp)}} style = {{width: '200px', height: '30px', borderRadius: '5px'}}> View My properties</button> <br/> <br/>
        {vp && <ViewP/>} <br/><br/>
        <button onClick = {() => {setLpr(!lpr)}} style = {{width: '200px', height: '30px', borderRadius: '5px'}}> Look properties for rent </button> <br/> <br/>
        {lpr && <ViewR/>} <br/><br/>
        </div>
    )
}

export default Home; 