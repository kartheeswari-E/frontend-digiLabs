import React from 'react'
import CreditCardIcon from '@mui/icons-material/CreditCard';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import "./Princing.css"
function pricing() {
  return <>
 <section className='princing-container'>
    <div className='price-head'>Unlock Limitless Possibilities with Our New Card Solutions</div>
    <div className='price-button'>
    <button className='grid-button'><span>Unlock your Card</span> <CreditCardIcon/></button>
    <button id="price-btn" className='grid-button'><span>Customer support</span> <HeadphonesIcon/></button>
    </div>
  </section>
  </>
}

export default pricing