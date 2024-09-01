import React,{useState} from 'react'
import axios from "axios"
import {useNavigate} from 'react-router-dom'

export default function Admin_users() {
      const[admin_name,setadmin_name]=useState('')
      const[email_id,setemail_id]=useState('')
      const[admin_phone,setadmin_phone]=useState('')
      const[password,setpassword]=useState('')
      const[status,setstatus]=useState('')
      const [formErrors, setFormErrors] = useState({});
      //const [value, setValue] = useState('');
      
      const navigate=useNavigate();

      const submitHandle=async(e)=>{
        e.preventDefault()
        setFormErrors(validate());
        // const keyCode = e.keyCode || e.which;
        // const keyValue = String.fromCharCode(keyCode);
        // if (/[^0-9]/.test(keyValue)) {
        //   e.preventDefault();
        // }
    

        const regex = /^[A-Za-z]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(admin_name && regex.test(admin_name) && emailRegex.test(email_id) && email_id && admin_phone &&status&& password && password.length>8 && admin_phone.length>=10  )
       {
        let res=""
        
          try {
            res =await axios.post("/Admin_users/",{
              admin_name,
              email_id,
              admin_phone,
              password,
              status
            
            });
            
          } catch (err)
          {
            alert(err)
          }
          alert(res.data)
        navigate("/admin_user")
       }
      }

      const admin = ()=>{
        navigate("/Admin_user");
 }

      const validate = (values) => {
        const errors = {};
        const regex = /^[A-Za-z]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (/[^0-9]/.test(admin_phone)) {
        //  e.preventDefault();
        }
     
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
        }//else if(/[^0-9]/.test(admin_phone)){
        //   errors.admin_phone="number notfound"
        // }
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

  return (
    <main id="main" class="main">
      <h3>Admin</h3>
      <div class="card">
      <table  class="table table-striped dt-responsive nowrap w-100">
        {/* <tr>
          <th>Admin User</th>
        </tr> */}
      </table>

      <div class="col-12">
                <button type='submit' class="btn btn-primary float-start mb-3 rounded-pill" onClick={admin}><i class="bi bi-person-plus"></i><b> Admin </b></button>
           </div>

      <form class="row g-3">
                  <div class="col-12">
                   
                    <label for="inputNanme4" class="form-label">Admin Name</label>
                    <input type="text" class="form-control" id="inputNanme4" placeholder='Admin Name' onChange={e=>setadmin_name(e.target.value)} />
                    <p style={{color: "red"}}>{formErrors.admin_name}</p>
        
                  </div>
                  <div class="col-12">
                    <label for="inputEmail4" class="form-label">Email Id</label>
                    <input type="Email" value={email_id} class="form-control" id="inputEmail" placeholder='Email Id'  onChange={e=>setemail_id(e.target.value)}/>
                    <p style={{color: "red"}}>{formErrors.email_id}</p>
                 
                  </div>

                  <div class="col-12">
                    <label for="inputEmail4" class="form-label">Admin Phone</label>
                    <input type="text" class="form-control" id="text" placeholder='Admin Phone'  onChange={e=>setadmin_phone(e.target.value)}/>
                    <p style={{color: "red"}}>{formErrors.admin_phone}</p>
                  
                  </div>

                  
                  <div class="col-12">
                    <label for="inputAddress" class="form-label">Password</label>
                    <input type="password" class="form-control" id="inputAddress" placeholder="Password"  onChange={e=>setpassword(e.target.value)}/>
                    <p style={{color: "red"}}>{formErrors.password}</p>
                  
                  </div>
                  <div class="col-12">
                    <label for="inputAdderss" class="form-label">Status</label>
                   <select name="entry_by" id="entry_by" class="form-control" onChange={e=>setstatus(e.target.value)}>
                   
                   <option value={0}>Select status</option>   
                    <option value="1">Active</option>
                    <option value="2">InActive</option>
                    
                   </select>
                   <p style={{color: "red"}}>{formErrors.status}</p>
                   
                  </div>

                  
                  <div class="text-center">
                    <button type="submit" class="btn btn-primary" onClick={(submitHandle)}>Submit</button>
                    <button class="btn btn-danger">Reset</button>
                  </div>
      </form></div>
    </main>

  )
}
