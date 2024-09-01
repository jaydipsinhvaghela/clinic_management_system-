import { db } from "../db.js";

export const getPatients = (req, res) => {
const query="SELECT * FROM  patient";

    db.query(query,(err,data)=>{
        if(err) {
            return res.json(err)
        }
        else
        {
            return res.json(data)
        }
        
    })
}

export const getPatient = (req, res) => {
    //const query="select * from Patient where patient_id=?"
    const query="SELECT * FROM patient WHERE patient_id= ?";
    //const Patient_id = req.params.id;  
   
    db.query(query,[req.params.id],(err,data)=>{
        if(err) return res.json(err)        
        return res.json(data[0])
    })
}

export const deletePatient = (req, res) => {
    //const query="select * from Patient where Patient_id=?"
    const query="DELETE FROM patient WHERE patient_id = ?"
    //const Patient_id = req.params.id;  
   
    db.query(query,[req.params.id],(err,data)=>{
        if(err) return res.json(err)        
        return res.json("data delete successfully")
    })
}

export const insertPatient=(req,res)=>{
    const query="INSERT INTO `patient`(`name`, `mobile_no`, `gender`, `address`, `dob`, `entry_by`, `status`, `entry_date`, `desises`,`password`) Values(?)";
    const values= [
        req.body.name,
        req.body.mobile_no,   
        req.body.gender,
        req.body.address,
        req.body.dob,
        req.body.entry_by,
        req.body.status,
        Date.now(),
        req.body.desises,
        req.body.password
     ];

    db.query(query,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json("New user has been added")
    })
}

export const updatePatient=(req,res)=>{
    const patient_id=req.params.id;    
  //  console.log(doctor_id)
    const query="UPDATE `patient` SET `name`=?,`mobile_no`=?,`gender`=?,`address`=?,`dob`=?,`entry_by`=?,`status`=?,`desises`=?,`update_date`=? where patient_id=?"
    const values= [        
        req.body.name,
        req.body.mobile_no,
        req.body.gender,
        req.body.address,
        req.body.dob,
        req.body.entry_by,
        req.body.status,
        req.body.desises,
    
        Date.now(),
       // req.body.password

    ];
    
    db.query(query,[...values,patient_id],(err,data)=>{
        if(err) return res.json(err)
        return res.json("data has been updated")
    })
}