import React from 'react'
import AnnouncementBar from '../AnnouncementBar/AnnouncementBar'
import Navbar from '../Navbar/Navbar'
import About from '../About/About'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

function Clientside() {
  return <>
  <AnnouncementBar/>
  <Navbar/>
  <Outlet/>
  <About/>
  <Footer/>
  </>
}

export default Clientside