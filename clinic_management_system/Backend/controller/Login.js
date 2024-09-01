//import React from 'react'
import { json } from "express";
import { db } from "../db.js";

export const  getlogin = (req,res)=> {
    const admin_phone = req.query.admin_phone;
    const password = req.query.password;
    const query="SELECT `admin_id` FROM `admin_users` WHERE admin_phone='"+admin_phone+"' AND password='"+password+"'";
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
                    return res.json(data[0].admin_id);
             }
                
         })        
        }  catch (err) {
            return res.json(err)
        }   
    }
  
    