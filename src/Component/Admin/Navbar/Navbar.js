import React from 'react'
import "./Navbar.css"
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
function Navbar() {
  return<>
  <div className='Navbar-containers'>
    <div className='logo-containers'>
        <div className='logo-names'>Mode UI <span>Admin</span></div>
        <MenuRoundedIcon className='menu-icons'/>
    </div>

    <div className='admin-profile-container'>
<AccountCircleRoundedIcon className='profile-icon'/>
<div className='admin-name'>kartheeswari</div>
    </div>
  </div>
  </>
}

export default Navbar