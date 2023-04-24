import React, {useState} from 'react'
import Axios from 'axios'
import ViewPM from './Manager/View_pros'
import AddProp from './Manager/Add_pros'
import { useNavigate } from 'react-router'
import Home from './Home'

const Home1 = () => {

    const navigate = useNavigate(); 
    const [viewProp, setViewProp] = useState(false); 
    const [viewAddProp, setViewAddProp] = useState(false); 
    return (

        <>
       <div style = {{textAlign: "center"}}><br/><br/>
        {/* <p> User properties: </p>
        <Home/>  */}

        <button style = {{width: '200px', height: '30px', borderRadius: '5px'}} onClick = {e => {setViewAddProp(!viewAddProp)}}> Add Property</button> <br/><br/>
        <br/> {viewAddProp && <AddProp/>} <br/><br/> <br/>

        <button style = {{width: '200px', height: '30px', borderRadius: '5px'}} onClick = {e => {setViewProp(!viewProp)}}> View Properties</button> <br/><br/>
        <br/> {viewProp && <ViewPM/>} <br/><br/>

        </div>
        </>
    )
}

export default Home1; 