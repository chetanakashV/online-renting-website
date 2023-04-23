import React, { useState } from 'react'
import AddP from './User/Add_property';
import ViewP from './User/View_properties';
import ViewR from './User/View_rent'
import ViewRC from './User/View_rentC';
import ViewRL from './User/View_rentL';
import ViewRP from './User/View_rentP';
import { useNavigate } from 'react-router';

const Home = () => {
    
    const navigate = useNavigate(); 
    var user = localStorage.getItem("user")
    var loggedin = localStorage.getItem("loggedin")
    const [ap, setAp] = useState(false); 
    const [vp, setVp] = useState(false); 
    const [lpr, setLpr] = useState(false); 
    const [filter, setFilter] = useState(""); 
    var aid = localStorage.getItem('aadhar')

    const logout = () => {
        localStorage.removeItem("aadhar")
        localStorage.setItem("user", false)
        localStorage.setItem("dba", false)
        navigate("/");
    }

    const change = () => {
        if (filter == "" ) setFilter("city"); 
        else if(filter == "city") setFilter("locality"); 
        else if(filter == "locality") setFilter("price");
        else if(filter == "price") setFilter("");
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
        <br/> { lpr &&  <div> <>filter by: </> <button onClick={change} >   {filter == "" && <>none</>} {filter == "city" && <>city</>} {filter == "locality" && <>locality</>} {filter == "price" && <>price</>} <br/></button> </div>} <br/>
        {lpr && filter == "" &&  <ViewR/>}
        {lpr && filter == "city" &&  <ViewRC/>}
        {lpr && filter == "locality" &&  <ViewRL/>}
        {lpr && filter == "price" &&  <ViewRP/>}
        </div>
    )
}

export default Home; 