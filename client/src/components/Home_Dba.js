import React, {useState} from 'react'
import Home from './Home'
import ViewU from './Admin/View_User'

const Home0 = () => {

    const [viewU, setViewU] = useState(false)

    return (
        <div style = {{textAlign: "center"}}><br/><br/>
        <p> User properties: </p>
        <Home/> 

        <button onClick = {() => {setViewU(!viewU)}} style = {{width: '200px', height: '30px', borderRadius: '5px'}}> View Users</button><br/><br/>
        {viewU && <ViewU/>}

        </div>
    )
}

export default Home0; 