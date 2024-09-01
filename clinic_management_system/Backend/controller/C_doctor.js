import {db} from '../db.js';

export const getdoctor=(req,res)=>{
    const query="SELECT COUNT(doctor_id ) AS doctor_id FROM `manage_doctor`";
    db.query(query,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data[0]);
    });
}