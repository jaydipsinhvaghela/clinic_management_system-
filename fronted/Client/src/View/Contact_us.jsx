import React from 'react'
import react,{useState, useEffect} from 'react'
import axios from 'axios'

export default function Contact_us() {
  const[Contacts,setContact]=useState('')
  const[phones,setphones]=useState('')
  const[phones2,setphones2]=useState('')
  const[address1,setaddress1]=useState('')
  const[address2,setaddress2]=useState('')
 const[email_id,setemail]=useState('')
 
  let i=1;
  useEffect(()=>{
    displayContact();
  },[])


  const displayContact=async()=>{
    try {
      const res=await axios.get("/Contact_us")
      setContact(res.data[0].Contacts)
      setphones(res.data[0].phone_no1)
      setphones2(res.data[0].phone_no2)
      setaddress1(res.data[0].address_1)
      setaddress2(res.data[0].address_2)
      setemail(res.data[0].email_id)
   
   //   console.log(res.data)
    } catch (error) {
      //alert(error)
    }
  }
  
  return (
    <>
    <section id="hero" class="d-flex align-items-center">
    <div class="container">
      <h1>Welcome to Contact Us</h1>
      <a href="#Contact_us" class="btn-get-started scrollto">Get Started</a>
    </div>
  </section>
  
  <section id="contact" class="contact" style={{padding:"225px"}}>
      <div class="container">
        <div class="section-title">
          <h2>Contact</h2>
          <p>In addition to the contact form, the page can also include a map that shows the clinic's location, directions for getting there, and parking information. This can be especially helpful for new patients who may not be familiar with the area.</p>
        </div>
      </div>
    
      <div>
        <iframe style={{border:"0",width:"100%",height:"350px"}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
      </div>

      <div class="container">
        <div class="row mt-5">

          <div class="col-lg-4">
            <div class="info">
              
              <div class="address"><br/><br/>
                <i class="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>{address1}</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="info">

              <div class="email">
                <i class="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>{email_id}</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="info">

              <div class="phone">
                <i class="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>{phones}</p>
                <p>{phones2}</p>
              </div>

            </div>

          </div>

                  </div>

      </div>
    </section>
   
    </>
  )
}
