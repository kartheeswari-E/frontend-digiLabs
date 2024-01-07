import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LoginIcon from '@mui/icons-material/Login';
import logo from "../Assests/Images/Mode UI Logo.png"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import "./Navbar.css"
function Navbar() {
  const[menu,setmenu]=useState(false)
  return<>
  <section className='navbar-container'>
<img className='logo-container' src={logo} alt='...'></img>
<div className={!menu?'nav-list':"navbar-mobile"}>
    <ul className='list-items'>
        <li className="dropdown" >
         <Link className='list'><span>Card access</span>< KeyboardArrowDownIcon/></Link>
         <ul className='sub-list'>
                  <li>
                    <Link >Demo1 Link</Link>
                  </li>
                  <li>
                    <Link className='gap-top'>Demo2 Link</Link>
                  </li>
                </ul>
        </li>
        <li>
        <Link className='list'>Banking</Link>
        </li>
        <li>
        <Link className='list'>Processing</Link>
        </li>
        <li>
        <Link className='list'>About</Link>
        </li>
        <li>
        <Link className='list'>Carrier</Link>
        </li>
        <li>
        <Link className='list'>Contact</Link>
        </li>

    </ul>
  
</div>
  <div className='login-container'>
      <span>Login</span><LoginIcon/>
    </div>
<div onClick={()=>setmenu(!menu)} className='menu-item'>
{!menu?<MenuIcon className='menu-icon'/>:<CloseIcon  className='menu-icon-close'/>}

</div>
  </section>
  </>
}

export default Navbar