import React ,{useState} from "react"
import axios from 'axios'
import { navigate,useNavigate } from "react-router-dom"

export default function Manage_timeslot() {
  const[shift,setshift]=useState('')
    const[Dob,setdob]=useState('')
    const[status,setstatus]=useState('')
   // const[entry_by,setentry_by]=useState('')
    const [formErrors, setFormErrors] = useState({});
    const navigate=useNavigate()

    const submitHandle=async(e)=>{
      e.preventDefault()
      setFormErrors(validate());
      if(shift && Dob && status)
    {

      let res=""
      try
      {
        res=await axios.post("/Manage_timeslot",{

        
          shift,
          Dob,
          status
          
        });
        
      }  catch (err) {
        alert(err)
      }
      alert(res.data)
      navigate("/DisplayManage_timeslot")
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

return (
    <main id="main" class="main">
    
      <form class="row g-3">
                  <div class="col-12">
                    <label for="inputAddress" class="form-label">Shift</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="Shift"  onChange={e=>setshift(e.target.value)}/>
                    <p style={{color: "red"}}>{formErrors.shift}</p>
            
                  </div>
                  <div class="col-12">
                    
                    <label for="inputNanme4" class="form-label">Dob</label>
                    <input type="text" class="form-control" id="inputNanme4" placeholder='Date-Of-Birth' onChange={e=>setdob(e.target.value)} />
                    <p style={{color: "red"}}>{formErrors.Dob}</p>
              
                  </div>

                   <div class="col-12">
                    <label for="inputAdderss" class="form-label">Status</label>
                   <select name="status" id="status" class="form-control" onChange={e=>setstatus(e.target.value)}>
                   
                   <option value={0}>Select Status</option>
                    <option value="1">Active</option>
                    <option value="2">InActive</option>
                    
                   </select>
                   <p style={{color: "red"}}>{formErrors.status}</p>
              
                  </div> 

                  {/* <div class="col-12">
                    <label for="inputAdderss" class="form-label">Entry_by</label>
                   <select name="status" id="status" class="form-control" onChange={e=>setentry_by(e.target.value)}>
                 
                   <option value={0}>Select Entry_by</option>     
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
