import React from 'react'
import { Link } from 'react-router-dom'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LoginIcon from '@mui/icons-material/Login';
import "./Navbar.css"
function Navbar() {
  return<>
  <section className='navbar-container'>
<div className='logo-container'>Mode UI</div>
<div className='nav-list'>
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

  </section>
  </>
}

export default Navbar