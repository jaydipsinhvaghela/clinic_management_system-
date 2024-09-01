import React,{useState} from 'react'
import './App.css';
import Header from './View/Header';
import Footer from './View/Footer';
import Home from './View/Home';
import About_us from './View/About_us';
import Contact_us from './View/Contact_us';
import Appointment from './View/Appointment';
import Login from './View/Login';
//import Logout from './View/Logout';
import Doctor from './View/Doctor';
import Registration from './View/Registration';
import Changepass from './View/Changepass';
import Editprofile from './View/Editprofile';
import Displayappointment from './View/Displayappointment';
//import Dashboard from './View/Dashboard';
import Patientfeedback from './View/Patientfeedback';
//import Admin_profile from './View/Admin_profile';
import Forgatepass from './View/Forgatepass';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
  Outlet
} from "react-router-dom";

const Layout = () => {
  return (
		<>
		  <Header></Header> 
      <Outlet/>
      </>
		  );
};	


// const router1 = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout/>,
//     children: [
//       {
//         path: "/Home",
//         element: <Home/>,
//       },
//       {
//         path: "/About_us",
//         element: <About_us/>,
//       },
//       {
//         path: "/Contact_us",
//         element: <Contact_us/>,
//       },
//       {
//         path: "/Appointment",
//         element: <Appointment/>,
//       },
//       {
//         path: "/Login",
//         element: <Login/>,
//       },
//       {
//         path: "/Logout",
//         element: <Logout/>,
//       },
//       {
//         path: "/Doctor",
//         element: <Doctor/>,
//       },
//       {
//         path: "/Registration",
//         element: <Registration/>,
//       },
//       {
//         path: "/Changepass",
//         element: <Changepass/>,
//       },
//       {
//         path: "/Editprofile",
//         element: <Editprofile/>,
//       },
//       {
//         path: "/Displayappointment",
//         element: <Displayappointment/>,
//       },
//       {
//         path: "/Dashboard",
//         element: <Dashboard/>,
//       }
//     ]
//   }
// ]);

function App() {
  const [auth, setAuth] = useState(sessionStorage.getItem("user1"));

  return (
    <>
    
    <BrowserRouter>
        {auth ? (
          <>
          <Layout/>
            <Routes>
              <Route path="/About_us" element={<About_us />} />
              
              <Route path="/Appointment"   element={<Appointment />} />
              
              <Route path="/Changepass"  element={<Changepass />} />
              <Route path="/Contact_us" element={<Contact_us />} />
              {/* <Route path="/dashboard" element={<Dashboard/>} /> */}
              <Route path="/Displayappointment" element={<Displayappointment />} />
              <Route path="/Editprofile"  element={<Editprofile />} />
              <Route path="/" element={<Home />} />
              
              <Route path="/Registration" element={<Registration />} />
              <Route path="/Doctor" element={<Doctor />} />
              {/* <Route path="/Admin_profile" element={<Admin_profile />} /> */}
              <Route path="/Patientfeedback" element={<Patientfeedback />} />
              <Route path="/Editprofile" element={<Editprofile />} />
              <Route path="/Editprofile/:id" element={<Editprofile />} />
               
              
            </Routes>
            <Footer/>
            </>
        ):(
          <>
          <Header></Header>      
		            
                <Routes>
                     <Route path="/" element={<Home />} />            
                
                <Route path="/Registration" element={<Registration />} />
              
                <Route path="/About_us" element={<About_us />} />
               <Route path="/Contact_us" element={<Contact_us />} />
               <Route path="/Login"  element={<Login />} />
               <Route path="/Forgatepass"  element={<Forgatepass />} />
                
                

                </Routes>
                </>)}
          
          </BrowserRouter>
          </>
        );
}
export default App;

    
