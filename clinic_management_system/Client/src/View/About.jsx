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

export default function About() {
  const[abouts,setAbout]=useState([])
  
  let i=1;
  useEffect(()=>{
    displayAbout();
  },[])

  const displayAbout=async()=>{
    try {
      const res=await axios.get("/About_us")
      setAbout(res.data)
   //   console.log(res.data)
    } catch (error) {
      //alert(error)
    }
  }
  const handleDelete=async(e)=>{
    let text = "Are you sure?";
    
     if (window.confirm(text) == true) {
      try{
          const res = await axios.delete("/About_us/"+e);
          alert(res.data)
          window.location.reload()     
      }catch(err){
          console.log(err)
      } 
     }
   }
   const navigate=useNavigate();

     const about = ()=>{
            navigate("/About_us");
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
      <h3>About </h3>
      <div class="card">
      <table  class="table table-striped dt-responsive nowrap w-100"> </table>
  
                    <div class="col-12">
                        <button type='submit' class="btn btn-primary float-start mb-3 rounded-pill" onClick={about}><i class="bi bi-person-plus"></i><b> About Us</b></button>
                    </div>
        {/* <tr>
          <th>About</th>
        </tr> */}
     
      
    <table id="example" class="table table-striped dt-responsive nowrap w-100">
    
        <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Action</th>
                   
                    <th scope="col">page_content</th>
                    <th scope="col">page_img</th>
                  
                   </tr>
                </thead>
                <tbody>
                {abouts.map((About_us)=>
                   <tr>
                   <td>{i++}</td>
                   <td>
                    <button class="btn btn-primary"><Link to={`/Update_Aboutus/`+About_us.page_id}style={{color: 'white'}}>Edit</Link></button>
                      <button className="delete"  class="btn btn-danger" onClick={()=>handleDelete(About_us.page_id)}>Delete</button>
                    </td>
                   <td>{About_us.page_content}</td>  
                   <td>
                    <img height={100} width={100} src={"../upload/"+About_us.page_img} alt="No Image"></img>
                    </td>
                   <td>
                    
                    
                    </td>                 
                 </tr>
                )}     
                 
                 
                </tbody>
              </table>
              </div>
          
              </main>
             
  )
 
}
