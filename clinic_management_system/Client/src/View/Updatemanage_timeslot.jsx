//import React from 'react'
import React,{ useState,useEffect } from 'react'
import axios from "axios"
import { useLocation,useNavigate } from 'react-router-dom'

export default function Updatemanage_timeslot() {
    const[shift,setshift]=useState('')
      const[Dob,setdob]=useState('')
      const[status,setstatus]=useState('')
     // const[entry_by,setentry_by]=useState('')
      const location=useLocation();
      const navigate=useNavigate();
      const [formErrors, setFormErrors] = useState({});
      const doctor_id=location.pathname.split("/")[2]

      useEffect(()=>{
      // alert("hello")
         fatchtimeslot();
     },[doctor_id])
    const fatchtimeslot=async()=>{
        //alert()   
           try {
             
               const res= await axios.get("/Manage_timeslot/"+doctor_id)
            //console.log(res.data)
             setshift(res.data.shift)
             setdob(res.data.Dob)
             setstatus(res.data.status)
   
           } catch (error) {
               alert(error)
           }
       }
       const validate = () => {
        const errors = {};
        if (!shift) {
            errors.shift = "Shift is required";
        }
        if (!Dob) {
            errors.Dob = "Dob is required";
        }
        if (!status) {
            errors.status = "Status is required";
        }
        
        return errors;
    };

    const submitHandle=async(e)=>{
        e.preventDefault()
        setFormErrors(validate());
        if(shift && Dob && status )
        {
          //alert(shift)
        let res=""
        try{
            res = await axios.put("/Manage_timeslot/"+doctor_id,{
                shift,
                Dob,
                status
              });
            }
        catch(err)
        {
          alert(err)
        }
        alert(res.data)
        navigate("/DisplayManage_timeslot")
      }
    }
  return (
    <main id="main" class="main">
    
      <form class="row g-3">
                  <div class="col-12">
                  
                    <label for="inputNanme4" class="form-label">Shift</label>
                    <input type="text" class="form-control" id="inputpatient" placeholder='Shift' defaultValue={shift} onChange={e=>setshift(e.target.value)} />
                    <p style={{color: "red"}}>{formErrors.shift}</p>
                  </div>

                  
                  <div class="col-12">
                    <label for="inputEmail4" class="form-label">Dob</label>
                    <input type="email" class="form-control" id="inputapp_time" placeholder='Date-of-Birth' defaultValue={Dob}  onChange={e=>setdob(e.target.value)}/>
                    <p style={{color: "red"}}>{formErrors.Dob}</p>
                  </div>

                  <div class="col-12">
                    <label for="inputAdderss" class="form-label">Status</label>
                   <select name="status" id="status" class="form-control"  onChange={e=>setstatus(e.target.value)}>
                   
                   <option value={0}>Select Status</option>
                    <option value="1">Active</option>
                    <option value="2">InActive</option>
                    
                   </select>
                   <p style={{color: "red"}}>{formErrors.status}</p>
                  </div> 

                   {/* <div class="col-12">
                    <label for="inputAdderss" class="form-label">Entry_by</label>
                   <select name="entry_by" id="entry_by" class="form-control" defaultValue={entry_by} onChange={e=>setentry_by(e.target.value)}>
                    <option value="1">Active</option>
                    <option value="2">InActive</option>
                    
                   </select>
                   <p style={{color: "red"}}>{formErrors.entry_by}</p>
                  </div> */}

                  
                  <div class="text-center">
                    <button type="submit" class="btn btn-primary" onClick={submitHandle}>Submit</button>
                    <button  class="btn btn-danger">Reset</button>
                  </div>


            </form>
      </main>
    
  )
}
