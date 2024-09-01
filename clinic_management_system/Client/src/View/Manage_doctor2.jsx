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

//import Manage_doctor from './Manage_doctor';

export default function Manage_doctor2() {
  const[manage_doctors,setmanage_doctor]=useState([])
  let i=1;
  useEffect(()=>{
    displaymanage_doctorss();
  },[])


  const displaymanage_doctorss=async()=>{
    try {
      const res=await axios.get("/Manage_doctor")
      setmanage_doctor(res.data)
   //   console.log(res.data)
    } catch (error) {
      //alert(error)
    }
  }
  const handleDelete=async(e)=>{
    let text = "Are you sure?";
    
     if (window.confirm(text) == true) {
      try{
          const res = await axios.delete("/Manage_doctor/"+e);
          alert(res.data)
          window.location.reload()     
      }catch(err){
          console.log(err)
      } 
     }
   }
   const navigate=useNavigate();

   const doctor = ()=>{
           navigate("/Manage_doctor");
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
      <h3>  Doctors</h3>
      <div class="card">
      <table  class="table table-striped dt-responsive nowrap w-100">
        {/* <tr>
          <th>DOCTORS</th>
        </tr> */}
      </table>
      
                    <div class="col-12">
                        <button type='submit' class="btn btn-primary float-start mb-3 rounded-pill" onClick={doctor}><i class="bi bi-person-plus"></i><b>Add Doctor </b></button>
                    </div>
      
      
    <table id="example" class="table table-striped dt-responsive nowrap w-100">
    <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Action</th>
                 
                    <th scope="col">name</th>
                    <th scope="col">mobile_no</th>
                    <th scope="col">gender</th>
                    <th scope="col">address</th>
                    <th scope="col">dob</th>
                    <th scope="col">Status</th>
                    <th scope="col">email</th>
                    <th scope="col">specialist</th>
                    <th scope="col">degree</th>
                    </tr>
                </thead>
                <tbody>
                {manage_doctors.map((manage_doctor)=>
                   <tr>
                   <td>{i++}</td>
                   <td>
                   <button class="btn btn-primary"><Link to={`/Update_manage_doctor/`+manage_doctor.doctor_id}style={{color: 'white'}}>Edit</Link></button>
                    <button className="delete" class="btn btn-danger" onClick={()=>handleDelete(manage_doctor.doctor_id)}>Delete</button>
                    </td>
                   <td>{manage_doctor.name}</td>  
                   <td>{manage_doctor.mobile_no}</td>
                   <td>{manage_doctor.gender}</td>
                   <td>{manage_doctor.address}</td>
                   <td>{manage_doctor.dob}</td>
                   <td>{manage_doctor.status}</td>
                    <td>{manage_doctor.email}</td>
                    <td>{manage_doctor.specialist}</td>
                    <td>{manage_doctor.degree}</td>

                   
                   
                                    
                 </tr>
                )}     
                 
                 
                </tbody>

    
              </table>
              </div>
              </main>

  )
}
