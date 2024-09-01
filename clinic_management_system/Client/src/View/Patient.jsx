import React ,{useState} from "react"
import axios from 'axios'
import { Navigate,useNavigate } from "react-router-dom"

export default function Patient() {
  const[name,setName]=useState('')
  const[mobile_no,setMobile]=useState('')
  const[gender,setgender]=useState('')
  const[address,setaddress]=useState('')
  const[dob,setdob]=useState('')
  //const[entry_by,setentry_by]=useState('')
  const[status,setstatus]=useState('')
  const[desises,setdesises]=useState('')
  const[password,setpassword]=useState('')
  const[entry_by,setentry_by]=useState('')

  const [formErrors, setFormErrors] = useState({});
  const Navigate=useNavigate()

  // submit button event
  const submitHandle=async(e)=>{
    e.preventDefault()
    setFormErrors(validate());
    if(name && mobile_no && gender && address && dob  && desises && password )
  {

    let res=""
    try
    {
      res=await axios.post("/patient/",{

      
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
    Navigate("/patient2")
 }
}    
  const validate = () => {
    const errors = {};
    if (!name) {
        errors.name = "Name is required";
    }
    if (!mobile_no) {
        errors.mobile_no = "Mobile number is required";
    // }else if(mobile_no.length != 10){
    //   errors.mobile_no = "Mobile number must be 10 digit number";
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
    if (!status) {
      errors.status = "Status is required";
    }
    if (!desises) {
      errors.desises = "desises is required";
    }if (!password) {
      errors.desises = "password is required";
    // }else if(password.length <= 8){
    //   errors.password = "Please Enter minimum 8 digit password";
    }
    return errors;
};

return (
  <>    <main id="main" class="main">
     <h3>Patient</h3>
      <div class="card">
     
  
    <form class="row g-3">
                <div class="col-12">
                  
                  <label for="inputNanme4" class="form-label">Name</label>
                  <input type="text" class="form-control" id="inputNanme4" placeholder='Enter Name' onChange={e=>setName(e.target.value)} />
                  <p style={{color: "red"}}>{formErrors.name}</p>
            
                </div>
                <div class="col-12">
                  <label for="inputAddress" class="form-label">Mobile No</label>
                  <input type="text" class="form-control" placeholder="Enter Mobile No"  onChange={e=>setMobile(e.target.value)}/>
                  <p style={{color: "red"}}>{formErrors.mobile_no}</p>
            
                </div>
                <div class="col-12">
                  <label for="inputAddress" class="form-label">password</label>
                  <input type="password" class="form-control"  placeholder="Enter password"  onChange={e=>setpassword(e.target.value)}/>
                  <p style={{color: "red"}}>{formErrors.password}</p>
            
                </div>


                <div class="col-12">
                  <label for="gender" class="form-label">Gender:</label>

                  <input type="radio" name="gender" value="M"   onChange={e=>setgender(e.target.value)}/>Male
                  
                  <input type="radio" name="gender" value="F"   onChange={e=>setgender(e.target.value)}/>Female
                   <p style={{color: "red"}}>{formErrors.gender}</p>
            
                </div>

                <div class="col-12">
                  <label for="inputEmail4" class="form-label">Address</label>
                  <input type="text" class="form-control"  placeholder='Enter Address'  onChange={e=>setaddress(e.target.value)}/>
                  <p style={{color: "red"}}>{formErrors.address}</p>
                </div>

                
                <div class="col-12">
                  <label for="inputAddress" class="form-label">Dob</label>
                  <input type="date" class="form-control"  placeholder="Enter Date-of-Birth"  onChange={e=>setdob(e.target.value)}/>
                  <p style={{color: "red"}}>{formErrors.dob}</p>
            
                </div>
                {/* <div class="col-12">
                  <label for="inputAdderss" class="form-label">Entry_by</label>
                 <select name="status" id="status" class="form-control" onChange={e=>setentry_by(e.target.value)}>
               
                 <option value={0}>Select Entry_by</option>     
                  <option value="1">Active</option>
                  <option value="2">InActive</option>
                  
                 </select>
                 <p style={{color: "red"}}>{formErrors.entry_by}</p>
                </div>
                 */}
                                  
                 <div class="col-12">
                  <label for="inputAddress" class="form-label">Desises</label>
                  <input type="text" class="form-control"  placeholder="Enter Desises"  onChange={e=>setdesises(e.target.value)}/>
                  <p style={{color: "red"}}>{formErrors.desises}</p>
                </div>   

                <div class="text-center">
                  <button type="submit" class="btn btn-primary" onClick={submitHandle}>Submit</button>
                  <button  class="btn btn-danger">Reset</button>
                </div>
                
    </form></div>
  </main>
  </>

)
}
  