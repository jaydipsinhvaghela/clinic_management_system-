import { db } from "../db.js";

export const getFeedbacks = (req, res) => {
const query="SELECT a.feedback_id,b.name as name,a.description,a.entry_by from patient b,feedback a WHERE a.patient_id=b.patient_id";

    db.query(query,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
}

export const getFeedback = (req, res) => {
    //const query="select * from Feedback where feedback_id=?"
    const query="SELECT * FROM feedback WHERE feedback_id= ?";
    //const about_id = req.params.id;  
   
    db.query(query,[req.params.id],(err,data)=>{
        if(err) return res.json(err)        
        return res.json(data[0])
    })
}

export const deleteFeedback = (req, res) => {
    //const query="select * from Feedback where feedback_id=?"
    const query="DELETE FROM feedback WHERE feedback_id = ?"
    //const about_id = req.params.id;  
   
    db.query(query,[req.params.id],(err,data)=>{
        if(err) return res.json(err)        
        return res.json("data delete successfully")
    })
}

export const insertFeedback=(req,res)=>{
    const query="INSERT INTO `feedback`( `patient_id`, `description`, `entry_date`, `entry_by`) values(?)";
    const values= [
        req.body.patient_id,
        req.body.description,
        Date.now(),
        req.body.entry_by
    ];

    db.query(query,[values],(err,data)=>{
        if(err) return res.json(err)
        return res.json("Your Feedback successfully submitted")
    })
}

export const updateFeedback=(req,res)=>{
    const feedback_id=req.params.id;    
  //  console.log(feedback_id)
    const query="UPDATE `feedback` SET `patient_id`=?,`description`=?,`entry_by`=? WHERE `feedback_id`=?"
    const values= [        
        req.body.patient_id,
        req.body.description,
        req.body.entry_by
        
    ];
    
    db.query(query,[...values,feedback_id],(err,data)=>{
        if(err) return res.json(err)
        return res.json("user data has been updated")
    })
}