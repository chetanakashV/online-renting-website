import React, {useState} from 'react'
import Axios from 'axios'
import './land.css'
import imgai from './images/register.jpeg'

const Register = () => {

    const [name, setName] = useState(""); 
    const [pass, setPass] = useState(""); 
    const [adid, setAdid] = useState(0); 
    const [age, setAge] = useState(0); 
    const [pin, setPin] = useState(0); 
    const [dno, setDno] = useState(0); 
    const [stno, setStno] = useState(""); 
    const [city, setCity] = useState(""); 
    const [state, setState] = useState(""); 
    const [pno1, setPno1] = useState(); 
    const [pno2, setPon2] = useState(); 

    const register = () => {
        Axios.post('http://localhost:3001/register',{
            Name: name, 
            Pass: pass, 
            Adid: adid, 
            Age: age, 
            Pin: pin, 
            Dno: dno, 
            Stno: stno, 
            City: city,
            State: state,
            Pno1: pno1,
            Pno2: pno2
        }).then(window.alert("user is registered"))
        
    }

    return (
        <div style = {{ textAlign: "center",height: '745px',backgroundImage: `url(${imgai})`,   backgroundSize: 'cover',  backgroundPosition: 'center', width: '100%', backgroundRepeat: 'no-repeat' }}> <br/><br/>
        <input className='ph' type='text' placeholder = "Enter your name" required onChange = {e => setName(e.target.value)}/> 
        <input className='ph'type='text' placeholder = "Enter your password" onChange = {e => setPass(e.target.value)}required/> 
        <input className='ph'type='number' placeholder = "Enter your pincode" onChange = {e => setPin(e.target.value)} required/> 
        <input className='ph'type='number' placeholder = "Enter your age" onChange = {e => setAge(e.target.value)} required/> 
        <input className='ph'type='number' placeholder = "Enter your door number" onChange = {e => setDno(e.target.value)} required/>
        <input className='ph'type='number' placeholder = "Enter your adhaar id" onChange = {e => setAdid(e.target.value)} required/> 
        <input className='ph'type='text' placeholder = "Enter your street name" onChange = {e => setStno(e.target.value)} required/> 
        <input className='ph'type='text' placeholder = "Enter your city name" onChange = {e => setCity(e.target.value)}required/> 
        <input className='ph'type='text' placeholder = "Enter your state name" onChange = {e => setState(e.target.value)} required/> 
        <input className='ph'type = 'tel' placeholder='Enter your official phone number' onChange={e => setPno1(e.target.value)}/> 
        <input className='ph'type = 'tel' placeholder='Enter your personal phone number' onChange={e => setPon2(e.target.value)}/> <br/>
        <button className = "button-9" onClick = {register}> Register</button>
        </div>
    )
}

export default Register;