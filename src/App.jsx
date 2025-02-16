import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Banner from './component/Banner'
import About from './component/About'
import Service from './component/Service'
import Mission from './component/Mission'
import Testimonial from './component/Testimonial'
import Community from './component/Community'
import Contact from './component/Contact'
import Footer from './component/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Service />
      <Mission />
      <Testimonial />
      <Community />
      <Contact />
      <Footer />
    </>
  )
}

export default App
