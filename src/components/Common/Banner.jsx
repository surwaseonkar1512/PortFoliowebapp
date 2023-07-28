import React from 'react'
import { motion } from 'framer-motion';
import banner from "../../assets/banner.png";
import Typewriter from 'typewriter-effect';
import  resume  from "../../assets/resume.pdf";
import{FiExternalLink} from "react-icons/fi"
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { SiLeetcode } from "react-icons/si";

const Banner = () => {
 

  return (
         <motion.div
                  initial={{ opacity: 0, y: 50 }}
                 animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 1.5 }}
                   className='flex flex-col lg:flex-row items-center justify-center pt-[6rem] border-2 border-purple-500 bg-[#0f0e17] p-6 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] rounded-lg m-4'>
                  <motion.div
                       initial={{ opacity: 0, y: 50 }} // Initial opacity and y-position before animation
                       animate={{ opacity: 1, y: 0 }} // Final opacity and y-position after animation
                       exit={{ opacity: 0, y: 50 }} // Opacity and y-position when component is removed from the DOM
                       transition={{ duration: 1.0 }} // Duration of the animation
                       whileHover={{ scale: 1.1 }}
                       className='flex flex-col items-start'>
                     <p className='text-6xl font-base text-[#fffffe]'>Onkar Surwase</p>
    
                  <div className="text-start font-base3 text-xl text-[#ff8906] py-2 md:text-4xl  text-transparent  bg-clip-text bg-gradient-to-r from-[#ec71a0] to-[#FE4066]">
                    <Typewriter
                   options={{
                    strings: ['Full Stack Developer', 'UI/UX Designer'],
                    autoStart: true,
                     loop: true,
                     }}
                    />
                 </div>
                 <p className='text-xl font-base2 text-[#fffffe]'>
                 "Code is our canvas, and the internet is our gallery,
                 <br/>
                  where our creations shine and inspire."
                 </p>
                      
                      <div className='flex flex-row items-center gap-4 m-6 text-3xl'>
                      <div className='text-[1rem] font-base2'>
                        <a href={resume} download='resume'>
                          <button className="flex flex-row gap-1 items-center bg-[#ff8906] hover:bg-[#0f0e17] text-[#fffffe] font-bold py-2 px-4 rounded-lg transform transition-transform ease-in-out">
                            Resume<FiExternalLink/>
                          </button>
              
                      </a>
                        </div>
                     <div className='text-[#fffffe] flex flex-row gap-4'>
                     <a href='https://github.com/surwaseonkar1512'>   <AiFillGithub  /></a>
                      <a href='https://www.linkedin.com/in/onkar-surwase-7b357124a/'><AiFillLinkedin/></a>
                      <a href='https://www.instagram.com/surwase.onkar/'><AiFillInstagram/></a>
                        {/* <SiLeetcode/> */}
                       
                     </div>
                     </div>
                     
                
                 </motion.div>
    
                   <div className='items-center'>
                    <motion.div
                       initial={{ opacity: 0, y: 50 }} // Initial opacity and y-position before animation
                       animate={{ opacity: 1, y: 0 }} // Final opacity and y-position after animation
                       exit={{ opacity: 0, y: 50 }} // Opacity and y-position when component is removed from the DOM
                       transition={{ duration: 1.0 }} // Duration of the animation
                       whileHover={{ scale: 1.1 }}
                     >
                     <img src={banner} alt="Banner" />
                     </motion.div>
                      </div>
  </motion.div>
  )
}

export default Banner