import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <footer id="footer">

<div class="footer-top">
  <div class="container">
    <div class="row">

    <div class="col-lg-3 col-md-6 footer-contact">
      <h3>LiveHealth</h3>
      <p>
      Nasscom Startup Warehouse <br/>
      Infopark Campus,Kakkanad, Kerala<br/>
      India <br/><br/>
        <strong>Phone:</strong> +91 8469002525<br/>
        <strong>Email:</strong> Livehealth@gmail.com<br/>
      </p>
    </div>

      <div class="col-lg-2 col-md-6 footer-links">
        <h4>Useful Links</h4>
        <ul>
          <li><Link class="bx bx-chevron-right"to="/">Home</Link></li>
          <li><Link class="bx bx-chevron-right" to="About_us">About us</Link> </li>
          <li><Link class="bx bx-chevron-right" to="Contact_us">Contact Us</Link></li>
          <li><Link class="bx bx-chevron-right" to="Doctor">Doctors</Link></li>
           <li><Link class="bx bx-chevron-right" to ="Patientfeedback">Feedback</Link></li>
        </ul>
       </div>

      

      <div class="col-lg-4 col-md-6 footer-newsletter">
        <h4>Join Our Newsletter</h4>
        <p>Join 1,00,000+ subscribers who get personalised health tips in their inbox.</p>
        <form action="" method="post">
          <input type="email" name="email" placeholder='Example@yourdomain.com'/><input type="submit" value="Subscribe"/>
        </form>
      </div>

    </div>
  </div>
</div>

<div class="container d-md-flex py-4">

  <div class="me-md-auto text-center text-md-start">
    <div class="copyright">
      &copy; Copyright <strong><span>Livehealth</span></strong>. All Rights Reserved
    </div>
    <div class="credits">
      Designed by <a href="">JAYDEEPSINH VAGHELA</a>
    </div>
  </div>
  <div class="social-links text-center text-md-right pt-3 pt-md-0">
    <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
    <a href="https://www.facebook.com/groups/910155803114034/?ref=share&mibextid=NSMWBT" class="facebook"><i class="bx bxl-facebook"></i></a>
    <a href="https://instagram.com/clinic_group?igshid=YmMyMTA2M2Y=" class="instagram"><i class="bx bxl-instagram"></i></a>
    <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
    <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
  </div>
</div>
</footer>  
    </>
  )
}