import axios from 'axios'
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
//import React from 'react'
//import { Link } from 'react-router-dom'
export default function Login(){
const[admin_phone,setMobile]=useState('')
const[password,setPwd]=useState('')
const [error,setError]=useState('')
const navigate=useNavigate();

const submitHandle=async(e)=>{ 
  e.preventDefault()
  try {
   const res= await axios.get("/Login/", {
     params: {
       admin_phone: admin_phone,
       password: password
     }
   })  
//   setUser1(res.data)        
   console.log(res.data)  
   if(res.data>0)
   {          
     setError("")
     sessionStorage.setItem("user",res.data)       
     
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
         
          <div class="form-group mt-3">
            <label>Mobile</label>
            <input
              type="text"
              class="form-control mt-1"
              placeholder="Enter mobile" onChange={e=>setMobile(e.target.value)}/>
          </div>
          <div class="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              class="form-control mt-1"
              placeholder="Enter password" onChange={e=>setPwd(e.target.value)}/>
          </div>
          <div class="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-primary" onClick={submitHandle}>Login</button>                                
                    <p style={{color:'red'}}>{error}</p>
                 </div>
         
          </div>
      </form>
    </div>
    </div>
    </>



  )
}
