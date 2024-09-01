//import React from 'react'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Navigate,useNavigate } from 'react-router-dom'

export default function Appointment() {
  //const[patient_id,setpatient]=useState('')
  const[appointment_date,setappointmentdate]=useState('')
  const[doctor_id,setdoctor]=useState('')
  const[entry_by,setentry]=useState('')
  const[status,setstatus]=useState('')
  const[isWorkingHours,setWork]=useState('')
  const[isValidDate,setDate]=useState('')
  const[appointment_time,setappointmenttime]=useState('')
 const[desises,setdesises]=useState('')
  const [patient_id, setpatient] = useState(sessionStorage.getItem("user1"));
  const [formErrors, setFormErrors] = useState({});

  const[doctor1,setdoctor1]=useState([])
  const[doctor2,setdoctor2]=useState([])
  const[doctor3,setdoctor3]=useState([])
  const[doctor4,setdoctor4]=useState([])

let i=1;
  useEffect(()=>{
    displaymanage_doctorss();
  },[])
  const submitHandle=async(e)=>{
    e.preventDefault()
    setFormErrors(validate());
    
    const specificTime = new Date(); 
    const [hours, minutes] = appointment_time.split(":");// Replace this with the specific time you want to check
specificTime.setHours(hours,minutes,0);
const specificHour = specificTime.getHours();// Replace this with the specific time you want to check

 const isWorkingHours = specificHour >= 7 && specificHour <= 17;
 let dtToday = new Date();
    
    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    if(month < 10)
        month = '0' + month.toString();
    if(day < 10)
        day = '0' + day.toString();
    
    const maxDate = year + '-' + month + '-' + day;
    const isValidDate = appointment_date >= maxDate
    // or instead:
    // var maxDate = dtToday.toISOString().substr(0, 10);
    // alert(isWorkingHours);
    // alert(isValidDate);
    if(appointment_time && doctor_id  && appointment_date && desises && isWorkingHours && isValidDate)
      
    {
  
    let res=""
    //alert("in if")
    try
    {
      res=await axios.post("/Manage_appointment",{
        patient_id,
        appointment_date,
        doctor_id,
        desises,
        entry_by,
        status,
        appointment_time
      
      });
      
    }  catch (err) {
      alert(err)
    }
    alert(res.data)
    Navigate("/")
  }
  } 
  const displaymanage_doctorss=async()=>{
    try {
      const res=await axios.get("/Manage_doctor")
      setdoctor1(res.data[0].name)
      setdoctor2(res.data[1].name)
      setdoctor3(res.data[2].name)
      setdoctor4(res.data[3].name)
      
    } catch (error) {
      //alert(error)
    }
  }
  
  const validate = () => {
    const errors = {};
    const specificTime = new Date(); 
    const [hours, minutes] = appointment_time.split(":");// Replace this with the specific time you want to check
specificTime.setHours(hours,minutes,0);
const specificHour = specificTime.getHours();
 const isWorkingHours = specificHour >= 7 && specificHour <= 17;
 let dtToday = new Date();
  //alert(specificHour+isWorkingHours);    
    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    if(month < 10)
        month = '0' + month.toString();
    if(day < 10)
        day = '0' + day.toString();
    
    const maxDate = year + '-' + month + '-' + day;
    const isValidDate = appointment_date >= maxDate
    if (!appointment_time) {
        errors.appointment_time = "appointment time is required";
    } else if(!(specificHour >= 7 && specificHour < 17)){
      errors.appointment_time = "Enter appointment time between 7 AM to 5 PM";
    }
    if (!doctor_id) {
        errors.doctor_id = "Doctor name is required";
    }
    if (!appointment_date) {
        errors.appointment_date = "Appointment Date is required";
    } else if(!isValidDate){
      errors.appointment_date = "Appointment Date is not valid";
    }
    if (!desises) {
      errors.desises = "Desises  is required";
  }

    return errors;
};
  return(
  <>
    <section id="hero" class="d-flex align-items-center">
    <div class="container">
      <h1>Welcome to Appointment</h1>
      <a href="#about" class="btn-get-started scrollto">Get Started</a>
    </div>
  </section>
  <br/><br/><br/><br/><br/><br/><br/><br/><br/>
<section id="appointment" class="appointment section-bg">
      <div class="container">

        <div class="section-title">
          <h1>Make an Appointment</h1>
          <p>Appointments are important for both the service provider and the person seeking the service, as they help ensure that the provider has enough time to attend to each patient's needs and that the person seeking the service is seen promptly and efficiently.</p>
        </div>

        <form action="forms/appointment.php" method="post" role="form" class="php-email-form">
          <div class="row">
            <div class="col-md-4 form-group mt-3">
              <input type="date" name="date" class="form-control datepicker" id="date" placeholder="Appointment Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars" onChange={e=>setappointmentdate(e.target.value)}/>
              <p style={{color: "red"}}>{formErrors.appointment_date}</p>

              <div class="validate"></div>
            </div>

             <div class="col-md-4 form-group mt-3">
              <input type="time" name="date" class="form-control datepicker" id="date" placeholder="Appointment Time" data-rule="minlen:4" data-msg="Please enter at least 4 chars" onChange={e=>setappointmenttime(e.target.value)}/>
              <p style={{color: "red"}}>{formErrors.appointment_time}</p>

              <div class="validate"></div>
            </div>
          
            <div class="col-md-4 form-group mt-3">
              <select name="doctor" id="doctor" class="form-select" onChange={e=>setdoctor(e.target.value)}>
                <option value="">Select Doctor</option>
                <option value="1" >{doctor1}</option>
                <option value="2">{doctor2}</option>
                <option value="3">{doctor3}</option>
                <option value="4">{doctor4}</option>
              </select >
              <p style={{color: "red"}}>{formErrors.doctor_id}</p>

              <div class="validate" ></div>
            </div>
          </div>
           
            <div class="col-md-4 form-group mt-3">
              <input type="text" name="text" class="form-control datepicker" id="date" placeholder="Desises" data-rule="minlen:4" data-msg="Please enter at least 4 chars" onChange={e=>setdesises(e.target.value)}/>
              <p style={{color: "red"}}>{formErrors.desises}</p>

              <div class="validate"></div>
            </div>
          
         
          <div class="mb-3">
            <div class="loading">Loading</div>
            <div class="error-message"></div>
            <div class="sent-message">Your appointment request has been sent successfully. Thank you!</div>
          </div>
          <div>
                    <button type="submit" class="btn btn-primary" onClick={submitHandle}>Make an Appointment</button></div>
           </form>

      </div>
    </section>    
    </>
     )
}
