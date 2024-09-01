import { json } from "express";
import { db } from "../db.js";
export const  getupdate = (req,res)=>{
    const query="UPDATE `admin_users` SET `password`=? WHERE `admin_id`=?";
    const values=[req.body.password]
    db.query(query,[...values,req.params.id],(err,data)=>{
        if(err) return res.json(err);
        return res.json("DATA UPDATED SUCCESSFULLY...")
    })
}

