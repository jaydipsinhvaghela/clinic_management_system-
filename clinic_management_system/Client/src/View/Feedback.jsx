import React,{ useState,useEffect } from "react"
import axios from "axios"
import { Navigate, useNavigate } from "react-router-dom"

export default function Feedback() {
  
    const[patient_id,setpatient_id]=useState('')
    const[description,setdescription]=useState('')
    const[entry_by,setentry_by]=useState('')
    const[feedbacks,setfeedbacks]=useState([]);
    const [formErrors, setFormErrors] = useState({});
    const Navigate=useNavigate()
    
    useEffect(()=>{
      fatchfeedbacks()
    },[])

    const fatchfeedbacks=async()=>{
      try {
        const res=await axios.get("/Feedback")
        setfeedbacks(res.data)
     //   console.log(res.data)
      } catch (error) {
        //alert(error)
      }
    }
    
    const submitHandle=async(e)=>{
      e.preventDefault()
      setFormErrors(validate());
      const regex = /^[A-Za-z]+$/;
      if(patient_id &&regex.test(patient_id) && description)
  {
      let res=""
      try 
      {
        res=await axios.post("/Feedback/",{
          patient_id,
          description,
          entry_by
        });
      } catch (err)
      {
          alert(err)
      }
      alert(res.data)
      Navigate("/feedback2")
   }
 }
 const navigate=useNavigate();

 const feedback = ()=>{
         navigate("/Feedback2");
  }
    const validate = () => {
      const errors = {};
      const regex = /^[A-Za-z]+$/;
      if (!patient_id) {
          errors.patient_id = "Patient Name is required";
      }else if(!regex.test(patient_id)){
        errors.patient_id="invalid Name"
      }
      if (!description) {
          errors.description = "Description is required";
      }
      return errors;
  };
    
  return (
    <main id="main" class="main">
      <h3>Feedback</h3>
      <div class="card">
      <table  class="table table-striped dt-responsive nowrap w-100">
        {/* <tr>
          <th>Feedback</th>
        </tr> */}
      </table>
      
                    <div class="col-12">
                        <button type='submit' class="btn btn-primary float-start mb-3 rounded-pill" onClick={feedback}><i class="bi bi-person-plus"></i><b>Display Feedback </b></button>
                    </div>
      
      <form class="row g-3">
      <div class="col-12">
                    <label for="inputEmail4" class="form-label">Patient Name</label>
                    <input type="text" class="form-control" id="inputdesc" placeholder='Enter Name'  onChange={e=>setpatient_id(e.target.value)}/>
                    <p style={{color: "red"}}>{formErrors.patient_id}</p>
                  </div>
                  
                  {/* <div class="col-12">
                   */}
                    {/* <label for="inputNanme4" class="form-label">Patient Id</label>
                    <select name="entry_by" id="entry_by" class="form-control" onChange={e=>setpatient_id(e.target.value)}>
                   
                   <option value={0}>Select Patient Name</option>
                   {feedbacks.map(feedbacks=>
                      <option value={feedbacks.feedback_id}>{feedbacks.patient_id}</option>
                   )}    
                   </select>
                    <p style={{color: "red"}}>{formErrors.patient_id}</p>
                  </div>	
                   */}
                  <div class="col-12">
                    <label for="inputEmail4" class="form-label">Description</label>
                    <input type="text" class="form-control" id="inputdesc" placeholder='Enter Description'  onChange={e=>setdescription(e.target.value)}/>
                    <p style={{color: "red"}}>{formErrors.description}</p>
                  </div>
                  {/* <div class="col-12">
                    <label for="inputAdderss" class="form-label">Entry_by</label>
                   <select name="entry_by" id="entry_by" class="form-control" onChange={e=>setentry_by(e.target.value)}>
                   
                   <option value={0}>Select Status</option>
                    <option value="1">Active</option>
                    <option value="2">InActive</option>
                    
                   </select>
                     <p style={{color: "red"}}>{formErrors.entry_by}</p>
                  </div>
                   */}


                  <div class="text-center">
                    <button type="submit" class="btn btn-primary" onClick={submitHandle}>Submit</button>
                    <button  class="btn btn-danger">Reset</button>
                  </div>

</form></div>
    </main>
  )
}

