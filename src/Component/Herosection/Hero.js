import React from 'react'
import "./Hero.css"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function Hero() {
  return <>
  <section className='hero-container-bg'>
    <div className='hero-main-container'>
        {/* <div className='grid-style-layout'></div> */}
        <div className='grid-content'>
        <h5 className='grid-topic'>Seamless experience</h5>
<h1 className='grid-head'>Unleashing the Next Generation of Card Solutions</h1>
<p className='grig-para'>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
<button className='grid-button'><span>Unlock your Card</span> <ArrowForwardIcon/></button>
<div className='note'>*No credit card required</div>
        </div>
    </div>
  </section>
  </>
}

export default Hero