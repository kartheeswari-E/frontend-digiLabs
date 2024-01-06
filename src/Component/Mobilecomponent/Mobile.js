import React from 'react'
import "./Mobile.css"
import right from "../Assests/Images/right.png"
import left from "../Assests/Images/left.png"
function Mobile() {
  return <>
  <section className='mobile-whole-container'>
<div className='left-container'>
    <img src={left} alt='...'/>
</div>
<div className='right-container'>
<img src={right} alt='...'/>
</div>
  </section>
  </>
}

export default Mobile