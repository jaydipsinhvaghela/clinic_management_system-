//import React from 'react'
import react,{useState, useEffect} from 'react'
import axios from 'axios'
import{Link} from "react-router-dom";
import {Navigate, useNavigate} from "react-router-dom";
import "../../node_modules/datatables.net-dt/js/dataTables.dataTables";
import "../../node_modules/datatables.net-dt/css/jquery.dataTables.min.css";
import "../../node_modules/datatables.net-buttons/js/dataTables.buttons.js";
import "../../node_modules/datatables.net-buttons/js/buttons.colVis.js";
import "../../node_modules/datatables.net-buttons/js/buttons.flash.js";
import "../../node_modules/datatables.net-buttons/js/buttons.html5.js";
import "../../node_modules/datatables.net-buttons/js/buttons.print.js";
import "../../node_modules/datatables.net-responsive-bs5/css/responsive.bootstrap5.min.css";
import "../../node_modules/datatables.net-responsive-bs5/js/responsive.bootstrap5.min.js";
import $ from 'jquery'; 

export default function Manage_appointment2() {
  const[manage_appointments,setmanage_appointment2]=useState([])
  
  let i=1;
  useEffect(()=>{
    displaymanage_appointment();
  },[])


  const displaymanage_appointment=async()=>{
    try {
      const res=await axios.get("/Manage_appointment")
      setmanage_appointment2(res.data)
      console.log(res.data)
    } catch (error) {
      //alert(error)
    }
  }
  const handleDelete=async(e)=>{
    let text = "Are you sure?";
    
     if (window.confirm(text) == true) {
      try{
          const res = await axios.delete("/Manage_appointment/"+e);
          alert(res.data)
          window.location.reload()     
      }catch(err){
          console.log(err)
      } 
     }
   }
   const navigate=useNavigate();

   const appointment = ()=>{
           navigate("/Manage_appointment");
    }
   $(document).ready(function () {
    setTimeout(function(){
    $('#example').DataTable(
        {
            "bDestroy": true,
            pagingType: 'full_numbers',
            pageLength: 10,
            processing: true,
            dom: 'Bfrtip',
                buttons: ['copy', 'csv', 'print'
                ]
        }
    );
    } ,
    1000
    );
  });
  
  return (
    <main id="main" class="main">
      <h3>  Manage Appointment</h3>
      <div class="card">
        
      <table  class="table table-striped dt-responsive nowrap w-100">
        {/* <tr>
          <th>Appointment</th>
        </tr> */}
      </table>
      
                    <div class="col-12">
                        <button type='submit' class="btn btn-primary float-start mb-3 rounded-pill" onClick={appointment}><i class="bi bi-person-plus"></i><b>Add Appointment </b></button>
                    </div>
      
    <table id="example" class="table table-striped dt-responsive nowrap w-100">
    <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Action</th>
                    <th scope="col">Patient Name</th>
                    <th scope="col">Appointment time</th>
                    <th scope="col">Doctor Name</th>
                    <th scope="col">desises</th>
                 
                    <th scope="col">appointment date</th>
                    <th scope="col">Status</th>
                   
                  </tr>
                </thead>
                <tbody>
                {manage_appointments.map((Manage_appointment)=>
                   <tr>
                   <td>{i++}</td>
                   <td>
                   <button class="btn btn-primary"><Link to={`/Update_appointment/`+Manage_appointment.appointment_id} style={{color: 'white'}}>Edit</Link></button>
                    <button className="delete" class="btn btn-danger" onClick={()=>handleDelete(Manage_appointment.appointment_id)}>Delete</button>
                    </td>  
                   <td>{Manage_appointment.patinet_name}</td>  
                   <td>{Manage_appointment.appointment_time}</td>
                   <td>{Manage_appointment.name}</td>
                   <td>{Manage_appointment.desises}</td>
                                    
                   <td>{Manage_appointment.appointment_date}</td>
                   <td>{Manage_appointment.status}</td>  
                                         
                 </tr>
                )}     
                 
                 
                </tbody>
            </table>
            </div>
              </main>
  )
}
