//import React from 'react'
import React,{ useState,useEffect } from 'react'
import axios from "axios"
import { useLocation,useNavigate } from 'react-router-dom'

export default function Update_patient() {
    const[name,setname]=useState('')
    const[mobile_no,setmobile_no]=useState('')
    const[gender,setgender]=useState('')
    const[address,setaddress]=useState('')
    const[dob,setdob]=useState('')
    const[entry_by,setentry_by]=useState('')
    const[status,setstatus]=useState('')
    const[desises,setdesises]=useState('')
    const location=useLocation();
    const Navigate=useNavigate();
    const [formErrors, setFormErrors] = useState({});
    const patient_id=location.pathname.split("/")[2]

    useEffect(()=>{
        fetchpatient();
    },[patient_id])

    const fetchpatient=async()=>{
        try {
            const res= await axios.get("/Patient/"+patient_id) 

            setname(res.data.name)
            setmobile_no(res.data.mobile_no)
            setgender(res.data.gender)
            setaddress(res.data.address)
            setdob(res.data.dob)
            setentry_by(res.data.entry_by)
            setstatus(res.data.status)
            setdesises(res.data.desises)
            
         
        } catch (error) {
            alert(error)
        }          
    }

    const validate = () => {
      const errors = {};
      const regex = /^[A-Za-z]+$/;
      if (!name) {
          errors.name = "Name is required";
      }else if(!regex.test(name)){
        errors.name="invalid Patient Name"
      }
      if (!mobile_no) {
          errors.mobile_no = "Mobile number is required";
      }else if(mobile_no.length != 10){
        errors.mobile_no = "Mobile number must be 10 digit number";
      }    
      if (!gender) {
          errors.gender = "Gender is required";
      }
      if (!address) {
          errors.address = "Address is required";
      }
      if (!dob) {
          errors.dob = "Dob is required";
      }
      if (!entry_by) {
          errors.entry_by = "Entry-by is required";
      }
      if (!status) {
        errors.status = "Status is required";
      }
      if (!desises) {
        errors.desises = "desises is required";
      }
      return errors;
};

    const submitHandle=async(e)=>{
        e.preventDefault()
        setFormErrors(validate());
        const regex = /^[A-Za-z]+$/;
        if(name && regex.test(name) && mobile_no&& mobile_no.length>=10 && gender && address && dob && entry_by && status && desises)
      {
        let res=""
        try{
            res = await axios.put("/Patient/"+patient_id,{
             name,
             mobile_no,
             gender,
             address,
             dob,
             entry_by,
             status,
             desises
            });
          }
        catch(err)
        {
          alert(err)
        }
        alert(res.data)
        Navigate("/patient2")
      }
    }
    const patient = ()=>{
      Navigate("/Patient2");
  } 
  return (
    <main id="main" class="main">
      <h3>Edit Patient</h3>
      <div class="card">
                    <div class="col-12">
                        <button type='submit' class="btn btn-primary float-start mb-3 rounded-pill" onClick={patient}><i class="bi bi-person-plus"></i><b>Display Patient</b></button>
                    </div>
    
    <form class="row g-3">
                <div class="col-12">
                  
                  <label for="inputNanme4" class="form-label">Name</label>
                  <input type="text" class="form-control" id="inputNanme4" placeholder='Enter Name' defaultValue={name} onChange={e=>setname(e.target.value)} />
                  <p style={{color: "red"}}>{formErrors.name}</p>
                </div>
                <div class="col-12">
                  <label for="inputAddress" class="form-label">Mobile No</label>
                  <input type="text" class="form-control" id="inputAddress" placeholder="Enter Mobile No"  defaultValue={mobile_no} onChange={e=>setmobile_no(e.target.value)}/>
                  <p style={{color: "red"}}>{formErrors.mobile_no}</p>
                </div>

                <div class="col-12">
                  <label for="inputEmail4" class="form-label">Gender:</label>
                  <input type="radio" name="gender" value="m" defaultValue={gender}   onChange={e=>setgender(e.target.value)}/>Male
                  
                  <input type="radio" name="gender" value="f" defaultValue={gender}   onChange={e=>setgender(e.target.value)}/>Female
                  <p style={{color: "red"}}>{formErrors.gender}</p>
                  
                </div>

                <div class="col-12">
                  <label for="inputEmail4" class="form-label">Address</label>
                  <input type="email" class="form-control" id="inputEmail4" placeholder='Enter Address' defaultValue={address}  onChange={e=>setaddress(e.target.value)}/>
                  <p style={{color: "red"}}>{formErrors.address}</p>
                </div>

                
                <div class="col-12">
                  <label for="inputAddress" class="form-label">Dob</label>
                  <input type="date" class="form-control" id="inputAddress" placeholder="Enter Date-of-Birth" defaultValue={dob}  onChange={e=>setdob(e.target.value)}/>
                  <p style={{color: "red"}}>{formErrors.dob}</p>
                </div>
                <div class="col-12">
                  <label for="inputAdderss" class="form-label">Entry_by</label>
                 <select name="status" id="status" class="form-control" defaultValue={entry_by} onChange={e=>setentry_by(e.target.value)}>
                  
                 {/* <option value={0}>Select Entry_by</option> */}
                  <option value="1">Active</option>
                  <option value="2">InActive</option>
                  
                  
                 </select>
                 <p style={{color: "red"}}>{formErrors.entry_by}</p>
                </div>
                
                <div class="col-12">
                  <label for="inputAdderss" class="form-label">Status</label>
                 <select name="status" id="status" class="form-control" defaultValue={status} onChange={e=>setstatus(e.target.value)}>
                  <option value="1">Active</option>
                  <option value="2">InActive</option>
                  
                 </select>
                 <p style={{color: "red"}}>{formErrors.status}</p>
                </div>
                                  
                 <div class="col-12">
                  <label for="inputAddress" class="form-label">Desises</label>
                  <input type="text" class="form-control" id="inputAddress" placeholder="Enter Desises" defaultValue={desises}  onChange={e=>setdesises(e.target.value)}/>
                  <p style={{color: "red"}}>{formErrors.desises}</p>
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
