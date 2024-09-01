import { db } from "../db.js";

export const getContact_uss = (req, res) => {
const query="SELECT * FROM `contact_us`";

    db.query(query,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
}

export const getContact_us = (req, res) => {
    //const query="select * from About_us where page_id=?"
    const query="SELECT * FROM contact_us WHERE page_id= ?";
    //const about_id = req.params.id;  
   
    db.query(query,[req.params.id],(err,data)=>{
        if(err) return res.json(err)        
        return res.json(data[0])
    })
}

export const deleteContact_us = (req, res) => {
    //const query="select * from Admin_users where admin_id=?"
    const query="DELETE FROM `contact_us` WHERE page_id = ?"
    //const about_id = req.params.id;  
   
    db.query(query,[req.params.id],(err,data)=>{
        if(err) return res.json(err)        
        return res.json("data delete successfully")
    })
}

export const insertContact_us=(req,res)=>{
    const query="INSERT INTO `contact_us`( `email_id`, `phone_no1`, `phone_no2`, `address_1`, `address_2`, `whatsapp_no`, `facebook_link`, `instagram_link`, `youtube_link`, `gplus_link`, `linkedin_link`, `entry_date`)  values(?)";
    const values= [
        req.body.email_id,
        req.body.phone_no1,
        req.body.phone_no2,
        req.body.address_1,
        req.body.address_2,
        req.body.whatsapp_no,
        req.body.facebook_link,
        req.body.instagram_link,
        req.body.youtube_link,
        req.body.gplus_link,
        req.body.linkedin_link,
        Date.now()

    ];

    db.query(query,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json("New Contact has been added")
    })
}

export const updateContact_us=(req,res)=>{
    const page_id=req.params.id;    
  //  console.log(admin_id)
    const query="UPDATE `contact_us` SET `email_id`=?,`phone_no1`=?,`phone_no2`=?,`address_1`=?,`address_2`=?,`whatsapp_no`=?,`facebook_link`=?,`instagram_link`=?,`youtube_link`=?,`gplus_link`=?,`linkedin_link`=?,`updated_date`=? WHERE `page_id`=?";
    const values= [       
        req.body.email_id,
        req.body.phone_no1,
        req.body.phone_no2,
        req.body.address_1,
        req.body.address_2,
        req.body.whatsapp_no,   
        req.body.facebook_link,
        req.body.instagram_link,
        req.body.youtube_link,
        req.body.gplus_link,
        req.body.linkedin_link,
        Date.now()
    ];
    
    db.query(query,[...values,page_id],(err,data)=>{
        if(err) return res.json(err)
        return res.json(" User data has been updated")
    })
}