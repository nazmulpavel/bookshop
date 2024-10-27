import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div>
        <Navbar></Navbar>

        <div className="container mx-auto min-h-screen p-10">
            <Outlet></Outlet>
            </div>    
        <Footer></Footer>
    </div>
  )
}
