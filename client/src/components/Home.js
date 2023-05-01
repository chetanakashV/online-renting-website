import React, { useState } from 'react'
import AddP from './User/Add_property';
import ViewP from './User/View_properties';
import ViewR from './User/View_rent'
import ViewRC from './User/View_rentC';
import ViewRL from './User/View_rentL';
import ViewRP from './User/View_rentP';
import ViewRq from './User/View_requests';
import { useNavigate } from 'react-router';
import Search from './User/Search';
import Editprof from './User/Edit_profile';

const Home = () => {
    
    const navigate = useNavigate(); 
    var user = localStorage.getItem("user")
    var loggedin = localStorage.getItem("loggedin")
    const [ap, setAp] = useState(false); 
   
    const [vp, setVp] = useState(false); 
    const [lpr, setLpr] = useState(false); 
    const [filter, setFilter] = useState(""); 
    const [vreq, setVreq] = useState(false); 
    const [search, setSearch] = useState(false); 
    const [grep, setGrep] = useState(0); 
    
    var aid = localStorage.getItem('aadhar')

    const logout = () => {
        localStorage.removeItem("aadhar")
        localStorage.setItem("user", false)
        localStorage.setItem("dba", false)
        navigate("/");
    }

    const genrep = () => {
        navigate("/generatereport")
    }

    const editProfile = () => {
        navigate("/editprofile");
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
            

        <button onClick={() => {editProfile()}} style = {{width: '350px', height: '30px', borderRadius: '5px'}}>Edit Profile</button> <br/> <br/> <br/> <br/>
       

        <button onClick={() => {setAp(!ap)}} style = {{width: '350px', height: '30px', borderRadius: '5px'}}>Add Property</button> <br/> <br/>
        {ap && <AddP/>} <br/><br/>
        <button onClick = {() => {setVp(!vp)}} style = {{width: '350px', height: '30px', borderRadius: '5px'}}> View My properties</button> <br/> <br/>
        {vp && <ViewP/>} <br/><br/>
        <button onClick = {() => {setLpr(!lpr)}} style = {{width: '350px', height: '30px', borderRadius: '5px'}}> Look properties for rent </button> <br/> <br/> 
        <br/> { lpr &&  <div> <>filter by: </> <button onClick={change} >   {filter == "" && <>none</>} {filter == "city" && <>city</>} {filter == "locality" && <>locality</>} {filter == "price" && <>price</>} <br/></button> </div>} <br/>
        {lpr && filter == "" &&  <ViewR/>}
        {lpr && filter == "city" &&  <ViewRC/>}
        {lpr && filter == "locality" &&  <ViewRL/>}
        {lpr && filter == "price" &&  <ViewRP/>}
        <button  style = {{width: '350px', height: '30px', borderRadius: '5px'}} onClick={() => setVreq(!vreq)}> View Pending requests for my Properties</button> <br/> <br/>
        { vreq && <ViewRq/> }<br/><br/>

        <button  style = {{width: '350px', height: '30px', borderRadius: '5px'}} onClick={() => setSearch(!search)}> Get status of Property</button> <br/> <br/>
        {search && <Search/>}
        <br/> <br/>

        <button  style = {{width: '350px', height: '30px', borderRadius: '5px'}} onClick={() => genrep()}> Generate Report of Property</button> <br/> <br/>
        
        <br/> <br/>

        </div>
    )
}

export default Home; 