import axios from 'axios';
import React from 'react'
import { useEffect,useState } from 'react';
import {Link} from 'react-router-dom';

export default function About_us() {
  const [abouts,setabout]=useState([]);
   
  useEffect(()=>{
    fatchabout();
},[]);
const fatchabout = async()=>{
  try{
      const res=await axios.get("http://localhost:8801/backend/About_us");
      setabout(res.data);
  }
  catch(err){
      console.log(err)
  }
}
//   const upload = async () => {
//     try {      
//       const formData = new FormData();
//       formData.append("file", image);
//       const res = await axios.get("/upload", formData);
  
//    if(!page_id)
//     {
//         getdata(res.data)
//     }
         
//     } catch (err) {
//       console.log(err);
//     }
// }
// const getdata=async(page_img)=>{

// upload()
//   let res=""
//   try{
//       res = await axios.get("/About_us/",{
//        // page_content,
//         page_img
//       });
//     }
//   catch(err)
//   {
//     alert(err)
//   }
//   alert(res.data)
//   Navigate("/")
//   window.location.reload()

// }

//   let i=1;
//   useEffect(()=>{
//     displayAbout();
//   },[])

//   const displayAbout=async()=>{
   
//     try {
//       const res=await axios.get("/About_us")
//       setAbout(res.data[0].page_content)
//       setimg(res.data[0].page_img)
     
//      // console.log(res.data[0].page_content)
//     } catch (error) {
//       //alert(error)
//     }
//   }

  return (
    
    <>
    <section id="hero" class="d-flex align-items-center">
  <div class="container">
    <h1>Welcome to About Us</h1>
    <Link to="/About_us" class="btn-get-started scrollto">Get Started</Link>
  </div>
</section>

    <div>
        <section id="about" class="about"><br/><br/><br/><br/><br/><br/>
        
      <div class="container-fluid">
      {abouts.map((about)=>
        <div class="row">
            
              <div class="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
                <img src={`../upload/${about.page_img}`} width={500} height={600} />
              </div>
              <div class="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5"><br/><br/><br/><br/><br/>
              <p class="description">{about.page_content}</p>
                <div class="icon-box">
                  <div class="icon"><i class="bx bx-fingerprint"></i></div>
                  
                  <h4 class="title"><a href="">Features</a></h4>
                  <p class="description">Describe the key features and functionalities of the system, such as patient scheduling, medical records management processing, appointment and reporting.</p>
                </div>

            <div class="icon-box">
              <div class="icon"><i class="bx bx-gift"></i></div>
              <h4 class="title"><a href="">Benefits</a></h4>
              <p class="description"> how the clinic management system can benefit healthcare providers and their patients, such as increased efficiency, improved patient care, better communication, and streamlined operations.</p>
            </div>

            <div class="icon-box">
              <div class="icon"><i class="bx bx-atom"></i></div>
              <h4 class="title"><a href="">Tech Dominance</a></h4>
              <p class="description">Deploying cutting-edge AI to gain deep insight into consumer needs, Livehealth has moved rapidly ahead in the Health-tech sector, establishing supremacy by converting data-driven analysis into customized products that cater directly to the present-day needs of the burgeoning Health-Care sector.</p>
            </div>
              </div>
            
        </div>
      )}

      </div>
    </section>
    </div>
    </>
  )
}
