//import React from 'react'
import react,{useState, useEffect} from 'react'
import axios from 'axios'
import{Link} from "react-router-dom";
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



export default function DisplayManage_timeslot() {
    const[timeslot,settimeslot]=useState([])
  let i=1;
  useEffect(()=>{
    displayManage_timeslot();
  },[])

  const displayManage_timeslot=async()=>{
    try {
      const res=await axios.get("/Manage_timeslot")
      settimeslot(res.data)
   //   console.log(res.data)
    } catch (error) {
      alert(error)
    }
  }

  const handleDelete=async(e)=>{
    let text = "Are you sure?";
    
     if (window.confirm(text) == true) {
      try{
          const res = await axios.delete("/Manage_timeslot/"+e);
          alert(res.data)
          window.location.reload()     
      }catch(err){
          //console.log(err)
      } 
     }
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
    <table  class="table table-striped dt-responsive nowrap w-100">
        <tr>
          <th>Timeslot</th>
        </tr>
      </table>
      
    <table id="example" class="table table-striped dt-responsive nowrap w-100">
      <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Shift</th>
                    <th scope="col">Dob </th>
                    <th scope="col">Status</th> 
                    
                    
                    <th scope="col">Action</th>
                 </tr>
                </thead>
                <tbody>
                {timeslot.map((Manage_timeslot)=>
                   <tr> 
                   <td>{i++}</td>
                   <td>{Manage_timeslot.shift}</td>  
                   <td>{Manage_timeslot.date}</td>
                   <td>{Manage_timeslot.status}</td> 
                   
                <td>
                   <button class="btn btn-primary"><Link to={`/Updatemanage_timeslot/`+Manage_timeslot.doctor_id}>Edit</Link></button>
                    <button class="btn btn-danger"className="delete" onClick={()=>handleDelete(Manage_timeslot.doctor_id)}>Delete</button>
                </td>                 
                 </tr>
                )}     
                                  
                </tbody>
              </table>
          
              </main> 
  )
}
