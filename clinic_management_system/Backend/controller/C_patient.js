import {db} from '../db.js';

export const getCpatient=(req,res)=>{
    const query="SELECT COUNT(patient_id ) AS patient_id FROM `patient`";
    db.query(query,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data[0]);
    });
}