import React,{useState} from 'react'
 import Header from "./View/Header";
 import Footer from "./View/Footer";
 import Sidebar from "./View/Sidebar";
// import Demo1 from "./View/Demo1";
// import Demo2 from "./View/Demo2";
import About_us from "./View/About_us";
import Admin_users from "./View/Admin_users";
import Contact_us from "./View/Contact_us";
import Feedback from "./View/Feedback";
import Manage_appointment from "./View/Manage_appointment";
import Manage_doctor from "./View/Manage_doctor";
import Patient from "./View/Patient";
import About from "./View/About";
import Admin_user from "./View/Admin_user";
import Contact from "./View/Contact";
import Feedback2 from "./View/Feedback2";
import Manage_appointment2 from "./View/Manage_appointment2";
import DisplayManage_timeslot from "./View/DisplayManage_timeslot";

import Manage_doctor2 from "./View/Manage_doctor2";
import Patient2 from "./View/Patient2";
import Update_Aboutus from "./View/Update_Aboutus";
import Update_Admin_user from "./View/Update_Admin_user";
import Update_contact_us from "./View/Update_contact_us";
import Update_feedback from "./View/Update_feedback";
import Update_appointment from "./View/Update_appointment";
import Update_manage_doctor from "./View/Update_manage_doctor";
import Update_patient from "./View/Update_patient";
import Manage_timeslot from "./View/Manage_timeslot";
import Updatemanage_timeslot from "./View/Updatemanage_timeslot";
 import Login from "./View/Login";
import Changepass from './View/Changepass';
import Admin_profile from './View/Admin_profile';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
  Outlet
} from "react-router-dom";
import Dashboard from './View/Dashboard';


const Layout = () => {
  return (
		<>
		  <Header></Header>
		  <Sidebar></Sidebar>
		  <Outlet/>
		 
		</>
  );
};	

  //  const router1 = createBrowserRouter([
  //    {
  //      path: "/",
  //      element: <Layout/>,
  //     children: [
//       {
//         path: "/Demo1",
//         element: <Demo1/>,
//       },
//       {
//         path: "/Demo2",
//         element: <Demo2/>,
//       },
//       {
//         path: "/About_us",
//         element: <About_us/>,
//       },
//       {
//         path: "/Admin_users",
//         element: <Admin_users/>,
//       },
//       {
//         path: "/Contact_us",
//         element: <Contact_us/>,
//       },
//       {
//         path: "/feedback",
//         element: <Feedback/>,
//       },
//       {
//         path: "/Manage_appointment",
//         element: <Manage_appointment/>
//       },
//       {
//         path: "/Manage_doctor",
//         element: <Manage_doctor/>
//       },
//       {
//         path: "/Patient",
//         element: <Patient/>
//       },
//       {
//         path: "/About",
//         element: <About/>
//       },
//       {
//         path: "/Manage_timeslot",
//         element: <Manage_timeslot/>
//       },
     
//       {
//         path: "/Admin_user",
//         element: <Admin_user/>
//       },
//       {
//         path: "/Contact",
//         element: <Contact/>
//       },
//       {
//         path: "/Feedback2",
//         element: <Feedback2/>
//       },
//       {
//         path: "/Manage_Appointment2",
//         element: <Manage_appointment2/>
//       },
//       {
//         path: "/Manage_doctor2",
//         element: <Manage_doctor2/>
//       },
//       {
//         path: "/Patient2",
//         element: <Patient2/>
//       },
//       {
//         path: "/Update_Aboutus/:id",
//         element: <Update_Aboutus/>
//       },
//       {
//         path: "/Update_Admin_user/:id",
//         element: <Update_Admin_user/>
//       },
//       {
//         path: "/Update_contact_us/:id",
//         element: <Update_contact_us/>
//       },
//       {
//         path: "/Update_feedback/:id",
//         element: <Update_feedback/>
//       },
//       {
//         path: "/Update_appointment/:id",
//         element: <Update_appointment/>
//       },
//       {
//         path: "/Update_manage_doctor/:id",
//         element: <Update_manage_doctor/>
//       },
//       {
//         path: "/Update_patient/:id",
//         element: <Update_patient/>
//       },
//       {
//         path: "/Updatemanage_timeslot/:id",
//         element: <Updatemanage_timeslot/>
//       },
//       {
//         path: "/DisplayManage_timeslot",
//         element: <DisplayManage_timeslot/>
//       },
  //      {
  //        path: "/Login",
  //        element: <Login/>
  //      }
     
  //      ]
  //    }
  //  ]);

function App() {
  const [auth, setAuth] = useState(sessionStorage.getItem("user"));

  return ( 
  <>
      <BrowserRouter>
        {auth ? (
          <>
          <Layout/>
            <Routes>
              <Route path="/About_us" element={<About_us />} />
              
              <Route path="/About"   element={<About />} />
              
              <Route path="/Admin_user"  element={<Admin_user />} />
              <Route path="/Admin_users" element={<Admin_users />} />
              <Route path="/Contact_us" element={<Contact_us/>} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/DisplayManage_timeslot" exact element={<DisplayManage_timeslot />} />
              <Route path="/Feedback" element={<Feedback />} />
              <Route path="/Feedback2"  element={<Feedback2 />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Manage_appointment" element={<Manage_appointment />} />
              <Route path="/Manage_appointment2" exact element={<Manage_appointment2 />} />
              <Route path="/Manage_doctor" element={<Manage_doctor />} />
              <Route path="/Manage_doctor2"  element={<Manage_doctor2 />} />
              {/* <Route path="/Manage_timeslot" element={<Manage_timeslot />} /> */}
              <Route path="/Patient" element={<Patient />} />
              <Route path="/Patient2"  element={<Patient2 />} />
              <Route path="/Update_Aboutus/:id" element={<Update_Aboutus />} />
              <Route path="/Update_Admin_user/:id" element={<Update_Admin_user />} />
              <Route path="/Update_appointment/:id" element={<Update_appointment />} />
              <Route path="/Update_contact_us/:id" element={<Update_contact_us />} />
              <Route path="/Update_feedback/:id" element={<Update_feedback />} />
              <Route path="/Update_manage_doctor/:id" element={<Update_manage_doctor />} />
              <Route path="/Update_patient/:id" element={<Update_patient />} />
              <Route path="/Updatemanage_timeslot/:id" element={<Updatemanage_timeslot />} />
              <Route path="/Changepass" element={<Changepass />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Admin_profile" element={<Admin_profile />} />
              <Route path="/Admin_profile/:id" element={<Admin_profile />} />
            </Routes>
          
                      <Footer></Footer>                
                  </>
          
        ):(
          <>
                <Routes>
                <Route path='/' element={<Login />}/>
                
             
                </Routes>
                </>)}
          
          </BrowserRouter>
          </>
        );
}
export default App;


