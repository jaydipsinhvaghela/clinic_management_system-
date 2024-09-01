import React,{ useState } from 'react'
import axios from 'axios'
import { Navigate,useNavigate } from 'react-router-dom'

export default function Manage_doctor() {
    const[name,setName]=useState('')
    const[mobile_no,setMobile]=useState('')
    const[gender,setgender]=useState('')
    const[address,setaddress]=useState('')
    const[dob,setdob]=useState('')
    const[entry_by,setentry_by]=useState('')
    const[status,setstatus]=useState('')
    const[email,setemail]=useState('')
    const[specialist,setSpecialist]=useState('')
    const[degree,setdegree]=useState('')
    const [formErrors, setFormErrors] = useState({});
    const Navigate=useNavigate()


    const submitHandle=async(e)=>{
      e.preventDefault()
      setFormErrors(validate());
      const regex = /^[A-Za-z]+$/;
       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(name &&regex.test(name) &&  mobile_no && gender && address && dob   && email && emailRegex.test(email)  && specialist && degree && mobile_no.length>=10)
    {
      let res=""
      try 
      {
        res = await axios.post("/Manage_doctor/",{
          name,
          mobile_no,
          gender,
          address,
          dob,
          entry_by,
          status,
          email,
          specialist,
          degree,
           
        });
      } catch (err) {
          alert(err)
      }
      alert(res.data)
      Navigate("/manage_doctor2")
  }
}
const navigate=useNavigate();

   const doctor = ()=>{
           navigate("/Manage_doctor2");
    }
    const validate = () => {
      const errors = {};
       const regex = /^[A-Za-z]+$/;
       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!name) {
          errors.name = "Name is required";
      }else if(!regex.test(name)){
        errors.name="invalid Doctor Name"
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
     
      // if (!status) {
      //   errors.status = "Status is required";
      // }
      if (!email) {
        errors.email = "Email-id is required";
      }else if(!emailRegex.test(email)){
        errors.email="invalid email Address"
      }
      if (!specialist) {
        errors.specialist = "specialist is required";
      }
      if (!degree) {
        errors.degree = "degree is required";
      }
      return errors;
  };
  return (
    <main id="main" class="main">
      <h3>Doctor</h3>
        <div class="card">
        <table  class="table table-striped dt-responsive nowrap w-100">
        {/* <tr>
          <th>DOCTORS</th>
        </tr> */}
      </table>
      
                    <div class="col-12">
                        <button type='submit' class="btn btn-primary float-start mb-3 rounded-pill" onClick={doctor}><i class="bi bi-person-plus"></i><b>Display Doctor </b></button>
                    </div>
       
    
      <form class="row g-3">
                  <div class="col-12">
                    
                    <label for="inputNanme4" class="form-label">Name</label>
                    <input type="text" class="form-control" id="inputNanme4" placeholder='Enter Name' onChange={e=>setName(e.target.value)} />
                    <p style={{color: "red"}}>{formErrors.name}</p>
           
                  </div>
                  <div class="col-12">
                    <label for="inputAddress" class="form-label">Mobile No</label>
                    <input type="text" class="form-control" id="inputmobileno" placeholder="Enter Mobile No"  onChange={e=>setMobile(e.target.value)}/>
                    <p style={{color: "red"}}>{formErrors.mobile_no}</p>
           
                  </div>

                  <div class="col-12">
                    <label for="inputEmail4" class="form-label">Gender:</label>
                    <input type="radio"  name="gender" value="m" onChange={e=>setgender(e.target.value)}/>Male
                    <input type="radio"  name="gender" value="f"  onChange={e=>setgender(e.target.value)}/>Female
                    <p style={{color: "red"}}>{formErrors.gender}</p>
           
                  </div>

                  <div class="col-12">
                    <label for="inputEmail4" class="form-label">Address</label>
                    <input type="email" class="form-control" id="inputaddress" placeholder='Enter Address'  onChange={e=>setaddress(e.target.value)}/>
                    <p style={{color: "red"}}>{formErrors.address}</p>
           
                  </div>

                  
                  <div class="col-12">
                    <label for="inputAddress" class="form-label">Dob</label>
                    <input type="date" class="form-control" id="inputdob" placeholder="Enter Date-of-Birth"  onChange={e=>setdob(e.target.value)}/>
                    <p style={{color: "red"}}>{formErrors.dob}</p>
           
                  </div>
                  {/* <div class="col-12">
                    <label for="inputEmail4" class="form-label">entry_by</label>
                    <input type="email" class="form-control" id="inputaddress" placeholder='Enter entry'  onChange={e=>setentry_by(e.target.value)}/>
                    <p style={{color: "red"}}>{formErrors.entry_by}</p>
           
                  </div>
                  <div6 class="col-12">
                    <label for="inputEmail4" class="form-label">status</label>
                    <input type="email" class="form-control" id="inputaddress" placeholder='Enter status'  onChange={e=>setstatus(e.target.value)}/>
                    <p style={{color: "red"}}>{formErrors.status}</p>
           
                  </div6> */}

                  {/* <div class="col-12">
                    <label for="inputAdderss" class="form-label">Entry_by</label>
                   <select name="entry_by" id="entry_by" class="form-control" onChange={e=>setentry_by(e.target.value)}>
                   
                   <option value={0}>Select entry_by</option>   
                    <option value="1">Active</option>
                    <option value="2">InActive</option>
                    
                   </select>
                   <p style={{color: "red"}}>{formErrors.entry_by}</p>
                   
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
                  
                     */}
                  
                  <div class="col-12">
                    <label for="inputAddress" class="form-label">Email</label>
                    <input type="text" class="form-control" id="inputemail" placeholder="Enter Email"  onChange={e=>setemail(e.target.value)}/>
                    <p style={{color: "red"}}>{formErrors.email}</p>
           
                  </div>
                  
                  <div class="col-12">
                    <label for="inputAddress" class="form-label">Specialist</label>
                    <input type="text" class="form-control" id="inputspecialist" placeholder="Enter Specialist"  onChange={e=>setSpecialist(e.target.value)}/>
                    <p style={{color: "red"}}>{formErrors.specialist}</p>
           
                  </div>

                  <div class="col-12">
                    <label for="inputAddress" class="form-label">Degree</label>
                    <input type="text" class="form-control" id="inputdegree" placeholder="Enter Degree"  onChange={e=>setdegree(e.target.value)}/>
                    <p style={{color: "red"}}>{formErrors.degree}</p>
           
                  </div>

                  <div class="text-center">
                    <button type="submit" class="btn btn-primary" onClick={submitHandle}>Submit</button>
                    <button  class="btn btn-danger">Reset</button>
                  </div>
                  
      </form></div>
    </main>

  )
}
