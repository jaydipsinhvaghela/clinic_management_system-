import { db } from "../db.js";

export const getAbout_uss = (req, res) => {
const query="SELECT * FROM `about_us`";

    db.query(query,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
}

export const getAbout_us = (req, res) => {
    //const query="select * from About_us where page_id=?"
    const query="SELECT * FROM `about_us` WHERE page_id= ?";
    //const about_id = req.params.id;  
   
    db.query(query,[req.params.id],(err,data)=>{
        if(err) return res.json(err)        
        return res.json(data[0])
    })
}

export const deleteAbout_us = (req, res) => {
    //const query="select * from About_us where page_id=?"
    const query="DELETE FROM `about_us` WHERE page_id=?"
    //const about_id = req.params.id;  
   
    db.query(query,[req.params.id],(err,data)=>{
        if(err) return res.json(err)        
        return res.json("data delete successfully")
    })
}

export const insertAbout_us=(req,res)=>{
   const query="INSERT INTO `about_us`(`page_content`, `page_img`, `entry_date`) Values(?)";
    const values= [
        req.body.page_content,
        req.body.page_img,
        Date.now()
    ];

    db.query(query,[values],(err,data)=>{                   
        if(err) return res.json(err)
        return res.json("New data has been added")
    })
}

export const updateAbout_us=(req,res)=>{
    const page_id=req.params.id;    
  //  console.log(page_id)
    const query="UPDATE `about_us` SET `page_content`=?,`page_img`=?,`updated_date`=? WHERE page_id=?"
    const values= [        
        req.body.page_content,
        req.body.page_img,
        Date.now()
    ];
    
    db.query(query,[...values,page_id],(err,data)=>{
        if(err) return res.json(err)
        return res.json("About data has been updated")
    })
}