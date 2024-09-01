import React from 'react'
import react,{useState, useEffect} from 'react'
import axios from 'axios'


export default function Doctor() {
  const[doctor1,setdoctor1]=useState([])
  const[doctor2,setdoctor2]=useState([])
  const[doctor3,setdoctor3]=useState([])
  const[doctor4,setdoctor4]=useState([])
  const[degree1,setdegree1]=useState([])
  const[degree2,setdegree2]=useState([])
  const[degree3,setdegree3]=useState([])
  const[degree4,setdegree4]=useState([])
  const[specialist1,setspecialist1]=useState([])
  const[specialist2,setspecialist2]=useState([])
  const[specialist3,setspecialist3]=useState([])
  const[specialist4,setspecialist4]=useState([])
  
  let i=1;
  useEffect(()=>{
    displaymanage_doctorss();
  },[])


  const displaymanage_doctorss=async()=>{
    try {
      const res=await axios.get("/Manage_doctor")
      setdoctor1(res.data[0].name)
      setdoctor2(res.data[1].name)
      setdoctor3(res.data[2].name)
      setdoctor4(res.data[3].name)
      setdegree1(res.data[0].degree)
      setdegree2(res.data[1].degree)
      setdegree3(res.data[2].degree)
      setdegree4(res.data[3].degree)
      setspecialist1(res.data[0].specialist)
      setspecialist2(res.data[1].specialist)
      setspecialist3(res.data[2].specialist)
      setspecialist4(res.data[3].specialist)
   //   console.log(res.data)
    } catch (error) {
      //alert(error)
    }
  }
  
  return (
  <>
    <section id="hero" class="d-flex align-items-center">
    <div class="container">
      <h1>Welcome to Doctor</h1>
      <a href="#Contact_us" class="btn-get-started scrollto">Get Started</a>
    </div>
  </section>
  
    <div><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <section id="doctors" class="doctors">
      <div class="container">

        <div class="section-title">

          <h1>Doctors</h1>
          <p>Patients can also view the doctor's schedule and availability in the Doctors section, which helps them book appointments at a time that is convenient for them. The system can allow patients to book appointments with the doctor of their choice online, based on the doctor's availability.</p>
        </div>

        <div class="row">

          <div class="col-lg-6">
            <div class="member d-flex align-items-start">
              <div class="pic"><img src="assets/img/doctor1.jpg" class="img-fluid" alt=""/></div>
              <div class="member-info">
              <h4>{doctor1}</h4>
          
                
                <span>{specialist1}({degree1})</span>
                <p>A dentist, also known as a dental surgeon.</p>
                <div class="social">
                  <a href=""><i class="ri-twitter-fill"></i></a>
                  <a href="https://www.facebook.com/groups/910155803114034/?ref=share&mibextid=NSMWBT"><i class="ri-facebook-fill"></i></a>
                  <a href="https://instagram.com/clinic_group?igshid=YmMyMTA2M2Y="><i class="ri-instagram-fill"></i></a>
                  <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4 mt-lg-0">
            <div class="member d-flex align-items-start">
              <div class="pic"><img src="assets/img/doctor2.jpg" class="img-fluid" alt=""/></div>
              <div class="member-info">
                <h4>{doctor2}</h4>
                <span>{specialist2}({degree2})</span>
                <p>He is a specialist in eye diseases.</p>
                <div class="social">
                  <a href=""><i class="ri-twitter-fill"></i></a>
                  <a href="https://www.facebook.com/groups/910155803114034/?ref=share&mibextid=NSMWBT"><i class="ri-facebook-fill"></i></a>
                  <a href="https://instagram.com/clinic_group?igshid=YmMyMTA2M2Y="><i class="ri-instagram-fill"></i></a>
                  <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4">
            <div class="member d-flex align-items-start">
              <div class="pic"><img src="assets/img/doctor4.jpg" class="img-fluid" alt=""/></div>
              <div class="member-info">
              <h4>{specialist3}({doctor3})</h4>
               
              <span>Mentar({degree3})</span>
                <p>evaluate, diagnose, and treat mental health disorders.</p>
                <div class="social">
                  <a href=""><i class="ri-twitter-fill"></i></a>
                  <a href="https://www.facebook.com/groups/910155803114034/?ref=share&mibextid=NSMWBT"><i class="ri-facebook-fill"></i></a>
                  <a href="https://instagram.com/clinic_group?igshid=YmMyMTA2M2Y="><i class="ri-instagram-fill"></i></a>
                  <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-4">
            <div class="member d-flex align-items-start">
              <div class="pic"><img src="assets/img/doctors/doctors-4.jpg" class="img-fluid" alt=""/></div>
              <div class="member-info">
              <h4>{doctor4}</h4>
              <span>{specialist4}({degree4})</span>
                
                <p>medical professionals who deal with all kinds of general  diseases.</p>
                <div class="social">
                  <a href=""><i class="ri-twitter-fill"></i></a>
                  <a href="https://www.facebook.com/groups/910155803114034/?ref=share&mibextid=NSMWBT"><i class="ri-facebook-fill"></i></a>
                  <a href="https://instagram.com/clinic_group?igshid=YmMyMTA2M2Y="><i class="ri-instagram-fill"></i></a>
                  <a href=""> <i class="ri-linkedin-box-fill"></i> </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    </div>
    </>
  )
}
