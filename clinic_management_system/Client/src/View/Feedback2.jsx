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



export default function Feedback2() {
  const[feedbacks,setFeedbakck2]=useState([])
  
  let i=1;
  useEffect(()=>{
    displayfeedback();
  },[])


  const displayfeedback=async()=>{
    try {
      const res=await axios.get("/Feedback")
      setFeedbakck2(res.data)
      console.log(res.data)
    } catch (error) {
      //alert(error)
    }
  }
  const handleDelete=async(e)=>{
    let text = "Are you sure?";
    
     if (window.confirm(text) == true) {
      try{
          const res = await axios.delete("/Feedback/"+e);
          alert(res.data)
          window.location.reload()     
      }catch(err){
          console.log(err)
      } 
     }
   }
   const navigate=useNavigate();

   const feedback = ()=>{
           navigate("/Feedback");
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
      <h3>  Feedback</h3>
      <div class="card">
   <table  class="table table-striped dt-responsive nowrap w-100">
        {/* <tr>
          <th>Feedback</th>
        </tr> */}
      </table>
      
                    <div class="col-12">
                        <button type='submit' class="btn btn-primary float-start mb-3 rounded-pill" onClick={feedback}><i class="bi bi-person-plus"></i><b>Add Feedback </b></button>
                    </div>
    <table id="example" class="table table-striped dt-responsive nowrap w-100">
      <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Action</th>
                    <th scope="col">patient Name</th>
                    <th scope="col">description  </th>
                   
                   
                   
                  </tr>
                </thead>
                <tbody>
                {feedbacks.map((Feedback)=>
                   <tr>
                   <td>{i++}</td>
                   <td>
                    <button class="btn btn-primary"><Link to={`/Update_feedback/`+Feedback.feedback_id}style={{color: 'white'}}>Edit</Link></button>
                    <button className="delete" class="btn btn-danger" onClick={()=>handleDelete(Feedback.feedback_id)}>Delete</button>
                    </td>  
                   <td>{Feedback.name}</td>  
                   <td>{Feedback.description}</td>
                   
                  
                                  
                 </tr>
                )}     
                 
                </tbody>
              </table>
          
    
              </div>         
              </main>
  )
}
