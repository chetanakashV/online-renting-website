import React, { useState,useEffect } from 'react'
import Axios from 'axios'

const ViewU = () => {

    const [usersList, setUsersList] = useState([])
    var id =  localStorage.getItem("aadhar")

    useEffect(() => {
        Axios.get(`http://localhost:3001/getusers/${id}`).then((response) => {
            setUsersList(response.data)
        });
    },[])

    const deleteU = (id) => {
        Axios.post(`http://localhost:3001/deleteuser/${id}`).then(window.alert(`user with  id ${id} is deleted`))
    }

    return (
        <>
        <table className='table table-striped table-bordered' style = {{width: "1300px", right:"-7%", position: "relative"}}>
            <thead>
                <tr>
                           <th>AADHAR_ID</th>
                            <th>NAME</th>
                            <th> AGE</th>
                            <th>PIN_CODE</th>
                            <th>DOOR_NO</th>
                            <th>STATE</th>
                            <th>STREET</th>
                            <th>CITY</th>
                            <th>OPTION</th>
                </tr>
            </thead>
            <tbody>
              
                   {usersList.map(member => 
                        <tr key={member.AADHAR_ID}>
                            <td>{member.AADHAR_ID}</td>
                            <td>{member.NAME}</td>
                            <td> {member.AGE}</td>
                            <td>{member.PIN_CODE}</td>
                            <td>{member.DOOR_NO}</td>
                            <td>{member.STATE}</td>
                            <td>{member.STREET}</td>
                            <td>{member.CITY}</td>
                            <td><button onClick={() => {deleteU(member.AADHAR_ID)}}> Delete</button></td>
                        </tr>
                   )}
                
            </tbody>
        </table>

        </>
    )
}

export default ViewU; 