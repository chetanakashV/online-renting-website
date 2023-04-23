import React, {useState} from 'react'
import Home from './Home'
import ViewU from './Admin/View_User'
import Register from './Register'
import ViewPM from './Manager/View_pros'
import AddProp from './Manager/Add_pros'

const Home0 = () => {

    const [viewU, setViewU] = useState(false)
    const [addU, setAddU] = useState(false)
    const [viewProp, setViewProp] = useState(false)
    const [viewAddProp, setViewAddProp] = useState(false); 

    return (
        <div style = {{textAlign: "center"}}><br/><br/><br/><br/>
        {/* <p> User properties: </p>
        <Home/>  */}

        <button style = {{width: '200px', height: '30px', borderRadius: '5px'}} onClick={e => {setAddU(!addU)}}> Add User </button><br/> <br/> <br/>

        {addU && <Register/> } <br/><br/>

        <button onClick = {() => {setViewU(!viewU)}} style = {{width: '200px', height: '30px', borderRadius: '5px'}}> View Users</button><br/> <br/> <br/>
        {viewU && <ViewU/>} <br/><br/>

        <button style = {{width: '200px', height: '30px', borderRadius: '5px'}} onClick = {e => {setViewAddProp(!viewAddProp)}}> Add Property</button> <br/><br/>
        <br/> {viewAddProp && <AddProp/>} <br/><br/> <br/>

        <button style = {{width: '200px', height: '30px', borderRadius: '5px'}} onClick = {e => {setViewProp(!viewProp)}}> View Properties</button> <br/> <br/>
        <br/> {viewProp && <ViewPM/>} <br/> <br/>

        </div>
    )
}

export default Home0; 