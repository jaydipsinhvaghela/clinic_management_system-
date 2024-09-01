//import React from 'react'
import React,{ useState,useEffect } from 'react'
import axios from "axios"
import { useLocation,useNavigate } from 'react-router-dom'
import {Navigate} from "react-router-dom";
export default function Update_appointment() {
      const[patient_id,setpatient_id]=useState('')
      const[appointment_time,setappointment_time]=useState('')
      const[doctor_id,setdoctor_id]=useState('')
      const[status,setstatus]=useState('')
      const[entry_by,setentry_by]=useState('')
      const[appointment_date,setappointment_date]=useState('')
      const[desises,setdesises]=useState('')
      const location=useLocation();
      const navigate=useNavigate();
      const [formErrors, setFormErrors] = useState({});
      const appointment_id=location.pathname.split("/")[2]

      useEffect(()=>{
       // alert("hello")
        fatchappointment();
    },[appointment_id])

    const fatchappointment=async()=>{
     // alert()

        try {
          
            const res= await axios.get("/Manage_appointment/"+appointment_id)
        // console.log(res.data)
          setpatient_id(res.data.patient_id)
          setappointment_time(res.data.appointment_time)
          setdoctor_id(res.data.doctor_id)
          
          setdesises(res.data.desises)
          
          setentry_by(res.data.entry_by)
          setstatus(res.data.status)
          setappointment_date(res.data.appointment_date)
         
        } catch (error) {
            alert(error)
        }
    }
    // const navigate=useNavigate();

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
      if (!desises) {
        errors.desises = "Desises is required";
    }

      if (!appointment_date) {
          errors.appointment_date = "Appointment date is required";
      }
     
      return errors;
  };

    const submitHandle=async(e)=>{
        e.preventDefault()
        setFormErrors(validate());
        if(patient_id && appointment_time && doctor_id  && desises && appointment_date )
        //alert("handle click")
        {
        let res=""
        try{
            res = await axios.put("/Manage_appointment/"+appointment_id,{
                patient_id,
                
                doctor_id,
                desises,
               entry_by,
               status,
               appointment_date,
               appointment_time
               
              });
            }
        catch(err)
        {
          alert(err)
        }
        alert(res.data)
        navigate("/manage_appointment2")
      }
    }

  return (
    <main id="main" class="main">
      <h3> Edit Appointment</h3>
      
      <div class="card">
      
      <div class="col-12">
                        <button type='submit' class="btn btn-primary float-start mb-3 rounded-pill" onClick={appointment}><i class="bi bi-person-plus"></i><b>Display Appointment </b></button>
                    </div>
      <form class="row g-3">
                  <div class="col-12">
                  
                    <label for="inputNanme4" class="form-label">Patient Id</label>
                    <input type="text" class="form-control" id="inputpatient" placeholder='Patient Id' defaultValue={patient_id} onChange={e=>setpatient_id(e.target.value)} />
                    <p style={{color: "red"}}>{formErrors.patient_id}</p>
                  </div>

                  
                  <div class="col-12">
                    <label for="inputEmail4" class="form-label">Appointment Time</label>
                    <input type="time" class="form-control" id="inputapp_time" placeholder='appointment_time' defaultValue={appointment_time}  onChange={e=>setappointment_time(e.target.value)}/>
                    <p style={{color: "red"}}>{formErrors.appointment_time}</p>
                  </div>

                  <div class="col-12">
                    <label for="inputEmail4" class="form-label">Doctor Id</label>
                    <input type="text" class="form-control" id="inputdoctor_id" placeholder='Doctor Name' defaultValue={doctor_id}  onChange={e=>setdoctor_id(e.target.value)}/>
                    <p style={{color: "red"}}>{formErrors.doctor_id}</p>
                  </div>
                  <div class="col-12">
                    <label for="inputAdderss" class="form-label">Entry_by</label>
                   <select name="entry_by" id="entry_by" class="form-control" defaultValue={entry_by} onChange={e=>setentry_by(e.target.value)}>
                   <option value={0}>Select Entry_by</option>
                    <option value="1">Active</option>
                    <option value="2">InActive</option>
                    
                   </select>
                   <p style={{color: "red"}}>{formErrors.entry_by}</p>
                  </div>
                  
                  <div class="col-12">
                    <label for="inputAdderss" class="form-label">Status</label>
                   <select name="status" id="status" class="form-control" defaultValue={status} onChange={e=>setstatus(e.target.value)}>
                    <option value={0}>Select Status</option>
                    <option value="1">Active</option>
                    <option value="2">InActive</option>
                    
                   </select>
                   <p style={{color: "red"}}>{formErrors.status}</p>
                  </div>
                  <div class="col-12">
                    <label for="inputEmail4" class="form-label">Appointment_date</label>
                    <input type="date" class="form-control" id="inputEmail4" placeholder='Appointment Date' defaultValue={appointment_date}  onChange={e=>setappointment_date(e.target.value)}/>
                    <p style={{color: "red"}}>{formErrors.appointment_date}</p>
                  </div>

                  <div class="col-12">
                    <label for="inputEmail4" class="form-label">Desises</label>
                    <input type="text" class="form-control" id="inputEmail4" placeholder='Desises' defaultValue={desises}  onChange={e=>setdesises(e.target.value)}/>
                    <p style={{color: "red"}}>{formErrors.desises}</p>
                  </div>


                  <div class="text-center">
                    <button type="submit" class="btn btn-primary" onClick={submitHandle}>Submit</button>
                    <button  class="btn btn-danger">Reset</button>
                  </div>
      </form>
      </div>
    </main>

  )
}
