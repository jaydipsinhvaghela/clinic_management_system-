import axios from 'axios';
import React, { useState , useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Editprofile() {
  const navigate=useNavigate();
    const [patient,setpatient]=useState([]);

    const[name,setname]=useState('');
    const[mobile_no,setmobile]=useState('');
    const[gender,setgender]=useState('');
    const[address,setaddress]=useState('');
    const[dob,setdob]=useState('');
    const[entry_by,sesetentrytStatus]=useState('');
     const [status,setstatus] = useState('');
     const[desises,setdesises]=useState('');
    const [password,setpass] = useState('');

    const patient_id = sessionStorage.getItem("user1");

    useEffect(()=>{
      
      {
        fetchpatient();
        patientrecord();
        }
      
    },[]);

     const fetchpatient=async()=>{
      try
      {
        const res=await axios.get("/Patient");
        setpatient(res.data);
      }
      catch(err)
      {
       // console.log(err);
      }
     }
     const patientrecord=async(e)=>{
      try{
        const res=await axios.get("/Patient/"+patient_id);
        setname(res.data.name);
        setmobile(res.data.mobile_no);
        setgender(res.data.gender);
        setaddress(res.data.address);
        setdob(res.data.dob);
        //setStatus(res.data.status);
      }
      catch(err)
      {
       // console.log(err);
      }
     }
     const btnedit = async(e) => {
      e.preventDefault();
      try
      {
          const res = await axios.put("/Patient/" + patient_id ,{
              name,
              mobile_no,
              gender,
              address,
              dob,
              entry_by,
              status,
              desises,
              password
              
              
          })
          alert(res.data);
          navigate("/");
      }
      catch(err)
      {
          alert(err);
      }
  }
 
  return (

    <div>
        <main id="main" class="main">



<section class="section profile"><br/><br/><br/><br/>
  <div class="row">
    <div class="col-xl-4">

      <div class="card">
        <div class="card-body profile-card pt-4 d-flex flex-column align-items-center">

          <img src="assets/img/testimonials-4.jpg" alt="Profile" class="rounded-circle"/>
          <h2>{name}</h2>
          {/* <h3>Patient</h3> */}
        </div>
      </div>

    </div>

    <div class="col-xl-8">

      <div class="card">
        <div class="card-body pt-3">
        
          <ul class="nav nav-tabs nav-tabs-bordered">
            <Link to={"/Editprofile"}>
            <li class="nav-item">
              <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Overview</button>
            </li>  
            </Link>
            
            <Link to={"/Editprofile/"+patient_id}>
            <li class="nav-item">
              <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-edit">Edit Profile</button>
            </li>
            </Link>

            {/* <Link to={"/Admin_profile/"+admin_id}>
            <li class="nav-item">
              <button class="nav-link" data-bs-toggle="tab" data-bs-target="#profile-change-password">Change Password</button>
            </li>
            </Link>
             */}

          </ul>
          <div class="tab-content pt-2">

            <div class="tab-pane fade show active profile-overview" id="profile-overview">
              

              <h5 class="card-title">Profile Details</h5>

              <div class="row">
                <div class="col-lg-3 col-md-4 label ">Your Name</div>
                <div class="col-lg-9 col-md-8">{name} </div>
              </div>

              <div class="row">
                <div class="col-lg-3 col-md-4 label">Mobile Number</div>
                <div class="col-lg-9 col-md-8">{mobile_no}</div>
              </div>

              <div class="row">
                <div class="col-lg-3 col-md-4 label">Gender</div>
                <div class="col-lg-9 col-md-8">{gender}</div>
              </div>

              <div class="row">
                <div class="col-lg-3 col-md-4 label">Address</div>
                <div class="col-lg-9 col-md-8">{address}</div>
              </div>

              <div class="row">
                <div class="col-lg-3 col-md-4 label">Date-of-birth</div>
                <div class="col-lg-9 col-md-8">{dob}</div>
              </div>

            </div>

            <div class="tab-pane fade profile-edit pt-3" id="profile-edit">

             
              <form>
                <div class="row mb-3">
                  {/* <label for="profileImage" class="col-md-4 col-lg-3 col-form-label">Profile Image</label> */}
                  <div class="col-md-8 col-lg-9">
                    {/* <img src="assets/img/profile-img.jpg" alt="Profile"/> */}
                    {/* <img src="assets/img/messages-3.jpg" alt="Profile"/> */}
                    {/* <div class="pt-2">
                      <a href="#" class="btn btn-primary btn-sm" title="Upload new profile image"><i class="bi bi-upload"></i></a>
                      <a href="#" class="btn btn-danger btn-sm" title="Remove my profile image"><i class="bi bi-trash"></i></a>
                    </div> */}
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="fullName" class="col-md-4 col-lg-3 col-form-label">Your Name</label>
                  <div class="col-md-8 col-lg-9">
                    <input name="fullName" type="text" class="form-control" id="fullName" defaultValue={name} onChange={(e)=>setname(e.target.value)} />
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="company" class="col-md-4 col-lg-3 col-form-label">Mobile Number</label>
                  <div class="col-md-8 col-lg-9">
                    <input name="number" type="text" class="form-control" id="company" defaultValue={mobile_no} onChange={(e)=>setmobile(e.target.value)}/>
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="Country" class="col-md-4 col-lg-3 col-form-label">Gender</label>
                  <div class="col-md-8 col-lg-9">
                  <input type="radio" name="gender" value="M" defaultValue={gender}  onChange={e=>setgender(e.target.value)} checked/>Male
                  
                  <input type="radio" name="gender" value="F" defaultValue={gender}   onChange={e=>setgender(e.target.value)}/>Female
          
                    {/* <input name="country" type="text" class="form-control" id="Country" defaultValue={gender} onChange={(e)=>setgender(e.target.value)}/> */}
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="Email" class="col-md-4 col-lg-3 col-form-label">Address</label>
                  <div class="col-md-8 col-lg-9">
                    <input name="text" type="text" class="form-control" id="Email"defaultValue={address} onChange={(e)=>setaddress(e.target.value)} />
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="Email" class="col-md-4 col-lg-3 col-form-label">Date-Of-Birth</label>
                  <div class="col-md-8 col-lg-9">
                    <input name="date" type="date" class="form-control" id="Email"defaultValue={dob} onChange={(e)=>setdob(e.target.value)} />
                  </div>
                </div>

          

                <div class="text-center">
                  <button type="submit" class="btn btn-primary" onClick={btnedit}>Save Changes</button>
                </div>
              </form>

            </div>

            {/* <div class="tab-pane fade pt-3" id="profile-settings">

              
              <form>

                <div class="row mb-3">
                  <label for="fullName" class="col-md-4 col-lg-3 col-form-label">Email Notifications</label>
                  <div class="col-md-8 col-lg-9">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="changesMade" checked/>
                      <label class="form-check-label" for="changesMade">
                        Changes made to your account
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="newProducts" checked/>
                      <label class="form-check-label" for="newProducts">
                        Information on new products and services
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="proOffers"/>
                      <label class="form-check-label" for="proOffers">
                        Marketing and promo offers
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="securityNotify" checked disabled/>
                      <label class="form-check-label" for="securityNotify">
                        Security alerts
                      </label>
                    </div>
                  </div>
                </div>

                <div class="text-center">
                  <button type="submit" class="btn btn-primary">Save Changes</button>
                </div>
              </form>

            </div> */}

            <div class="tab-pane fade pt-3" id="profile-change-password">
              
              <form>

                {/* <div class="row mb-3">
                  <label for="currentPassword" class="col-md-4 col-lg-3 col-form-label">Current Password</label>
                  <div class="col-md-8 col-lg-9">
                    <input name="password" type="password" class="form-control" id="currentPassword"/>
                  </div>
                </div> */}

                {/* <div class="row mb-3">
                  <label for="newPassword" class="col-md-4 col-lg-3 col-form-label">New Password</label>
                  <div class="col-md-8 col-lg-9">
                    <input name="newpassword" type="password" class="form-control" id="newPassword" onChange={(e)=>setPassword(e.target.value)}/>
                  </div>
                </div> */}

                {/* <div class="row mb-3">
                  <label for="renewPassword" class="col-md-4 col-lg-3 col-form-label">Re-enter New Password</label>
                  <div class="col-md-8 col-lg-9">
                    <input name="renewpassword" type="password" class="form-control" id="renewPassword" onChange={(e)=>setPassword1(e.target.value)}/>
                  </div>
                </div> */}

                {/* <div class="text-center">
                  <button type="submit" class="btn btn-primary" onClick={change_password}>Change Password</button>
                </div> */}
              </form>
            </div>

          </div>

        </div>
      </div>

    </div>
  </div>
</section>

</main>
    </div>
  )
}