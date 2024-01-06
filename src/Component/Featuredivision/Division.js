import React from 'react'
import "./Division.css"
import LanguageIcon from '@mui/icons-material/Language';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import LockIcon from '@mui/icons-material/Lock';
import logo from "../Assests/Images/Icons.svg";
import key from "../Assests/Images/key.svg";
import lock from "../Assests/Images/lock.svg"
function Division() {
  return<>
  
  <div className='division-container'>
    <div className='feature2-container' >
        <div className='fea2-logo'><img className='icon-img' src={logo} alt='...'/></div>
        <div className='fea2-head'>Globally Accepted</div>
        <div className='fea2-cont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </div>
    </div>
    <div className='feature2-container' >
    <div className='fea2-logo'><img className='icon-img' src={key} alt='...'/></div>
        <div className='fea2-head'>Biometric Integrated</div>
        <div className='fea2-cont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </div>
    </div>
    <div className='feature2-container' >
    <div className='fea2-logo'><img className='icon-img' src={lock} alt='...'/></div>
        <div className='fea2-head'>Fully Secured</div>
        <div className='fea2-cont'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </div>
    </div>
  </div>
  </>
}

export default Division