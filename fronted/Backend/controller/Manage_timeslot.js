import { db } from "../db.js";

export const getManage_timeslots = (req, res) => {
const query="SELECT * FROM manage_timeslot";

    db.query(query,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
}

export const getManage_timeslot = (req, res) => {
    //const query="select * from Manage_timeslot where doctor_id=?"
    const query="SELECT * FROM manage_timeslot WHERE doctor_id=?";
    //const doctor_id = req.params.id;  
   
    db.query(query,[req.params.id],(err,data)=>{
        if(err) return res.json(err)        
        return res.json(data[0])
    })
}

export const deleteManage_timeslot = (req, res) => {
    //const query="select * from Manage_timeslot where doctor_id=?"
    const query="DELETE FROM `manage_timeslot` WHERE doctor_id =?"
    //const doctor_id = req.params.id;  
   
    db.query(query,[req.params.id],(err,data)=>{
        if(err) return res.json(err)        
        return res.json("data delete successfully")
    })
}

export const insertManage_timeslot=(req,res)=>{
  
    const query="INSERT INTO manage_timeslot(`shift`, `Dob`, `status`, `entry_by`, `entry_date`) Values(?)";
    const values= [
        req.body.shift,
        req.body.Dob,
        req.body.status,      
        req.body.entry_by,
        Date.now()
    ];
    //console.log(values)
    db.query(query,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json("New user has been added")
    })
}

export const updateManage_timeslot=(req,res)=>{
    const doctor_id=req.params.id;    
  //  console.log(doctor_id)
    const query="UPDATE manage_timeslot SET `shift`=?,`Dob`=?,`status`=?,`entry_by`=?,`update_date`=? WHERE doctor_id=?"
    const values= [        
        req.body.shift,
        req.body.Dob,
        req.body.status,
        req.body.entry_by,
        Date.now()
    ];
    //console.log(values)
    db.query(query,[...values,doctor_id],(err,data)=>{
        if(err) return res.json(err)
        return res.json("data has been updated")
    })
}