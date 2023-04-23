import React, {useState} from 'react'
import Axios from 'axios'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [aid, setAid] = useState(0); 
    const [pass, setPass] = useState("");
    const [loginStatus, setLoginStatus] = useState(false); 
    const [dbaStatus, setDbaStatus] = useState(false); 
    const [managerStatus, setManagerStatus] = useState(false); 
    const navigate = useNavigate(); 
    
    
    

    const login = () => {

    console.log(aid);
     console.log(pass)
     
      
    Axios.post("http://localhost:3001/login", {
        Aid: aid, 
        Pass: pass
    }).then((response) => {
        if(response.data.dba){
            setDbaStatus(true); 
           
            // setLoginStatus(true); 
            localStorage.setItem('aadhar', aid); 
        }
        else if(response.data.manager){
            setManagerStatus(true); 

            localStorage.setItem('aadhar', aid); 
        }
        else if(response.data.user){
            setLoginStatus(true); 
        
            localStorage.setItem('aadhar', aid); 
        }
        
        else {
            //window.location.reload(); 
            localStorage.setItem("dba", false)
            localStorage.setItem("user", false)
            window.alert("unsuccessful login")
        }
    })

    }

    return (

        <div style={{textAlign: "center"}}><br/><br/>
    <input type = 'number' placeholder = "enter your aadhar id " required onChange = {e => setAid(e.target.value)} /><br/><br/>
    <input type = 'text' placeholder = "enter your password" required onChange = {e => setPass(e.target.value)} /><br/><br/>

    <button onClick = {login} type='submit' > Login </button>

        {dbaStatus && navigate('/home0')}
        {managerStatus && navigate('/home1')}
        {loginStatus && navigate('/home')}

        </div>
    )
}

export default Login; 