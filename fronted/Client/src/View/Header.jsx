import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom' 
import axios from 'axios';

export default function Header() {

  const [auth, setAuth] = useState(sessionStorage.getItem("user1"));
  const [patient_name,setPatient_name]=useState('')
  const btnSignOUt=()=>{
    sessionStorage.clear()
    window.location.reload()
  }

  useEffect(()=>{
    fatchUsername()
  },[auth])

  const fatchUsername=async()=>{
    try
    {
      const res=await axios.get("/Patient/"+auth);     
      setPatient_name(res.data.name);
    }
    catch(err)
    {
     // console.log(err);
    }
  }

  return (
    <>
    <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">

      <h1 class="logo me-auto"><a href="index.html">LiveHealth</a></h1>
      
      <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
          {auth ? (<>
            <li><Link class="nav-link scrollto active" to="/">Home</Link></li>
          <li><Link class="nav-link scrollto" to="/About_us">About</Link></li>
          <li><Link class="nav-link scrollto" to="/Contact_us">Contact_us</Link></li>
          <li><Link class="nav-link scrollto" to="/Doctor">Doctors</Link></li>
          <li><Link class="nav-link scrollto" to="/patientfeedback">Feedback</Link></li>
         
          <li class="dropdown"><a href="#"><span>{patient_name}</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
            {/* <Link to="/Dashboard">Dashboard</Link> */}
            
            
              <li>
                          <Link to="/Changepass">Change Password</Link>
          
              <Link to="/Editprofile">Edit Profile</Link>
              <Link to="/Displayappointment">Display Appointment</Link>
              {/* <Link to="/Admin_profile">profile</Link> */}
      
              </li>
             
            </ul>

          </li>
          <li><Link to="/Appointment" class="appointment-btn scrollto "><span class="d-none d-md-inline" fon>Make an </span> Appointment</Link></li>
          <li><button class="appointment-btn scrollto" onClick={btnSignOUt} >Log out</button></li>
          
          </>) : (<>
            <li><Link class="nav-link scrollto active" to="/">Home</Link></li>
          <li><Link class="nav-link scrollto" to="/About_us">About</Link></li>
          <li><Link class="nav-link scrollto" to="/Contact_us">Contact_us</Link></li>
          <li> <Link to="/Registration" class="appointment-btn scrollto">Registration</Link></li>
           <li><Link class="nav-link scrollto" to="/Login">Login</Link></li>
           {/* <li><Link class="nav-link scrollto" to="/Forgatepass">Forgate Password</Link></li> */}
          </>)}
         
          {/* <li><Link class="nav-link scrollto" to="/Doctor">Doctors</Link></li>
          <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
            <Link to="/Dashboard">Dashboard</Link>
            
              <li>
                          <Link to="/Changepass">Change Password</Link>
          
              <Link to="/Editprofile">Edit Profile</Link>
              <Link to="/Displayappointment">Display Appointment</Link>
      
              </li>
              <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li>
          <li><Link class="nav-link scrollto" to="/Login">Login</Link>
         
          </li> */}
            </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

     
    </div>
  </header>
  </>
  )
}
