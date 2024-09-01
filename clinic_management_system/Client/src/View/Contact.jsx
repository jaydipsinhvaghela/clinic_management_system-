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

//import Contact_us from './Contact_us';


export default function Contact() {
  const[Contacts,setContact]=useState([])
  let i=1;
  useEffect(()=>{
    displayContact();
  },[])


  const displayContact=async()=>{
    try {
      const res=await axios.get("/Contact_us")
      setContact(res.data)
   //   console.log(res.data)
    } catch (error) {
      //alert(error)
    }
  }
  const handleDelete=async(e)=>{
    let text = "Are you sure?";
    
     if (window.confirm(text) == true) {
      try{
          const res = await axios.delete("/Contact_us/"+e);
          alert(res.data)
          window.location.reload()     
      }catch(err){
         // console.log(err)
      } 
     }
   }
   const navigate=useNavigate();

     const contact = ()=>{
             navigate("/Contact_us");
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
      <b> <h3>  Contact  </h3></b>
       <div class="card">
   <table  class="table table-striped dt-responsive nowrap w-100">
        {/* <tr>
          <th>Contact Us</th>
        </tr> */}
      </table>
     
                    <div class="col-12">
                        <button type='submit' class="btn btn-primary float-start mb-3 rounded-pill" onClick={contact}><i class="bi bi-person-plus"></i><b>Contact </b></button>
                    </div>
    <table id="example" class="table table-striped dt-responsive nowrap w-100"> <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Action</th>

                    <th scope="col">email_id</th>
                    <th scope="col">phone_no1</th>
                    <th scope="col">phone_no2</th>
                    <th scope="col">address_1</th>
                    <th scope="col">address_2</th>
                    <th scope="col">whatsapp_no</th>
                  
                                   
                  </tr>
                </thead>
                <tbody>
                {Contacts.map((Contact)=>
                   <tr>
                   <td>{i++}</td>
                   <td>
                    <button class="btn btn-primary"><Link to={`/Update_contact_us/`+Contact.page_id}style={{color: 'white'}}>Edit</Link></button>
                    <button className="delete" class="btn btn-danger" onClick={()=>handleDelete(Contact.page_id)}>Delete</button>
                    </td>     
                   <td>{Contact.email_id}</td>  
                   <td>{Contact.phone_no1}</td>
                   <td>{Contact.phone_no2}</td>
                   <td>{Contact.address_1}</td>
                   <td>{Contact.address_2}</td>
                   <td>{Contact.whatsapp_no}</td>
                  

                            
                 </tr>
                )}     
                 
                 
                </tbody>
              </table>
              </div>
              </main>
  )
}