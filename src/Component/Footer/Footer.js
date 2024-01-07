import React from 'react'
import "./Footer.css"
import git from "../Assests/Images/git.png"
import linked from "../Assests/Images/linkedin.png"
import social from "../Assests/Images/Social.png"
function Footer() {
  return <>




  <section className='footer-section'>
    <div className='footer-container'>
      <div className='footer-list'>
        <div className='footer-head'>Company</div>
        <ul className='list-item'>
          <li>About us</li>
          <li>Pricing</li>
          <li>Contact us</li>
          <li>Features</li>
        </ul>
      </div>
      <div className='footer-list'>
        <div className='footer-head'>Product</div>
        <ul className='list-item'>
          <li>Figma design system</li>
          <li>Ios kit</li>
          <li>Android kit</li>
          <li>Wireframe</li>
        </ul>
      </div>
      <div className='footer-list'>
        <div className='footer-head'>Resources</div>
        <ul className='list-item'>
          <li>Templates</li>
          <li>Landing pages</li>
          <li>Documentation</li>
          <li>Comp library</li>
        </ul>
      </div>
      <div className='footer-list'>
        <div className='footer-head'>Legal</div>
        <ul className='list-item'>
          <li>Privacy policy</li>
          <li>Terms & Conditions</li>
          <li>Disclaimer</li>
          <li>Affiliate programme</li>
        </ul>
      </div>
      <div className='footer-list'>
        <div className='footer-head'>Support</div>
        <ul className='list-item'>
          <li>Help centre</li>
          <li>Raise ticket</li>
          <li>Report</li>
          <li>Refund</li>
        </ul>
      </div>
    </div>
    <div className='footer-socialmedia'>
      <div className='social-meadia-img'>
        <img src={git} alt='...'/>
        <img src={linked} alt='...'/>
        <img src={social} alt='...'/>
      </div>
      <div className='rights'>© 2023 Mode UI  Inc. All Rights Reserved.</div>
    </div>
  </section>
  </>
}

export default Footer