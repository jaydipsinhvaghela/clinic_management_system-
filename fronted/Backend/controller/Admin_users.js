import { db } from "../db.js";

export const getAdmin_userss = (req, res) => {
const query="SELECT * FROM  admin_users";

    db.query(query,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
}

export const getAdmin_users = (req, res) => {
    //const query="select * from Admin_users where admin_id=?"
    const query="SELECT * FROM admin_users WHERE admin_id= ?";
    //const admin_id = req.params.id;  
   
    db.query(query,[req.params.id],(err,data)=>{
        if(err) return res.json(err)        
        return res.json(data[0])
    })
}

export const deleteAdmin_users = (req, res) => {
    //const query="select * from Admin_users where admin_id=?"
    const query="DELETE FROM `admin_users` WHERE admin_id =?"
    //const admin_id = req.params.id;  
   
    db.query(query,[req.params.id],(err,data)=>{
        if(err) return res.json(err)        
        return res.json("data delete successfully")
    })
}

export const insertAdmin_users=(req,res)=>{
  
    const query="INSERT INTO `admin_users`(`admin_name`, `email_id`, `admin_phone`, `password`,`status`, `entry_date`) Values(?)";
    const values= [
        req.body.admin_name,
        req.body.email_id,
        req.body.admin_phone,      
        req.body.password,
        req.body.status,
        Date.now()
    ];
    console.log(values)
    db.query(query,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json("New user has been added")
    })
}

export const updateAdmin_users=(req,res)=>{
    const admin_id=req.params.id;    
  //  console.log(admin_id)
    const query="UPDATE `admin_users` SET `admin_name`=?,`email_id`=?,`admin_phone`=?,`password`=?,`status`=? where admin_id=?"
    const values= [        
        req.body.admin_name,
        req.body.email_id,
        req.body.admin_phone,
        req.body.password,
        req.body.status
    ];
    
    db.query(query,[...values,admin_id],(err,data)=>{
        if(err) return res.json(err)
        return res.json("data has been updated")
    })
}