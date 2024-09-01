import axios from 'axios';
import React, { useState , useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Admin_profile() {
  const navigate=useNavigate();
    const [admin,setAdmin]=useState([]);

    const[admin_name,setadmin_name]=useState('');
    const[email_id,setemail_id]=useState('');
    const[admin_phone,setadmin_phone]=useState('');
    const[password,setpassword]=useState('');
    const[status,setStatus]=useState('');
    // const[status,setStatus]=useState('');
    // const [password1,setPassword1] = useState('');

    const admin_id = sessionStorage.getItem("user");

    useEffect(()=>{
      
      {
        fetchAdmin();
        adminrecord();
        }
      
    },[]);

     const fetchAdmin=async()=>{
      try
      {
        const res=await axios.get("/Admin_users");
        setAdmin(res.data);
      }
      catch(err)
      {
       // console.log(err);
      }
     }
     const adminrecord=async(e)=>{
      try{
        const res=await axios.get("/Admin_users/"+admin_id);
        setadmin_name(res.data.admin_name);
        setemail_id(res.data.email_id);
        setadmin_phone(res.data.admin_phone);
        setpassword(res.data.password);
        setStatus(res.data.status);
       // setStatus(res.data.status);
      }
      catch(err)
      {
        console.log(err);
      }
     }
     const btnedit = async(e) => {
      e.preventDefault();
      try
      {
          const res = await axios.put("/Admin_users/" + admin_id ,{
              admin_name,
              email_id,
              admin_phone,
              password,
              status
              
          })
          alert(res.data);
          navigate("/Admin_profile");
      }
      catch(err)
      {
          alert(err);
      }
  }
 
  return (

    <div>
        <main id="main" class="main">

<div class="pagetitle">
  <span>Admin Profile</span>
</div>

<section class="section profile">
  <div class="row">
    <div class="col-xl-4">

      <div class="card">
        <div class="card-body profile-card pt-4 d-flex flex-column align-items-center">

          <img src="assets/img/myphoto.jpg" alt="Profile" class="rounded-circle"/>
          <h2>{admin_name}</h2>
          <h3>Admin</h3>
        </div>
      </div>

    </div>

    <div class="col-xl-8">

      <div class="card">
        <div class="card-body pt-3">
        
          <ul class="nav nav-tabs nav-tabs-bordered">
            <Link to={"/Admin_profile"}>
            <li class="nav-item">
              <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#profile-overview">Overview</button>
            </li>  
            </Link>
            
            <Link to={"/Admin_profile/"+admin_id}>
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
                <div class="col-lg-3 col-md-4 label ">Admin Name</div>
                <div class="col-lg-9 col-md-8">{admin_name} </div>
              </div>

              <div class="row">
                <div class="col-lg-3 col-md-4 label">Email</div>
                <div class="col-lg-9 col-md-8">{email_id}</div>
              </div>

              <div class="row">
                <div class="col-lg-3 col-md-4 label">Admin phone</div>
                <div class="col-lg-9 col-md-8">{admin_phone}</div>
              </div>

              <div class="row">
                <div class="col-lg-3 col-md-4 label">Status</div>
                <div class="col-lg-9 col-md-8">{status == 1? "Äctive" : "Inactive"}</div>
              </div>

            </div>

            <div class="tab-pane fade profile-edit pt-3" id="profile-edit">

             
              <form>
                <div class="row mb-3">
                  {/* <label for="profileImage" class="col-md-4 col-lg-3 col-form-label">Profile Image</label> */}
                  <div class="col-md-8 col-lg-9">
                    {/* <img src="assets/img/profile-img.jpg" alt="Profile"/> */}
                    {/* <img src="assets/img/myphoto.jpg" alt="Profile"/> */}
                    {/* <div class="pt-2">
                      <a href="#" class="btn btn-primary btn-sm" title="Upload new profile image"><i class="bi bi-upload"></i></a>
                      <a href="#" class="btn btn-danger btn-sm" title="Remove my profile image"><i class="bi bi-trash"></i></a>
                    </div> */}
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="fullName" class="col-md-4 col-lg-3 col-form-label">Admin Name</label>
                  <div class="col-md-8 col-lg-9">
                    <input name="fullName" type="text" class="form-control" id="fullName" defaultValue={admin_name} onChange={(e)=>setadmin_name(e.target.value)} />
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="company" class="col-md-4 col-lg-3 col-form-label">Email</label>
                  <div class="col-md-8 col-lg-9">
                    <input name="email" type="text" class="form-control" id="company" defaultValue={email_id} onChange={(e)=>setemail_id(e.target.value)}/>
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="Country" class="col-md-4 col-lg-3 col-form-label">Mobile Number</label>
                  <div class="col-md-8 col-lg-9">
                    <input name="country" type="text" class="form-control" id="Country" defaultValue={admin_phone} onChange={(e)=>setadmin_phone(e.target.value)}/>
                  </div>
                </div>

                <div class="row mb-3">
                  <label for="Email" class="col-md-4 col-lg-3 col-form-label">Status</label>
                  <div class="col-md-8 col-lg-9">
                    <input name="text" type="email" class="form-control" id="Email"defaultValue={status == 1?"Active" : "" } disabled/>
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