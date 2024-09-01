import React,{useState,useEffect} from 'react'
import axios from 'axios';
export default function Dashboard() {

    const[packagess,setPackagess]=useState([]);
    const[patient,setpatient]=useState([]);
    const[appointment,setappointment]=useState([]);
    const[doctor,setdoctor]=useState([]);


    useEffect(()=>{
        packages();
        patients();
        appointments();
        doctors();
    },[])


    const packages=async()=>{
        try{
            const res=await axios.get("http://localhost:8805/backend/Cfeedback");
            setPackagess(res.data);
           
        }
        catch(err){
            console.log(err);
        }
    }
    const patients=async()=>{
      try{
          const res=await axios.get("http://localhost:8805/backend/Cpatient");
          setpatient(res.data);
         
      }
      catch(err){
          console.log(err);
      }
  }
  const appointments=async()=>{
    try{
        const res=await axios.get("http://localhost:8805/backend/Cappointment");
        setappointment(res.data);
       
    }
    catch(err){
        console.log(err);
    }
}
const doctors=async()=>{
  try{
      const res=await axios.get("http://localhost:8805/backend/Cdoctor");
      setdoctor(res.data);
     
  }
  catch(err){
      console.log(err);
  }
}


  return (
    <main id="main" class="main">
         <div class="pagetitle">
      <h1>Dashboard</h1>
      <nav>
        <ol class="breadcrumb">
          {/* <li class="breadcrumb-item"><a href="index.html">Home</a></li> */}
          <li class="breadcrumb-item active">Dashboard</li>
          
        </ol>
      </nav>
    </div>
    <section class="section dashboard">
    <div class="row">


<div class="col-lg-12">
  <div class="row">


       <div class="col-xxl-4 col-md-6">
              <div class="card info-card sales-card">

                <div class="filter">
                  <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li class="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li><a class="dropdown-item" href="#">Today</a></li>
                    <li><a class="dropdown-item" href="#">This Month</a></li>
                    <li><a class="dropdown-item" href="#">This Year</a></li>
                  </ul>
                </div>

                <div class="card-body">
                  <h5 class="card-title">Feedbacks <span>| Today</span></h5>

                  <div class="d-flex align-items-center">
                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i class="bi bi-cart"></i>
                    </div>
                    <div class="ps-3">
                      <h6>{packagess.feedback_id}</h6>
                     
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div class="col-xxl-4 col-md-6">
              <div class="card info-card sales-card">

                <div class="filter">
                  <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li class="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li><a class="dropdown-item" href="#">Today</a></li>
                    <li><a class="dropdown-item" href="#">This Month</a></li>
                    <li><a class="dropdown-item" href="#">This Year</a></li>
                  </ul>
                </div>

                <div class="card-body">
                  <h5 class="card-title">Patients <span>| Today</span></h5>

                  <div class="d-flex align-items-center">
                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i class="bi bi-cart"></i>
                    </div>
                    <div class="ps-3">
                       <h6>{patient.patient_id}</h6> 
                      
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div class="col-xxl-4 col-md-6">
              <div class="card info-card sales-card">

                <div class="filter">
                  <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li class="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li><a class="dropdown-item" href="#">Today</a></li>
                    <li><a class="dropdown-item" href="#">This Month</a></li>
                    <li><a class="dropdown-item" href="#">This Year</a></li>
                  </ul>
                </div>

                <div class="card-body">
                  <h5 class="card-title">Appointments </h5>

                  <div class="d-flex align-items-center">
                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i class="bi bi-cart"></i>
                    </div>
                    <div class="ps-3">
                       <h6>{appointment.appointment_id}</h6> 
                     
                    </div>
                  </div>
                </div>

              </div>
            </div>
             <div class="col-xxl-4 col-md-6">
              <div class="card info-card sales-card">

                <div class="filter">
                  <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li class="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li><a class="dropdown-item" href="#">Today</a></li>
                    <li><a class="dropdown-item" href="#">This Month</a></li>
                    <li><a class="dropdown-item" href="#">This Year</a></li>
                  </ul>
                </div>

                <div class="card-body">
                  <h5 class="card-title">Doctors </h5>

                  <div class="d-flex align-items-center">
                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i class="bi bi-cart"></i>
                    </div>
                    <div class="ps-3">
                       <h6>{doctor.doctor_id}</h6> 
                      
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div class="col-xxl-4 col-md-6">
              <div class="card info-card sales-card">

                <div class="filter">
                  <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li class="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>

                    <li><a class="dropdown-item" href="#">Today</a></li>
                    <li><a class="dropdown-item" href="#">This Month</a></li>
                    <li><a class="dropdown-item" href="#">This Year</a></li>
                  </ul>
                </div>

              
              </div>
            </div>
            </div>
            </div>
            </div>
            </section>
    </main>
  )
}
