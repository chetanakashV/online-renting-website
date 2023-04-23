import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { useParams } from 'react-router'

const EditP = () => {

    const {id} = useParams(); 
    console.log(id); 
    const rel = 0 ;
    const [propslist, setPropsList] = useState([]); 
    useEffect (() => {
        Axios.get(`http://localhost:3001/details/${id}`).then((response) => {
            setPropsList(response.data[0]);
        })
    }, [rel])

    // setStdt(propslist.START_DATE); 
    var stdt = propslist.START_DATE; 
    // setEndt(propslist.END_DATE);
    var endt = propslist.END_DATE; 
    // setCity(propslist.CITY); 
    var city = propslist.CITY; 
    // setTarea(propslist.TOTAL_AREA); 
    var tarea = propslist.TOTAL_AREA; 
    // setParea(propslist.PLINTH_AREA);
    var parea  = propslist.PLINTH_AREA;  
    // setNof(propslist.NO_OF_FLOORS); 
    var nof = propslist.NO_OF_FLOORS; 
    // setRent(propslist.RENT_PER_MONTH);
    var rent = propslist.RENT_PER_MONTH;  
    // setAgecom(propslist.AGENCY_COMMISSION);
    var agecom = propslist.AGENCY_COMMISSION;  
    // setAddress(propslist.ADDRESS); 
    var address = propslist.ADDRESS; 
    // setLocality(propslist.LOCALITY);
    var locality = propslist.LOCALITY;  
    // setYoc(propslist.YEAR_OF_CONSTRUCTION); 
    var yoc = propslist.YEAR_OF_CONSTRUCTION; 


    return (

        <div>
        <input type = "date"  />
        <input type = "number" value = {tarea} />
        </div>
    )
}

export default EditP; 