import { db } from "../db.js";

export const getManage_doctors = (req, res) => {
const query="SELECT * FROM  manage_doctor";

    db.query(query,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
}

export const getManage_doctor = (req, res) => {
    //const query="select * from Manage_doctor where doctor_id=?"
    const query="SELECT * FROM manage_doctor WHERE doctor_id= ?";
    //const doctor_id = req.params.id;  
   
    db.query(query,[req.params.id],(err,data)=>{
        if(err) return res.json(err)        
        return res.json(data[0])
    })
}

export const deleteManage_doctor = (req, res) => {
    //const query="select * from Manage_doctor where doctor_id=?"
    const query="DELETE FROM manage_doctor WHERE doctor_id = ?"
    //const doctoe_id = req.params.id;  
   
    db.query(query,[req.params.id],(err,data)=>{
        if(err) return res.json(err)        
        return res.json("data delete successfully")
    })
}

export const insertManage_doctor=(req,res)=>{
    const query="INSERT INTO `manage_doctor`(`name`, `mobile_no`, `gender`, `address`, `dob`, `entry_by`, `status`, `entry_Date`,`email`, `specialist`, `degree`) Values(?)";
    const values= [
        req.body.name,
        req.body.mobile_no,
        req.body.gender,
        req.body.address,
        req.body.dob,
        req.body.entry_by,
        req.body.status,
        Date.now(),
        req.body.email,
        req.body.specialist,
        req.body.degree
    ];

    db.query(query,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json("New user has been added")
    })
}

export const updateManage_doctor=(req,res)=>{
    const doctor_id=req.params.id;    
  //  console.log(doctor_id)
    const query="UPDATE `manage_doctor` SET `name`=?,`mobile_no`=?,`gender`=?,`address`=?,`dob`=?,`entry_by`=?,`status`=?,`update_Date`=?,`email`=?,`specialist`=?,`degree`=? where doctor_id=?"
    const values= [        
        req.body.name,
        req.body.mobile_no,
        req.body.gender,
        req.body.address,
        req.body.dob,
        req.body.entry_by,
        req.body.status,
        Date.now(),
        req.body.email,
        req.body.specialist,
        req.body.degree

    ];
    //console.log(values)   
    db.query(query,[...values,doctor_id],(err,data)=>{
        if(err) return res.json(err)
        return res.json("data has been updated")
    })
}