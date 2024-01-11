import { useEffect, useState } from "react"
import React from 'react'
import "./Hero.css"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import axios from "axios";
function Hero() {

  const [data, setdata] = useState("");

    useEffect(() => {
      loadData();
    }, []);

  
    let loadData = async () => {
      try {
        let sitedata = await axios.get(`${process.env.REACT_APP_API_URL}/image/webdata`);
        let info = sitedata.data[0]
  
        setdata(info.buttontext);
     
      } catch (error) {
        console.log(error)
      }
    }
    console.log(data)
  const navigate=useNavigate();
  return <>
  <section className='hero-container-bg'>
    <div className='hero-main-container'>
        {/* <div className='grid-style-layout'></div> */}
        <div className='grid-content'>
        <h5 className='grid-topic'>Seamless experience</h5>
<h1 className='grid-head'>Unleashing the Next Generation of Card Solutions</h1>
<p className='grig-para'>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
<button onClick={()=>navigate('/checkout')} className='grid-button'><span className='white'>{data}</span> <ArrowForwardIcon/></button>
<div className='note'>*No credit card required</div>
        </div>
    </div>
  </section>
  </>
}

export default Hero