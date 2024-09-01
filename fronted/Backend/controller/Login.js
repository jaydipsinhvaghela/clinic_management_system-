//import React from 'react'
import { json } from "express";
import { db } from "../db.js";

export const  getlogin = (req,res)=> {
    const mobile_no = req.query.mobile_no;
    const password = req.query.password;
    const query="SELECT `patient_id` FROM `patient` WHERE mobile_no='"+mobile_no+"' AND password='"+password+"'";
   // const query="SELECT * FROM `admin_user` where admin_phone='"+admin_phone+"' AND password='"+password+"'"
    try {
        db.query(query,(err,data)=>{        
             //console.log(data.length)    
           //  console.log(data[0].admin_id)
             if(err) return res.json(err);
             else
             {
                if(data.length==0)
                    return res.json(0);
                else
                    return res.json(data[0].patient_id);
             }
                
         })        
        }  catch (err) {
            return res.json(err)
        }   
    }
  

    export const  getupdate = (req,res)=>{
        const query="UPDATE `patient` SET `password`=? WHERE `patient_id`=?";
        const values=[req.body.password]
        db.query(query,[...values,req.params.id],(err,data)=>{
            if(err) return res.json(err);
            return res.json("DATA UPDATED SUCCESSFULLY...")
        })
   
    }