import React, {useState} from 'react'
import Home from './Home'
import ViewU from './Admin/View_User'
import Register from './Register'

const Home0 = () => {

    const [viewU, setViewU] = useState(false)
    const [addU, setAddU] = useState(false)

    return (
        <div style = {{textAlign: "center"}}><br/><br/><br/><br/>
        {/* <p> User properties: </p>
        <Home/>  */}

        <button style = {{width: '200px', height: '30px', borderRadius: '5px'}} onClick={e => {setAddU(!addU)}}> Add User </button><br/> <br/> <br/>

        {addU && <Register/> } <br/><br/>

        <button onClick = {() => {setViewU(!viewU)}} style = {{width: '200px', height: '30px', borderRadius: '5px'}}> View Users</button><br/><br/>
        {viewU && <ViewU/>}

        </div>
    )
}

export default Home0; 