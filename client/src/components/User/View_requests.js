import React, { useEffect, useState } from 'react'
import Axios from 'axios'

const ViewRq = () => {
    

    const aid = localStorage.getItem("aadhar");
    const [proplist, setProplist] = useState([]) 
    useEffect(() => {
        Axios.get(`http://localhost:3001/viewpendingreq/${aid}`).then(
            response => setProplist(response.data)
        )
    })

    const reject = (rid, pid) => {
        Axios.get(`http://localhost:3001/revokerequest/${pid}&${rid}`)
    }

    const approve = (rid, pid, endt) => {
        Axios.post("http://localhost:3000/acceptrequest", {
            rid: rid, 
            pid: pid,
            endt: endt
        })
    }

    return (
        <>

        <table class = "table table-striped table-bordered" style = {{position: "relative", width: "1000px", right: "-17%"}}>
            <thead>
                <th>Requestor's Id</th>
                <th>Property Id</th>
                <th>Rent </th>
                <th> OPTION</th>
                <th> OPTION</th>
            </thead>
            <tbody>
               {proplist.map(member => 
                <tr>
                    <td>{member.RID}</td>
                    <td>{member.END_DATE}</td>
                    <td>{member.RENT_PER_MONTH}</td>
                    <td><button onClick={() => approve(member.RID, member.PID, member.END_DATE)}> Approve</button></td>
                    <td><button onClick={() => reject(member.RID, member.PID)}> Reject</button></td>
                </tr>
                )}
            </tbody>
        </table>
        
        </>
    )
}

export default ViewRq;