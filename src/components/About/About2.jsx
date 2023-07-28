import React from 'react'
import ParticleEffect from '../Common/ParticleEffect'

import Skills from './Skills'
import Education from './Education'
import Aboutbanner from './Aboutbanner'
import Footer from '../Common/Footer'
    
const About2 = () => {
  return (
    <div className='flex flex-col bg-[#0f0e17]  gap-16 m-4'>
    <ParticleEffect/>
   <div className='flex flex-col  gap-[8rem]'>
    <Aboutbanner/>
    <p  className='h-1 border-b border-[#fffffe] w-full animate-bounce  pt-[0.1spx] pb-[2px]'></p>
    <Skills/>
    <p  className='h-1 border-b border-[#fffffe] w-full animate-bounce pt-[0.1spx] pb-[2px]'></p>
    <Education/>
    
    <Footer/>
   </div>
    
   
    </div>
  )
}

export default About2

{/** <div>
    <Aboutbanner/>
    </div>
    <div >
    <Skills/>
    </div>
    <div>
    <Education/>
    </div>
    <div>
      <Footer/>
    </div> */}
