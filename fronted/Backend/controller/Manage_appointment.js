
import { db } from "../db.js";

export const getManage_appointments = (req, res) => {
const query="SELECT a.appointment_id,b.name as patient_name,a.appointment_date,c.name as doctor_name,a.appointment_time,a.entry_by,a.status FROM manage_appointment a,patient b, manage_doctor c WHERE a.patient_id=b.patient_id AND a.doctor_id=c.doctor_id";

    db.query(query,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
}

export const getManage_appointment = (req, res) => {
    //const query="select * from About_us where page_id=?"
    const query="SELECT * FROM manage_appointment ma,manage_doctor md WHERE ma.doctor_id=md.doctor_id and patient_id= ?";
    //const about_id = req.params.id;  
   
    db.query(query,[req.params.id],(err,data)=>{
        if(err) return res.json(err)        
        return res.json(data)
    })
}

export const deleteManage_appointment = (req, res) => {
    //const query="select * from Admin_users where admin_id=?"
    const query="DELETE FROM manage_appointment WHERE appointment_id = ?"
    //const about_id = req.params.id;  
   
    db.query(query,[req.params.id],(err,data)=>{
        if(err) return res.json(err)        
        return res.json("User has been deleted")
    })
}

export const insertManage_appointment=(req,res)=>{
    const query="INSERT INTO `manage_appointment`( `patient_id`, `appointment_time`, `doctor_id`,`desises`, `entry_by`,`status`,`entry_date`,`appointment_date`) Values(?)";
    const values= [
        req.body.patient_id,
        req.body.appointment_time,
        req.body.doctor_id,
        req.body.desises,
        req.body.entry_by,
        req.body.status,
        Date.now(),
        req.body.appointment_date,
      
    ];
    console.log(query);
    console.log(values);
    db.query(query,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json("Your appointment submitted successfully")
    })
}

export const updateManage_appointment=(req,res)=>{
    const appointment_id=req.params.id;    
  //  console.log(admin_id)
    const query="UPDATE `manage_appointment` SET `patient_id`=?,`appointment_date`=?,`doctor_id`=?,`desises=?`,`entry_by`=?,`status`=?,`update_date`=?,`appointment_time`=? WHERE appointment_id=?"
    const values= [        
        req.body.patient_id,
        req.body.appointment_date,
        req.body.doctor_id,
        req.body.desises,
        req.body.entry_by,
        req.body.status,
        Date.now(),
        req.body.appointment_time,
       
    ];
   
    db.query(query,[...values,appointment_id],(err,data)=>{
        if(err) return res.json(err)
        return res.json("data has been updated")
    })
}