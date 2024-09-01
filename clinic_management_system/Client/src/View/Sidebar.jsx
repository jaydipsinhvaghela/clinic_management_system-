import { Link } from 'react-router-dom' 

export default function Sidebar() {
  return (
    <aside id="sidebar" class="sidebar">

    <ul class="sidebar-nav" id="sidebar-nav">

      <li class="nav-item">
        <Link class="nav-link " to="/Dashboard">
          <i class="bi bi-grid"></i>
          <span>Dashboard</span>
        </Link>
      </li>

      

      <li class="nav-item">
        {/* <a class="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-journal-text"></i><span>Forms</span><i class="bi bi-chevron-down ms-auto"></i>
        </a> */}
        <ul id="forms-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          {/* <li>
            <Link class="nav-link collapsed" to="/About_us">
              <i class="bi bi-circle"></i><span>About Us</span>
            </Link> 
          </li> */}
          

          {/* <li>
            <Link class="nav-link collapsed" to="/Admin_users">
              <i class="bi bi-circle"></i><span>Admin Users</span>
            </Link>
          </li> */}

          {/* <li>
            <Link class="nav-link collapsed" to="/Contact_us">
              <i class="bi bi-circle"></i><span>Contact Us</span>
            </Link>
          </li> */}
          {/* <li>
            <Link class="nav-bar collapsed" to="/Feedback">
              <i class="bi bi-circle"></i><span>Feedback</span>
            </Link>
          </li> */}
          {/* <li>
            <Link class="nav-bar collapsed" to="/Manage_appointment">
              <i class="bi bi-circle"></i><span>Manage Appointment</span>
            </Link>
          </li>

          <li>
            <Link class="nav-bar collapsed" to="/Manage_doctor">
              <i class="bi bi-circle"></i><span>Manage Doctor</span>
            </Link>
          </li>

          <li>
            <Link class="nav-bar collapsed" to="/patient">
              <i class="bi bi-circle"></i><span>Patient</span>
            </Link>
          </li> */}

          {/* <li>
            <Link class="nav-bar collapsed" to="/Manage_timeslot">
              <i class="bi bi-circle"></i><span>Timeslot</span>
            </Link>
          </li> */}
          
          

        </ul>
      </li>

      <li class="nav-item">
        
          
          <li class="nav-item">
        <a class="nav-link " data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-journal-text"></i><span>Tables</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        

        <ul id="tables-nav" class="nav-content collapse show" data-bs-parent="#sidebar-nav">
          <li>
            <Link class="nav-bar collapsed" to="/About">
              <i class="bi bi-circle"></i><span>About Us</span>
            </Link>
          </li>
          <li>
            <Link class="nav-bar collapsed" to="/Admin_user">
              <i class="bi bi-circle"></i><span>Admin</span>
            </Link>
          </li>
          <li>
            <Link class="nav-bar collapsed" to="/Contact">
              <i class="bi bi-circle"></i><span>Contact Us</span>
            </Link>
          </li>
          <li>
            <Link class="nav-bar collapsed" to="/Feedback2">
              <i class="bi bi-circle"></i><span>Feedback</span>
            </Link>
          </li>
          <li>
            <Link class="nav-bar collapsed" to="/Manage_appointment2">
              <i class="bi bi-circle"></i><span>Manage Appointment</span>
            </Link>
          </li>
          <li>
            <Link class="nav-bar collapsed" to="/Manage_doctor2">
              <i class="bi bi-circle"></i><span>Manage Doctor</span>
            </Link>
          </li>
          <li>
            <Link class="nav-bar collapsed" to="/Patient2">
              <i class="bi bi-circle"></i><span>Patient</span>
            </Link>
          </li>
          {/* <li>
            <Link class="nav-bar collapsed" to="/DisplayManage_timeslot">
              <i class="bi bi-circle"></i><span>Timeslot</span>
            </Link>
          </li> */}
       
        </ul>
      </li>
      </li>

</ul>
  </aside>
  )
}
