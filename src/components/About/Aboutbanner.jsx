import React from 'react'
import man from "../../assets/man.png";
import computer from "../../assets/Computer.png";
import laptop from "../../assets/Laptop.png";
import card from "../../assets/card.png";
import man2 from "../../assets/man2.png";
import phone from "../../assets/phone.png";
import tool from "../../assets/tools.png";
import{FiExternalLink} from "react-icons/fi"
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import  certificate  from "../../assets/certificate.png";
const Aboutbanner = () => {
  return (
    <div>
      <div className='flex flex-col lg:flex-row items-center justify-center'>
        <motion.div
                       initial={{ opacity: 0, y: 50 }} // Initial opacity and y-position before animation
                       animate={{ opacity: 1, y: 0 }} // Final opacity and y-position after animation
                       exit={{ opacity: 0, y: 50 }} // Opacity and y-position when component is removed from the DOM
                       transition={{ duration: 1.0 }} // Duration of the animation
                       whileHover={{ scale: 1.1 }}  className='text-xl font-base2 text-[#fffffe]'>
        <span className='flex mb-[-42px] animate-pulse text-start font-base3 text-xl text-[#ff8906] py-2 md:text-4xl  text-transparent  bg-clip-text bg-gradient-to-r from-[#ec71a0] to-[#FE4066] '> Hello! </span>
        <br/> My name is <span className='text-start font-base2 text-xl text-[#ff8906] py-2 md:text-4xl  text-transparent  bg-clip-text bg-gradient-to-r from-[#fcb462] to-[#ff8906]'>Onkar Surwase</span>, 
        <br/>
 <br/> Welcome to my portfolio !!!
 <br/>I'm thrilled to share my journey as a passionate developer,
 <br/> showcasing expertise in web development and UI/UX design. 
 <br/> Achievements include<span className='text-start font-base2 text-xl text-[#ff8906] py-2 md:text-4xl  text-transparent  bg-clip-text bg-gradient-to-r from-[#fcb462] to-[#FE4066]'> MERN Stack Certification</span>, 
 <br/> empowering me to build dynamic web apps. Proficient in diverse technologies 
 <br/> for seamless user experiences.
 <br/> With a keen eye for design and understanding of user behavior, 
 <br/> I create captivating interfaces.
 <br/> Excited to contribute to meaningful projects and push innovation.
 <br/> Thank you for visiting! Enjoy exploring my work!

       
      <div className='text-[1rem] font-base2 mt-2'>
      <div className='text-[1rem] font-base2'>
                        <a href={certificate} download='certificate'>
                          <button className="flex flex-row gap-1 items-center bg-[#ff8906] hover:bg-[#0f0e17] text-[#fffffe] font-bold py-2 px-4 rounded-lg transform transition-transform ease-in-out">
                          Certificate<FiExternalLink/>
                          </button>
              
                      </a>
                        </div>
          </div>
              
        </motion.div>
       
        <motion.div
                       initial={{ opacity: 0, y: 50 }} // Initial opacity and y-position before animation
                       animate={{ opacity: 1, y: 0 }} // Final opacity and y-position after animation
                       exit={{ opacity: 0, y: 50 }} // Opacity and y-position when component is removed from the DOM
                       transition={{ duration: 1.0 }} // Duration of the animation
                       whileHover={{ scale: 1.1 }} className='relative top-14'>
  <img src={man} width={300} height={300} className='z-10' />
  <img
    src={computer}
    width={50}
    height={50}
    className='absolute top-[10px] left-[5px] z-0 animate-pulse rotate-[10deg] '
  />
  <img
    src={laptop}
    width={50}
    height={50}
    className='absolute top-[200px] left-[250px] z-0 animate-pulse rotate-[10deg]'
  />
 
</motion.div>



       </div>
    </div>
  )
}

export default Aboutbanner
