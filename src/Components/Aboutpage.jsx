import React from 'react'
import Uppernav from './Uppernav'
import Navbar from './Navbar'
import Aboutpagecontent from './Aboutpagecontent'
import Aboutservices from './Aboutservices'
import Aboutlogo from './Aboutlogo'
import Footer from './Footer'

export default function Aboutpage() {
  return (

    <div>
       <Uppernav/>
       <Navbar/>
       <Aboutpagecontent/>
       <Aboutservices/>
       <Aboutlogo/>
       <Footer/>
    </div>
  )
}
