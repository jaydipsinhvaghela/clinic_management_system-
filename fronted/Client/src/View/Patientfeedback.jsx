//import React from 'react'
import React, { useState } from 'react'
import axios from 'axios'
import { Navigate,useNavigate } from 'react-router-dom'

export default function Patientfeedback() {
  const[patient_id,setpatient]=useState(sessionStorage.getItem("user1"));
  const[description,setdescription]=useState('')
   const[entry_by,setentry]=useState('')
   const [formErrors, setFormErrors] = useState({});
   const id=sessionStorage.getItem("user1")
  


  const submitHandle=async(e)=>{
    e.preventDefault()
  //  setFormErrors(validate());
  setFormErrors(validate());
  if(description)
  {
      let res=""
    try
    {
      res=await axios.post("/Feedback",{
        patient_id,
        description,
        entry_by,
        
      });
      
    }  catch (err) {
      alert(err)
    }
    alert(res.data)
    Navigate("/")
    window.location.reload()
  }
  } 
  
  const validate = () => {
    const errors = {};
    // if (!patient_id) {
    //     errors.patient_id = "patient name is required";
    // }
    if (!description) {
        errors.description = "Description is required";
    }
    
    return errors;
};

  return(
  <>
    <section id="hero" class="d-flex align-items-center">
    <div class="container">
      <h1>Welcome to Feedback</h1>
      <a href="#about" class="btn-get-started scrollto">Get Started</a>
    </div>
  </section>
  <br/><br/><br/><br/><br/><br/><br/><br/><br/>
    
<section id="appointment" class="appointment section-bg">
      <div class="container">

        <div class="section-title">
          <h1>Make an Feedback</h1>
          <p>Please give your feedback to our clinic.</p>
        </div>

        <form action="forms/appointment.php" method="post" role="form" class="php-email-form">
          <div class="row">
            {/* <div class="col-md-4 form-group">
              <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" onChange={e=>setpatient(e.target.value)}/>
              <p style={{color: "red"}}>{formErrors.patient_id}</p>
              <div class="validate"></div>
            </div> */}
            <div class="col-md-4 form-group mt-3 mt-md-0">
              <input type="text" class="form-control" name="name" id="name" placeholder="Your Feedback" data-rule="email" data-msg="Please enter a valid email" onChange={e=>setdescription(e.target.value)}/>
              <p style={{color: "red"}}>{formErrors.description}</p>
              <div class="validate"></div>
            </div>
                      </div>
          
         
          <div class="mb-3">
            <div class="loading">Loading</div>
            <div class="error-message"></div>
            <div class="sent-message">Your appointment request has been sent successfully. Thank you!</div>
          </div>
          <div>
                    <button type="submit" class="btn btn-primary" onClick={submitHandle}>Submit</button></div>
           </form>

      </div>
    </section>    
    </>
     )
}
