import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { Navigate,useNavigate } from 'react-router-dom'


export default function Manage_appointment() {

    const[patient_id,setpatient_id]=useState('')  
    const [patients,setPatients]=useState([])
    const [doctors,setdoctors]=useState([])
    const[appointment_time,setappointment_time]=useState('')
    const[doctor_id,setdoctor_id]=useState('')
    const[status,setstatus]=useState('')
   const[entry_by,setentry_by]=useState('')
    const[appointment_date,setappointment_date]=useState('')
    const[appointments,setappointments]=useState([]);
    const [formErrors, setFormErrors] = useState({});
    const[desises,setdesises]=useState('')
    useEffect(()=>{
      fatchappointments()
      fatchPatients()
      fatchdoctors()
    },[])

    const fatchPatients=async()=>{
      try {
        const res=await axios.get("/patient")
        setPatients(res.data)
     //   console.log(res.data)
      } catch (error) {
        //alert(error)
      }
    }

    const fatchdoctors=async()=>{
      try {
        const res=await axios.get("/Manage_doctor")
        setdoctors(res.data)
     //   console.log(res.data)
      } catch (error) {
        //alert(error)
      }
    }

    const fatchappointments=async()=>{
      try {
        const res=await axios.get("/Manage_appointment")
        setappointments(res.data)
     //   console.log(res.data)
      } catch (error) {
        //alert(error)
      }
    
    }
  
    const Navigate=useNavigate()

    const submitHandle=async(e)=>{
      e.preventDefault()
      setFormErrors(validate());
      if(patient_id && appointment_time && doctor_id  && appointment_date && desises)
      {
      //  alert("handle click")
      let res=""
      try 
      {
        res=await axios.post("/Manage_appointment/",{
          patient_id,
          appointment_date,
          doctor_id,
          desises,
          status,
          entry_by,
         appointment_time

        });
      } catch (err) {
        alert(err)
      }
      alert(res.data)
      Navigate("/Manage_appointment2")
      } 
    
    }
    const navigate=useNavigate();

    const appointment = ()=>{
            navigate("/Manage_appointment2");
     }
    const validate = () => {
      const errors = {};
      if (!patient_id) {
          errors.patient_id = "patient id is required";
      }
      if (!appointment_time) {
          errors.appointment_time = "appointment time is required";
      }
      if (!doctor_id) {
          errors.doctor_id = "Doctor id is required";
      }
      
      if (!status) {
          errors.status = "Status is required";
      }
      if (!appointment_date) {
          errors.appointment_date = "Appointment Date is required";
      }
      if (!desises) {
        errors.desises = "Desises  is required";
    }

      return errors;
  };
  

  return (
    <main id="main" class="main">
      <h3>Appointment</h3>
      <div class="card">
      <table  class="table table-striped dt-responsive nowrap w-100">
        {/* <tr>
          <th>Appointment</th>
        </tr> */}
      </table>
      {/* <h3>  Manage Appointment</h3> */}
                    <div class="col-12">
                        <button type='submit' class="btn btn-primary float-start mb-3 rounded-pill" onClick={appointment}><i class="bi bi-person-plus"></i><b>Display Appointment </b></button>
                    </div>
      
      <form class="row g-3">
      <div class="col-12">
                  
                  <label for="inputNanme4" class="form-label">Patient Name</label>
                  <select name="entry_by" id="entry_by" class="form-control" onChange={e=>setpatient_id(e.target.value)}>
                 
                 <option value={0}>Select Patient Name</option>
                 {patients.map(patient=>
                    <option value={patient.patient_id}>{patient.name}</option>
                 )}    
                 </select>
                  <p style={{color: "red"}}>{formErrors.patient_id}</p>
                </div>	
               
                <div class="col-12">
                    <label for="inputEmail4" class="form-label">Appointment time</label>
                    <input type="time" class="form-control" id="inputEmail4" placeholder='Appointment time'  onChange={e=>setappointment_time(e.target.value)}/>
                    <p style={{color: "red"}}>{formErrors.appointment_time}</p>
                  </div>
                <div>
                  <label for="inputNanme4" class="form-label">Doctor Name</label>
                  <select name="entry_by" id="entry_by" class="form-control" onChange={e=>setdoctor_id(e.target.value)}>
                 
                 <option value={0}>Select Doctor Name</option>
                 {doctors.map(doctor=>
                    <option value={doctor.doctor_id}>{doctor.name}</option>
                 )}    
                 </select>
                  <p style={{color: "red"}}>{formErrors.patient_id}</p>
                </div>	
               
                {/* <div class="col-12">
                    <label for="inputAdderss" class="form-label">Entry_by</label>
                   <select name="entry_by" id="entry_by" class="form-control" onChange={e=>setentry_by(e.target.value)}>
                   
                   <option value={0}>Select Entry-by</option>
                    <option value="1">Active</option>
                    <option value="2">InActive</option>
                    
                   </select>
                   <p style={{color: "red"}}>{formErrors.entry_by}</p>
                   
                  </div>
         */}
                
                                    
                  <div class="col-12">
                    <label for="inputEmail4" class="form-label">Appointment date</label>
                    <input type="date" class="form-control" id="inputEmail4" placeholder='Appointment date'  onChange={e=>setappointment_date(e.target.value)}/>
                    <p style={{color: "red"}}>{formErrors.appointment_date}</p>
                  </div>

                  <div class="col-12">
                    <label for="inputEmail4" class="form-label">Desises</label>
                    <input type="text" class="form-control" id="inputEmail4" placeholder='Desises'  onChange={e=>setdesises(e.target.value)}/>
                    <p style={{color: "red"}}>{formErrors.desises}</p>
                  </div>



                  <div class="text-center">
                    <button type="submit" class="btn btn-primary" onClick={submitHandle}>Submit</button>
                    <button  class="btn btn-danger">Reset</button>
                  </div>
      </form></div>
    </main>

  )
}
