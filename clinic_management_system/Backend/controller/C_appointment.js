import {db} from '../db.js';

export const getappointment=(req,res)=>{
    const query="SELECT COUNT(appointment_id ) AS appointment_id FROM `manage_appointment`";
    db.query(query,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data[0]);
    });
}