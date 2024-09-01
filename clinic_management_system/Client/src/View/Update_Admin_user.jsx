//import React from 'react'
import React,{ useState,useEffect } from 'react'
import axios from "axios"
import { useLocation,useNavigate } from 'react-router-dom'

export default function Update_Admin_user() {
      const[admin_name,setadmin_name]=useState('')
      const[email_id,setemail_id]=useState('')
      const[admin_phone,setadmin_phone]=useState('')
      const[password,setpassword]=useState('')
      const[status,setstatus]=useState(1)
      
      const navigate=useNavigate();
      const [formErrors, setFormErrors] = useState({});
      const location=useLocation();
      const admin_id=location.pathname.split("/")[2]

      useEffect(()=>{
        fatchAdmin();
    },[admin_id])

    const fatchAdmin=async()=>{
        try {
            const res= await axios.get("/Admin_users/"+admin_id)
         
          setadmin_name(res.data.admin_name)
          setemail_id(res.data.email_id)
          setadmin_phone(res.data.admin_phone)
          setpassword(res.data.password)
          setstatus(res.data.status)

        } catch (error) {
            alert(error)
        }
    }

    const validate = () => {
      const errors = {};
      const regex = /^[A-Za-z]+$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   
      if (!admin_name) {
          errors.admin_name = "Name is required";
      }else if(!regex.test(admin_name)){
        errors.admin_name="invalid Name"
      }
      if (!email_id) {
          errors.email_id = "Email-id is required";
      }else if(!emailRegex.test(email_id)){
        errors.email_id="invalid email Address"
      }
      if (!admin_phone) {
          errors.admin_phone = "Admin phone is required";
      }else if(admin_phone.length != 10){
        errors.admin_phone = "Mobile number must be 10 digit number";
      }    
      if (!password) {
          errors.password = "Password is required";
      }else if(password.length < 8){
        errors.password = "Please Enter minimum 8 digit password";
      }
      if (!status) {
        errors.status = "Status is required";
    }
    return errors;
  };
    const submitHandle=async(e)=>{
        e.preventDefault()
        setFormErrors(validate());
        const regex = /^[A-Za-z]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(admin_name && regex.test(admin_name) && email_id && emailRegex.test(email_id) && admin_phone && password && status && admin_phone.length>=10 && password.length>=8)
        {
        let res=""  
        try{
            res = await axios.put("/Admin_users/"+admin_id,{
                admin_name,
                email_id,
                admin_phone,
                password,
               status
              });
            }
        catch(err)
        {
          alert(err)
        }
        alert(res.data)
        navigate("/admin_user")
      }
    };
    const admin = ()=>{
      navigate("/Admin_user");
  }  

      return(
    <main id="main" class="main">
      <h3>Edit Admin</h3>
      <div class="card">
      <div class="col-12">
                        <button type='submit' class="btn btn-primary float-start mb-3 rounded-pill" onClick={admin}><i class="bi bi-person-plus"></i><b>Display Admin </b></button>
                    </div>
      
      <form class="row g-3">
                  <div class="col-12">
                   
                    <label for="inputNanme4" class="form-label">Admin Name</label>
                    <input type="text" class="form-control" id="inputNanme4" placeholder='Admin Name' defaultValue={admin_name} onChange={e=>setadmin_name(e.target.value)} />
                    <p style={{color: "red"}}>{formErrors.admin_name}</p>
                  </div>
                  <div class="col-12">
                    <label for="inputEmail4" class="form-label">Email Id</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder='Email Id' defaultValue={email_id}  onChange={e=>setemail_id(e.target.value)}/>
                    <p style={{color: "red"}}>{formErrors.email_id}</p>
                  </div>

                  <div class="col-12">
                    <label for="inputEmail4" class="form-label">Admin Phone</label>
                    <input type="text" class="form-control" id="text" placeholder='Admin Phone' defaultValue={admin_phone}  onChange={e=>setadmin_phone(e.target.value)}/>
                    <p style={{color: "red"}}>{formErrors.admin_phone}</p>
                  </div>

                  
                  <div class="col-12">
                    <label for="inputAddress" class="form-label">Password</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="Password" defaultValue={password} onChange={e=>setpassword(e.target.value)}/>
                    <p style={{color: "red"}}>{formErrors.password}</p>
                  </div>

                  <div class="col-12">
                    <label for="inputAdderss" class="form-label">Status</label>
                   <select name="status" id="status" class="form-control" defaultValue={status} onChange={e=>setstatus(e.target.value)}>
                      <option value={0}>Select Status</option>
                      <option value="1">Active</option>
                      <option value="2">InActive</option>
                    
                   </select>
                   <p style={{color: "red"}}>{formErrors.status}</p>
                  </div>
                  <div class="text-center">
                    <button type="submit" class="btn btn-primary" onClick={(submitHandle)}>Submit</button>
                    <button type="submit" class="btn btn-danger">Reset</button>
                  </div>
      </form>
      </div>
    </main>
    )
  
}
