import React from 'react'
import "./Sidebar.css"
import { Link } from 'react-router-dom'
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
function Sidebar() {
  return <>
  <div className='sidebar-container'>
  <ul className="sidebar-nav" id="sidebar-nav">
    <li className="list-">
    <Link to="/admin-dashboard" className="nav-link ">
    <WidgetsRoundedIcon className='sidebar-icon' />
        <span>Dashboard</span>
      </Link>
      <Link to="/admin-dashboard/addimage" className="nav-link ">
      <WidgetsRoundedIcon className='sidebar-icon' />
        <span>Image Update</span>
      </Link>
    </li> </ul>
  </div>
  </>
}

export default Sidebar