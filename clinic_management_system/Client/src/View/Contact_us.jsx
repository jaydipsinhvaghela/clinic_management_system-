import React,{useState} from "react"
import axios from 'axios'
import { Navigate,useNavigate } from 'react-router-dom'

export default function Contact_us() {
  
    const[email_id,setemail_id]=useState('')
    const[phone_no1,setphone_no1]=useState('')
    const[phone_no2,setphone_no2]=useState('')
    const[address_1,setaddress_1]=useState('')
    const[address_2,setaddress_2]=useState('')
    const[whatsapp_no,setwhatsapp_no]=useState('')
    const [formErrors, setFormErrors] = useState({});
    const Navigate=useNavigate();
    const navigate=useNavigate();

    const submitHandle=async(e)=>{
      e.preventDefault()
      
      setFormErrors(validate());
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(email_id && emailRegex.test(email_id) && phone_no1 && phone_no2 && address_1 && address_2 && whatsapp_no && phone_no1.length>=10 && phone_no2.length>=10)
      {
        let res=""
      try 
      {
          res=await axios.post("/Contact_us/",{
            email_id,
            phone_no1,
            phone_no2,
            address_1,
            address_2,
            whatsapp_no
          });  
      } catch (err)
      {
        alert(err)
      }
      alert(res.data)
      Navigate("/Contact")
    }
  }
  const contact = ()=>{
    navigate("/Contact");
}
    const validate = () => {
      const errors = {};
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email_id) {
          errors.email_id = "Email is required";
      }else if(!emailRegex.test(email_id)){
        errors.email_id="invalid email Address"
      }
      if (!phone_no1) {
          errors.phone_no1 = "Please enter phone_no1";
      }else if(phone_no1.length != 10){
        errors.phone_no1 = "Mobile number must be 10 digit number";
      }
      if (!phone_no2) {
          errors.phone_no2 = "Please enter phone_no2";
      }else if(phone_no2.length != 10){
        errors.phone_no2 = "Mobile number must be 10 digit number";
      }
      if (!address_1) {
          errors.address_1 = "Address1 is required";
      }
      if (!address_2) {
        errors.address_2 = "Address2 is required";
      }
      if (!whatsapp_no) {
          errors.whatsapp_no = "whatsapp number is required";
      }
      return errors;
    };
    
  return (
    <main id="main" class="main">
      <h3>Contact</h3>
      <div class="card">
      <table  class="table table-striped dt-responsive nowrap w-100">
        {/* <tr>
          <th>Contact Us</th>
        </tr> */}
      </table>
     
                    <div class="col-12">
                        <button type='submit' class="btn btn-primary float-start mb-3 rounded-pill" onClick={contact}><i class="bi bi-person-plus"></i><b>Dispaly Contact </b></button>
                    </div>
      
    
      <form class="row g-3">
                  <div class="col-12">
          
                    <label for="inputNanme4" class="form-label">Email Id</label>
                    <input type="text" class="form-control" id="inputNanme4" placeholder='Enter Email Id' onChange={e=>setemail_id(e.target.value)} />
                    <p style={{color: "red"}}>{formErrors.email_id}</p>
                  </div>
                  <div class="col-12">
                    <label for="inputEmail4" class="form-label">Phone No1</label>
                    <input type="text" class="form-control" id="inputphone1" placeholder='Enter Phone No1'  onChange={e=>setphone_no1(e.target.value)}/>
                    <p style={{color: "red"}}>{formErrors.phone_no1}</p>
                  </div>

                  <div class="col-12">
                    <label for="inputEmail4" class="form-label">Phone No2</label>
                    <input type="text" class="form-control" id="inputphone2" placeholder='Enter Phone No2'  onChange={e=>setphone_no2(e.target.value)}/>
                    <p style={{color: "red"}}>{formErrors.phone_no2}</p>
                  </div>

                  
                  <div class="col-12">
                    <label for="inputAddress" class="form-label">Address1</label>
                    <input type="text" class="form-control" id="inputAddress1" placeholder="Enter Address1"  onChange={e=>setaddress_1(e.target.value)}/>
                    <p style={{color: "red"}}>{formErrors.address_1}</p>
                  </div>

                
                  <div class="col-12">
                    <label for="inputAddress" class="form-label">Address2</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Enter Address2"  onChange={e=>setaddress_2(e.target.value)}/>
                    <p style={{color: "red"}}>{formErrors.address_2}</p>
                  </div>

                
                  <div class="col-12">
                    <label for="inputAddress" class="form-label">whatsapp No</label>
                    <input type="text" class="form-control" id="inputwp" placeholder="Enter Whatsapp No"  onChange={e=>setwhatsapp_no(e.target.value)}/>
                    <p style={{color: "red"}}>{formErrors.whatsapp_no}</p>
                  </div>

                  <div class="text-center">
                    <button type="submit" class="btn btn-primary" onClick={submitHandle}>Submit</button>
                    <button class="btn btn-danger">Reset</button>
                  </div>
                  
      </form></div>
    </main>
  )
}
