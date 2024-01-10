import { useEffect, useState } from "react"
import React from 'react'
import "./Hero.css"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import HowToRegIcon from '@mui/icons-material/HowToReg';
function Hero() {
  const [data, setdata] = useState([]);
  useEffect(() => getdata(), []);
  const getdata = () => {
      fetch(`${process.env.REACT_APP_API_URL}/clientdata/alldata`)
      .then((data) => data.json())
      .then((res) => setdata(res.reverse()));
  };
  const navigate=useNavigate();
  return <>
  <section className='hero-container-bg'>
    <div className='hero-main-container'>
        {/* <div className='grid-style-layout'></div> */}
        <div className='grid-content'>
        <h5 className='grid-topic'>Seamless experience</h5>
<h1 className='grid-head'>Unleashing the Next Generation of Card Solutions</h1>
<p className='grig-para'>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
<button onClick={()=>navigate('/checkout')} className='grid-button'><span className='white'>{!data?"Unlock your Card" :"You are Authorized"}</span> {!data?<ArrowForwardIcon/>:<HowToRegIcon/>}</button>
<div className='note'>{!data?"*No credit card required" :""}</div>
        </div>
    </div>
  </section>
  </>
}

export default Hero