const express = require("express"); 
const app = express(); 
const mysql = require('mysql');
const cors = require('cors')
const bodyParser = require('body-parser')

const db = mysql.createPool({
    host: 'localhost',
    user: 'sherlock',
    password: 'sherlock',
    database: 'dbms'
})

app.use(cors())
app.use(express.json())

app.use(bodyParser.urlencoded({extended: true}))

app.listen(3001, () => {
    console.log("server is up and running")
})
 
app.get('/', (req,res) => {
    // res.send("hello its working")
    const sqlst = "INSERT INTO `dbms`.`user` (NAME, PASSWORD) VALUES('SHERLOCK', 'PASSWORD')"; 
    db.query(sqlst, (err,res) => {
        if(err) console.log(err); 
        else console.log("inserted");
    })

})

app.post('/register', (req, res) => {
    const st = "INSERT INTO `dbms`.`user` (AADHAR_ID, NAME, AGE, PASSWORD, PIN_CODE, DOOR_NO, STATE, STREET, CITY) VALUES (?,?,?,?,?,?,?,?,?)"; 
    const check = "SELECT * FROM `dbms`.`user`  WHERE AADHAR_ID = ?"; 

    const Name = req.body.Name; 
    const Pass = req.body.Pass; 
    const Adid = req.body.Adid; 
    const Age = req.body.Age; 
    const Pin = req.body.Pin; 
    const Dno = req.body.Dno; 
    const Stno = req.body.Stno; 
    const City =  req.body.City; 
    const State = req.body.State; 

    db.query(check, [Adid], (err, result) => {
        if(result.length == 0){
            db.query(st,[Adid, Name, Age, Pass, Pin, Dno, State, Stno, City], (err,res) => {
                if(err) console.log(err)
                else console.log("it is entered")
            })
        }
        else {
            res.send("duplicate entry")
            console.log("duplicate entry"); 
        }
    }) 

   
})

app.post('/login', (req,res) => {
    const Aid = req.body.Aid; 
    const Pass = req.body.Pass; 
    

    const check_dba = "SELECT * FROM `dbms`.`dba` AS A INNER JOIN `dbms`.`user` AS B ON A.AADHAR_ID = B.AADHAR_ID  WHERE A.AADHAR_ID = ? AND B.PASSWORD = ?;"; 
    const check_manger = "SELECT * FROM `dbms`.`manager` AS A INNER JOIN `dbms`.`user` AS B ON A.AADHAR_ID = B.AADHAR_ID WHERE A.AADHAR_ID = ? AND B.PASSWORD = ?;"; 
    const check_user = "SELECT * FROM `dbms`.`user` WHERE AADHAR_ID = ? AND PASSWORD = ?; "; 

    db.query(check_dba, [Aid, Pass], (err,resP) => {
            if(err) console.log(err); 
            if(resP.length > 0){
                res.json({dba:true, user: false,manager: true, message: 'dba login successful'})
                console.log("dba")
            }
            else {
                db.query(check_manger, [Aid, Pass], (err1, resp2) => {
                    if(err1) console.log(err1)


                    if(resp2.length > 0){
                        res.json({dba:false,user:false, manager: true, message: 'manager login successful'})
                        console.log("manager")
                    }
                    else {
                        db.query(check_user,[Aid, Pass], (error, response) => {
                            if(error) console.log(error)
                            else {
                                if(response.length == 0) { res.json({dba: false, user: false, message:"login failed" })
                                console.log("failed");  }
                                else {
                                    res.json({dba: false, user: true, message: "user login successful"})
                                    console.log("user")
                                }
                            }
                        })
                    }
                })


              
            }
    })

    // db.query(check_dba, [Aid, Pass], (err2, resp) =>{
    //     if(err2) console.log(err2)
    //     res.send(resp);
    // })
})

app.post('/addproperty', (req,res) => {
    const stdt = req.body.Stdt; 
    const endt = req.body.Endt; 
    const city = req.body.City; 
    const tarea = req.body.Tarea; 
    const parea = req.body.Parea; 
    const nof = req.body.Nof; 
    const rent = req.body.Rent; 
    const agecom = req.body.Agecom; 
    const address = req.body.Address; 
    const locality = req.body.Locality; 
    const yoc = req.body.Yoc; 
    const oid = req.body.Aid;  

    const st = "INSERT INTO `dbms`.`property` (START_DATE, END_DATE, CITY, TOTAL_AREA, PLINTH_AREA, NO_OF_FLOORS, RENT_PER_MONTH, AGENCY_COMMISSION, ADDRESS, LOCALITY, YEAR_OF_CONSTRUCTION, OWNER_ID) VALUES(?,?,?,?,?,?,?,?,?,?,?,?);"; 
    const st1 = "INSERT INTO `dbms`.`residential` (TYPE,ID,NO_OF_BEDROOMS) VALUES (?,?,?);"
    const st2 = "INSERT INTO `dbms`.`commercial` (TYPE, ID) VALUES (?,?);" 

    const idst = "SELECT MAX(ID) AS RECENT FROM `dbms`.`property`;";
    

    db.query(st, [stdt, endt, city, tarea, parea, nof, rent, agecom, address, locality, yoc, oid], (err, res) =>{
        if(err) console.log(err)
        else console.log("added to properties")
    })  

    
        
})

app.get('/getid', (req, res) => {
    const st = "SELECT MAX(ID) AS REC FROM `dbms`.`property` ;"; 

    db.query(st, (err, resp) =>{
        if(err) console.log(err)
        else {
            res.send(resp[0])
           // res.json({value: resp[0].REC})
            console.log(resp[0].REC)
        }
    }) 
})

 

app.post('/addres', (req,res) => {

    const id = req.body.Id;  
    const flat = req.body.Flat; 
    const beds = req.body.Beds; 
    var type;    

    if(flat) {type = 0; } 
    else type = 1; 


    const st = "INSERT INTO `dbms`.`residential` (TYPE, ID, NO_OF_BEDROOMS) VALUES (?,?,?); "; 

    db.query(st, [type, id, beds], (err, resp) => {
        if(err) console.log(err)

        else {
            console.log("inserted in residential"); 
        }
    })
})

app.post("/addcom", (req,res) => { 

    const id = req.body.Id; 
    const shop = req.body.Shop; 
    var type; 

    if(shop) type = 0;
    else type =1 ;

    const st = "INSERT INTO `dbms`.`commercial` (TYPE, ID) VALUES (?,?);"; 

    db.query(st, [type, id], (err,resp) => {
        if(err) console.log(err)
        else {
            console.log("inserted in commercial"); 
        }
})

})
 
app.get("/getmyprop/:aadharid", (req,res) => {
    const st = "SELECT * FROM  `dbms`.`property` WHERE OWNER_ID = ?;"; 
    const Id = req.params.aadharid;
    
    db.query(st, [Id], (err, resp) => {
        if(err) console.log(err)
        else {
            res.send(resp);
        }
    })
})

app.get("/getprops/:aadharid", (req,res) => {
    const st = "SELECT * FROM  `dbms`.`property` WHERE OWNER_ID != ?;"; 
    const Id = req.params.aadharid;
    
    db.query(st, [Id], (err, resp) => {
        if(err) console.log(err)
        else {
            res.send(resp);
        }
    })
})



app.post("/deleteprop/:aadharid", (req,res) => {
    const st = "DELETE FROM `dbms`.`property` WHERE ID = ?;";
    const id = req.params.aadharid; 

    db.query(st, [id], (err, resp) => {
        if(err) console.log(err)
        console.log(`deleted property with id ${id}`)

    })
})

app.get("/getusers", (req, res) => {

    const st = "SELECT * FROM dbms.user AS A WHERE NOT EXISTS (SELECT * FROM dbms.manager AS B WHERE B.AADHAR_ID = A.AADHAR_ID) AND NOT EXISTS (SELECT * FROM dbms.dba AS C WHERE C.AADHAR_ID = A.AADHAR_ID)"
    

    db.query(st,  (err,resp) => {
        if(err) console.log(err)
        res.send(resp)
    })
})

app.get("/getmanagers", (req, res) => {

    const st = "SELECT * FROM dbms.manager AS A , dbms.user AS B WHERE A.AADHAR_ID = B.AADHAR_ID  ";
   

    db.query(st, (err,resp) => {
        if(err) console.log(err)    
        res.send(resp)
    })
})

app.post("/deleteuser/:id", (req,res) => {
    const st = 'DELETE FROM `dbms`.`user` WHERE AADHAR_ID = ?;'
    const id = req.params.id;

    db.query(st, [id], (err,res) => {
        if(err) console.log(err)
        else console.log(`user with id ${id} is deleted`)
    })

})

app.get("/details/:id", (req, res) => {
    const id = req.params.id; 
    const st = "SELECT * FROM `dbms`.`property` WHERE ID = ?;";

    db.query(st, [id], (err,resp) => {
        if(err) console.log(err)
        res.send(resp);
    })

})

app.get("/getallprops", (req, res)=>{
    const st = "SELECT * FROM `dbms`.`property`; "; 

    db.query(st, (err,resp)=>{
        console.log(err)
        res.send(resp);
    })
})

app.get("/makemanager/:aid", (req,res) => {
    const st = "INSERT INTO `dbms`.`manager` (AADHAR_ID) VALUES (?);"; 
    // const check = "SELECT FORM `dbms`.`manager` WHERE AADHAR_ID = ?; "
    const id = req.params.aid; 

    db.query(st, [id], (err, resp) => {
        if(err) console.log(err)
        res.send("done")
    })
})

app.get("/makeuser/:aid", (req,res) => {
    const st = "DELETE FROM `dbms`.`manager` WHERE AADHAR_ID = ?; "; 
    const id = req.params.aid; 

    db.query(st, [id], (err,resp)=>{
        if(err) console.log(err)
        res.send("made user"); 
    })
})

app.get("/getproperties/:city&:aid", (req,res) => {
    const st = "SELECT * FROM `dbms`.`property` WHERE CITY = ? AND OWNER_ID != ?; ";
    const city = req.params.city; 
    const aid = req.params.aid; 

    db.query(st, [city, aid], (err, resp) => {
        if(err) console.log(err)
        res.send(resp)
    })
})

app.get("/getpropertiesl/:locality&:aid", (req,res) => {
    const st = "SELECT * FROM `dbms`.`property` WHERE LOCALITY = ? AND OWNER_ID != ?; ";
    const locality = req.params.locality; 
    const aid = req.params.aid; 
 
    db.query(st, [locality, aid], (err, resp) =>  {
        if(err) console.log(err)
        res.send(resp)
    })
})
 
app.get("/getpropertiess/:minprice&:maxprice&:aid", (req,res)=>{
    const st = "SELECT * FROM `dbms`.`property` WHERE RENT_PER_MONTH > ? AND RENT_PER_MONTH < ? AND OWNER_ID != ?;"; 

    const minprice = req.params.minprice; 
    const maxprice = req.params.maxprice; 
    const aid = req.params.aid; 

    db.query(st, [minprice, maxprice, aid] ,(err, resp) => {
        if(err) console.log(err)
        res.send(resp)
    })
})

app.post("/edittheproperty", (req,res)=>{
    var stdt = req.body.Stdt; 
    var endt = req.body.Endt; 
    const city = req.body.City; 
    const tarea = req.body.Tarea; 
    const parea = req.body.Parea; 
    const nof = req.body.Nof; 
    const rent = req.body.Rent; 
    const agecom = req.body.Agecom; 
    const address = req.body.Address; 
    const locality = req.body.Locality; 
    const yoc = req.body.Yoc; 
    const oid = req.body.Aid;    
    const id = req.body.Id; 

    stdt = stdt.slice(0,10)
    endt = endt.slice(0,10) 

    const st = 'UPDATE `dbms`.`property` SET START_DATE = ? , END_DATE = ?, CITY = ?, TOTAL_AREA = ?, PLINTH_AREA = ?, NO_OF_FLOORS = ?, RENT_PER_MONTH = ?, AGENCY_COMMISSION = ?, ADDRESS = ?, LOCALITY = ?, YEAR_OF_CONSTRUCTION =? , OWNER_ID = ? WHERE ID = ?;'; 

    db.query(st, [stdt, endt, city, tarea, parea, nof, rent, agecom, address, locality,yoc, oid, id], (err, res) => {
        if(err) console.log(err)
        else console.log("updated")
    })

})