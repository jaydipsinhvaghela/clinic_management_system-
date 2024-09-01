//import React from 'react'
import React,{useState,useEffect} from 'react'
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

export default function Patient2() {
  const[patients,setpatient]=useState([])
  const [auth, setAuth] = useState(sessionStorage.getItem("user"));
  const id=sessionStorage.getItem("user")
  let i=1;
  useEffect(()=>{
    displaypatient();
  },[])

  const displaypatient=async()=>{
    try {
      const res=await axios.get("/Patient")
      setpatient(res.data)
   //   console.log(res.data)
    } catch (error) {
      //alert(error)
    }
  }
  const handleDelete=async(e)=>{
    let text = "Are you sure?";
    
     if (window.confirm(text) == true) {
      try{
          const res = await axios.delete("/patient/"+e);
          alert(res.data)
          window.location.reload()     
      }catch(err){
          console.log(err)                          
      } 
     }
   }
   const navigate=useNavigate();

   const patient = ()=>{
           navigate("/Patient");
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
      <h3>  Patient</h3>
      <div class="card">
    <table  class="table table-striped dt-responsive nowrap w-100">
        {/* <tr>
          <th>Patient</th>
        </tr> */}
      </table>
      
                    <div class="col-12">
                        <button type='submit' class="btn btn-primary float-start mb-3 rounded-pill" onClick={patient}><i class="bi bi-person-plus"></i><b>Patient </b></button>
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
                    {/* <th scope="col">status</th> */}
                    {/* <th scope="col">desises</th> */}
                    <th scope="col">password</th>

                   
                   </tr>
                </thead>
                <tbody>
                {patients.map((patient)=>
                   <tr>
                   <td>{i++}</td>
                   <td>
                    <button class="btn btn-primary"><Link to={`/Update_patient/`+patient.patient_id}style={{color: 'white'}}>Edit</Link></button>
                    <button className="delete" class="btn btn-danger" onClick={()=>handleDelete(patient.patient_id)}>Delete</button>

                    </td>     
                   <td>{patient.name}</td>  
                   <td>{patient.mobile_no}</td>
                   <td>{patient.gender}</td>
                   <td>{patient.address}</td>
                   <td>{patient.dob}</td>
                  {/* <td>{patient.status}</td> */}
                   {/* <td>{patient.desises}</td> */}
                   <td>{patient.password}</td>
                   
                                
                              
                 </tr>
                )}     
                 
                </tbody>
              </table>
              </div>
              </main>

  )
}
