//import React from 'react'
import react,{useState, useEffect} from 'react'
import axios from 'axios'
import{Link} from "react-router-dom";
export default function Display_appointment() {
  const[Manage_appointment,setmanage_appointment]=useState([])
  const [auth, setAuth] = useState(sessionStorage.getItem("user1"));
  const id=sessionStorage.getItem("user1")
  let i=1;
  useEffect(()=>{
    Displayappointment();
  },[])

  const Displayappointment=async()=>{
    try {
      const res=await axios.get("http://localhost:8801/backend/Manage_appointment/"+auth)
      setmanage_appointment(res.data)
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
  

  return (
    <main id="main" class="main">
      <table  class="table table-striped dt-responsive nowrap w-100"><br/><br/><br/><br/><br/><br/>
       
      </table>
      
    <table id="example" class="table table-striped dt-responsive nowrap w-100">
    <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Appointment date</th>
                    <th scope="col">Doctor Name</th>
                    <th scope="col">Appointment Time</th>
                    <th scope="col">Desises</th>
                    
                   
                  </tr>
                </thead>
                <tbody>
                {Manage_appointment.map((Display_appointment)=>
                   <tr>
                   <td>{i++}</td>
                   <td>{Display_appointment.appointment_date}</td>
                   <td>{Display_appointment.name}</td>
                   <td>{Display_appointment.appointment_time}</td>
                  <td>{Display_appointment.desises}</td>
                   
                                 
                 </tr>
                )}     
                 
                 
                </tbody>
            </table>
              </main>
  )
}
