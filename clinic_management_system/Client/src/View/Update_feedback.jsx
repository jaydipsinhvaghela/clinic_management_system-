//import React from 'react'
import React,{ useState,useEffect } from 'react'
import axios from "axios"
import { useLocation,useNavigate } from 'react-router-dom'


export default function Update_feedback() {
    const[patient_id,setpatient_id]=useState('')
    const[description,setdescription]=useState('')
    const[entry_by,setentry_by]=useState('')
    const Navigate=useNavigate();
    const location=useLocation();
    const [formErrors, setFormErrors] = useState({});
    const feedback_id=location.pathname.split("/")[2]

    useEffect(()=>{
        fatchfeedback();
    },[feedback_id])

    const fatchfeedback=async()=>{
        try {
            const res= await axios.get("/Feedback/"+feedback_id)

            setpatient_id(res.data.patient_id)
            setdescription(res.data.description)
            setentry_by(res.data.setentry_by)
          
        } catch (err) {
            alert(err)
        }
    }

    const validate = () => {
      const errors = {};
      if (!patient_id) {
          errors.patient_id = "Patient id is required";
      }
      if (!description) {
          errors.description = "Description is required";
      }
      if (!entry_by) {
          errors.entry_by = "Entry by is required";
      }
      return errors;
  };

        const submitHandle=async(e)=>{
            e.preventDefault()
            setFormErrors(validate());
            if(patient_id && description && entry_by)
        {
            let res=""
            try{
                res = await axios.put("/Feedback/"+feedback_id,{
                    patient_id,
                    description,
                    entry_by
                });
              }
            catch(err)
            {
              alert(err)
            }
            alert(res.data)
            Navigate("/feedback2")
          }
        } 
        
        const feedback = ()=>{
          Navigate("/Feedback2");
      } 
  return (
    <main id="main" class="main">
      <h3>Edit Feedback</h3>
     
    <div class="card">
    <div class="col-12">
                        <button type='submit' class="btn btn-primary float-start mb-3 rounded-pill" onClick={feedback}><i class="bi bi-person-plus"></i><b>Display Feedback</b></button>
                    </div>
      <form class="row g-3">
                  <div class="col-12">
                  
                    <label for="inputNanme4" class="form-label">Patient Id</label>
                    <input type="text" class="form-control" id="inputpatient" placeholder='Enter Patient Id' defaultValue={patient_id} onChange={e=>setpatient_id(e.target.value)}/>
                    <p style={{color: "red"}}>{formErrors.patient_id}</p>
                  </div>
                  <div class="col-12">
                    <label for="inputEmail4" class="form-label">Description</label>
                    <input type="text" class="form-control" id="inputdesc" placeholder='Enter Description' defaultValue={description} onChange={e=>setdescription(e.target.value)}/>
                    <p style={{color: "red"}}>{formErrors.description}</p>
                  </div>
                  <div class="col-12">
                    <label for="inputAdderss" class="form-label">Entry_by</label>
                   <select name="entry_by" id="entry_by" class="form-control" defaultValue={entry_by} onChange={e=>setentry_by(e.target.value)}>
                   {/* <option value={0}>Select Status</option> */}
                    <option value="1">Active</option>
                    <option value="2">InActive</option>
                    
                   </select>
                   <p style={{color: "red"}}>{formErrors.entry_by}</p>
                  </div>
                  


                  <div class="text-center">
                    <button type="submit" class="btn btn-primary" onClick={submitHandle}>Submit</button>
                    <button  class="btn btn-danger">Reset</button>
                  </div>

</form>
</div>
    </main>
  )
}
