//import React from 'react'
import axios from 'axios'
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { Navigate,useNavigate } from "react-router-dom"

export default function Registration() {
const[name,setname]=useState('')
//const[email,setemail]=useState('')
const[mobile_no,setMobile]=useState('')
const[gender,setgender]=useState('')
const[address,setaddress]=useState('')
const[dob,setdob]=useState('')
//const [error,setError]=useState('')
const[desises,setdesises]=useState('')
const[password,setPwd]=useState('')
const[status,setstatus]=useState('')
const[entry_by,setentry]=useState('')
//const[,setPwd]=useState('')
const [formErrors, setFormErrors] = useState({});
 
const Navigate=useNavigate()

const submitHandle=async(e)=>{
  e.preventDefault()
  setFormErrors(validate());
      if(name && mobile_no && gender && address && dob && password)
      
//  setFormErrors(validate());
  {

  let res=""
  try
  {
    res=await axios.post("/Patient",{

      name,
      mobile_no,
      gender,
      address,
      dob,
      entry_by,
      status,
      desises,
      password
    });
    
  }  catch (err) {
    alert(err)
  }
  alert(res.data)
  Navigate("/")
  window.location.reload()

}
}
const validate = () => {
  const errors = {};
  if (!name) {
      errors.name = "Name is required";
  }
  if (!mobile_no) {
      errors.mobile_no = "Mobile number is required";
  } else if(mobile_no.length != 10){
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
 if (!password) {
    errors.password = "password is required";
  }
  return errors;
};


  return (
  <>
    <div class='banner'><br/><br/><br/><br/><br/><br/>
    <div class="Auth-form-container"><br/><br/>
    <form class="Auth-form">
      <div class="Auth-form-content">
        <h3 class="Auth-form-title"> Registration </h3>
        <div class="text-center">
          Not registered yet?{" "}
          <span class="link-primary">
            <Link to="/Login">Sign in</Link>
          </span>
          </div>
        <div class="form-group mt-3">
          <label>Name</label>
          <input
            type="name"
            class="form-control mt-1"
            placeholder="Enter Name" onChange={e=>setname(e.target.value)}/>
            <p style={{color: "red"}}>{formErrors.name}</p>
              
        </div>
        {/* <div class="form-group mt-3">
          <label>Email</label>
          <input
            type="email"
            class="form-control mt-1"
            placeholder="Enter E-mail" onChange={e=>setemail(e.target.value)}/>
        </div> */}
        <div class="form-group mt-3">
          <label>Mobile Number</label>
          <input
            type="name"
            class="form-control mt-1"
            placeholder="Enter Number" onChange={e=>setMobile(e.target.value)}/>
            <p style={{color: "red"}}>{formErrors.mobile_no}</p>
              
        </div>
        <div class="col-12">
                    <label for="" class="form-label">Gender:</label>

                    <input type="radio" name="gender" value="m"   onChange={e=>setgender(e.target.value)}/>Male
                    
                    <input type="radio" name="gender" value="f"   onChange={e=>setgender(e.target.value)}/>Female
                     <p style={{color: "red"}}>{formErrors.gender}</p>
              
                  </div>

        <div class="form-group mt-3">
          <label>Address</label>
          <input
            type="name"
            class="form-control mt-1"
            placeholder="Enter Address" onChange={e=>setaddress(e.target.value)}/>
            <p style={{color: "red"}}>{formErrors.address}</p>
              
        </div>
        <div class="form-group mt-3">
          <label>DOB</label>
          <input
            type="date"
            class="form-control mt-1"
            placeholder="Enter Date-Of-Birth" onChange={e=>setdob(e.target.value)}/>
            <p style={{color: "red"}}>{formErrors.dob}</p>
              
        </div>
        <div class="form-group mt-3">
          <label>Password</label>
          <input
            type="password"
            class="form-control mt-1"
            placeholder="Enter password" onChange={e=>setPwd(e.target.value)}/>
            <p style={{color: "red"}}>{formErrors.password}</p>
              
        </div>
       
        <div class="d-grid gap-2 mt-3">
        <button type="submit" className="btn btn-primary" onClick={submitHandle}>Submit</button>
        </div>
        <div>
         
        </div>
      </div>
    </form>
  </div>
  </div>
  </>
  )
}
