import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

function Home() {
  return <>
  <Navbar/>
  <Sidebar/>
  <Outlet/>
  </>
}

export default Home