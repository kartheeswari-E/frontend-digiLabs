import React from 'react'
import "./About.css"
import logo from "../Assests/Images/Mode UI Logo.png"
function About() {
  return <>
  <section className='about-container'>
    <div className='about-head'>
        <img src={logo} alt='...'/>
    </div>
    <div className='about-content'>
    Mode UI is a comprehensive design system that empowers<br/>
     designers and developers to create cohesive and visually stunning <br/>
     user interfaces across various platforms and devices
    </div>
  </section>
  </>
}

export default About