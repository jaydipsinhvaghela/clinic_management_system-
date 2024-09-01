
import axios from 'axios'
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
//import { Link } from 'react-router-dom'
export default function Changepass() {

  const[password,setPasword]=useState('')
  const[conpass,setcons]=useState('')
  
  
  const id=sessionStorage.getItem("user1")
  const [formErrors, setFormErrors] = useState({});
  const navigate=useNavigate();
  
  const SubmitHandle=async(e)=>{
    e.preventDefault();
    setFormErrors(validate());
    if(password  && conpass && password ==conpass && password.length >= 8 && conpass.length >=8)
    try{  
        const res=await axios.put("/Login/"+id,{
        password
      });
      alert(res.data);
//      alert(res.data);
      navigate("/") 

    }
    catch(err){
      alert(err);
    }
    //alert("Please enter 8 digit password");
  }
  const validate = () => {
    const errors = {};
    if (!password) {
        errors.password = "New Password is required";
     }
     if(!conpass)
    {
      errors.conpass = "Confirm password is required";
    }
    else if(password !=conpass)
    {
      errors.password = "New password and Confirm password are not same"
    }
  else
  {
      if(password.length < 8)
      {
          errors.password = "Enter Must Be 8 Character";
      }
      if(conpass.length < 8)
      {
          errors.conpass = "Enter Must Be 8 Character";
      }
  }
    return errors;
};
  
  return (
    <>
<div class='banner'>
      <div class="Auth-form-container">
      <form class="Auth-form">
        <div class="Auth-form-content">
          <h3 class="Auth-form-title">Change Password. </h3>
                  <div class="form-group mt-3">
            <label>New Password</label>
            <input
              type="password"
              class="form-control mt-1"
              placeholder="New password" onChange={e=>setPasword(e.target.value)}/>
              <p style={{color: "red"}}>{formErrors.password}</p>

          </div>
          <div class="form-group mt-3">
            <label>Conform Password</label>
            <input
              type="password"
              class="form-control mt-1"
              placeholder="Confirm password" onChange={e=>setcons(e.target.value)}/>
              <p style={{color: "red"}}>{formErrors.conpass}</p>

          </div>
          
          <div class="d-grid gap-2 mt-3">
            <button type="submit" class="btn btn-primary" onClick={SubmitHandle} >
              Submit
            </button>
          </div>
           </div>
      </form>
    </div>
    </div>
    </>
  )
}
