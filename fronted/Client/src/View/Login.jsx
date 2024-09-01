import React,{useState} from 'react'
import axios from 'axios'

///import React from 'react'
import { Link } from 'react-router-dom'
export default function Login() {
const[mobile_no,setMobile]=useState('')
const[password,setPwd]=useState('')
const [error,setError]=useState('')
const [formErrors, setFormErrors] = useState({});

const validate = () => {
  const errors = {};

  if (!mobile_no) {
      errors.mobile_no = "mobile number is required";
  }else if(mobile_no.length != 10){
    errors.mobile_no = "Mobile number must be 10 digit number";
  }
  if (!password) {
      errors.password = "password is required";
  }

return errors;

};
const submitHandle=async(e)=>{ 
  e.preventDefault()
  setFormErrors(validate());
  if(mobile_no && password)
  {
    let res=""
  }
  try {
   const res= await axios.get("/Login/", {
     params: {
       mobile_no: mobile_no,
       password: password
     }
   });
   
//   setUser1(res.data)        
   console.log(res.data)  
   if(res.data>0)
   {          
     setError("")
     sessionStorage.setItem("user1",res.data)       
     
     window.location.reload()
   }
   else
   {
     setError("Invalid UserId/Password")
   }
  
  } catch (error) {
         
  }
  
}
  return (
<>
        
<div class='banner'>
      <div class="Auth-form-container">
      <form class="Auth-form">
        <div class="Auth-form-content">
          <h3 class="Auth-form-title"> Login. </h3>
          <div class="text-center">
            Not registered yet?{" "}
            <span class="link-primary">
              <Link to="/Registration">Sign Up</Link>
            </span>
          </div>
         
          <div class="form-group mt-3">
            <label>Mobile Number</label>
            <input
              type="text"
              class="form-control mt-1"
              placeholder="Enter mobile_no" onChange={e=>setMobile(e.target.value)}/>
              <p style={{color: "red"}}>{formErrors.mobile_no}</p>
        
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
            <button type="submit" className="btn btn-primary" onClick={submitHandle}>Login</button>                                
            <p style={{color:'red'}}>{error}</p>
                 
              
          </div>
          <div class="text-center">
            Forgate?{" "}
            <span class="link-primary">
              <Link to="/Forgatepass">Password</Link>
            </span>
          </div>
          </div>
      </form>
    </div>
    </div>
    </>



  )
}
