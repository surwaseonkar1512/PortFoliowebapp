import React from 'react'
import man from "../../assets/man.png";
import computer from "../../assets/Computer.png";
import laptop from "../../assets/Laptop.png";
import card from "../../assets/card.png";
import man2 from "../../assets/man2.png";
import phone from "../../assets/phone.png";
import tool from "../../assets/tools.png";
import{FiExternalLink} from "react-icons/fi"
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Skills from './Skills';
const About = () => {
  return (
    <div className='flex flex-col m-4 mt-[4rem] gap-[5rem] '>
       <h1 className='flex items-center justify-center text-3xl font-base2 text-[#fffffe] underline'>Digital design is like painting, except the paint never dries.</h1>
        {/* section 1 */}
       <div className='flex flex-col lg:flex-row items-center justify-center'>
        <motion.div
                       initial={{ opacity: 0, y: 50 }} // Initial opacity and y-position before animation
                       animate={{ opacity: 1, y: 0 }} // Final opacity and y-position after animation
                       exit={{ opacity: 0, y: 50 }} // Opacity and y-position when component is removed from the DOM
                       transition={{ duration: 1.0 }} // Duration of the animation
                       whileHover={{ scale: 1.1 }}  className='text-xl font-base2 text-[#fffffe]'>
       <sapn className='flex items-center text-xl font-base2 text-[#fffffe]'> "Welcome to my Portfolio Website !!! "</sapn>
 <br/> "I'm a skilled and enthusiastic<span className='text-start font-base2 text-xl text-[#ff8906] py-2 md:text-4xl  text-transparent  bg-clip-text bg-gradient-to-r from-[#fcb462] to-[#ff8906]'> MERN stack developer</span>, 
 <br/>and I'm thrilled to showcase my passion for building
 <br/> cutting-edge web applications using the latest technologies.
 <br/>With expertise in <span className='text-transparent  bg-clip-text bg-gradient-to-r from-[#fcb462] to-[#ff8906]'>MongoDB, Express.js, React,</span> and <span className='text-transparent  bg-clip-text bg-gradient-to-r from-[#fcb462] to-[#ff8906]'>Node.js</span>,
 <br/>I thrive on transforming creative ideas into functional
 <br/> and scalable solutions."
  <div className='text-[1rem] font-base2 mt-2'>
         <Link to={'/projects'} >
          <button className="flex flex-row gap-1 items-center bg-[#ff8906] hover:bg-[#0f0e17] text-[#fffffe] font-bold py-2 px-4 rounded-lg transform transition-transform ease-in-out">
                    Projects<FiExternalLink/>
             </button>
              
          </Link>
          </div>
              
        </motion.div>
       
        <motion.div
                       initial={{ opacity: 0, y: 50 }} // Initial opacity and y-position before animation
                       animate={{ opacity: 1, y: 0 }} // Final opacity and y-position after animation
                       exit={{ opacity: 0, y: 50 }} // Opacity and y-position when component is removed from the DOM
                       transition={{ duration: 1.0 }} // Duration of the animation
                       whileHover={{ scale: 1.1 }} className='relative'>
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
       {/* section 2 */}

          <div className='flex   lg:flex-row-reverse flex-col-reverse items-center justify-center gap-12'>
        <motion.div
                       initial={{ opacity: 0, y: 50 }} // Initial opacity and y-position before animation
                       animate={{ opacity: 1, y: 0 }} // Final opacity and y-position after animation
                       exit={{ opacity: 0, y: 50 }} // Opacity and y-position when component is removed from the DOM
                       transition={{ duration: 1.0 }} // Duration of the animation
                       whileHover={{ scale: 1.1 }}   className='text-xl font-base2 text-[#fffffe]'>
       " I am a passionate and creative  <span className='text-start font-base2 text-xl text-[#ff8906] py-2 md:text-4xl  text-transparent  bg-clip-text bg-gradient-to-r from-[#fcb462] to-[#ff8906]'> UI/UX designer</span>, 
 <br/>with a keen eye for aesthetics and a strong focus on
 <br/> user-centric design. My goal is to craft intuitive and visually
 <br/>captivating experiences that leave a lasting impression on users."
 <br/>My portfolio showcases a diverse range of projects,
  <br/>from <span className='text-transparent  bg-clip-text bg-gradient-to-r from-[#fcb462] to-[#ff8906]'>Responsive Web Designs</span> to engaging <span className='text-transparent  bg-clip-text bg-gradient-to-r from-[#fcb462] to-[#ff8906]'> Mobile Applications & Webapplication.</span> 
  <div className='text-[1rem] font-base2 mt-2'>
         <Link to={'/about'} >
          <button className="flex flex-row gap-1 items-center bg-[#ff8906] hover:bg-[#0f0e17] text-[#fffffe] font-bold py-2 px-4 rounded-lg transform transition-transform ease-in-out">
                    About<FiExternalLink/>
             </button>
              
          </Link>
          </div>
              
        </motion.div>
       
        <motion.div
                       initial={{ opacity: 0, y: 50 }} // Initial opacity and y-position before animation
                       animate={{ opacity: 1, y: 0 }} // Final opacity and y-position after animation
                       exit={{ opacity: 0, y: 50 }} // Opacity and y-position when component is removed from the DOM
                       transition={{ duration: 1.0 }} // Duration of the animation
                       whileHover={{ scale: 1.1 }} className='relative'>
  <img src={man2} width={300} height={300} className='z-10' />
  <img
    src={tool}
    width={50}
    height={50}
    className='absolute top-[150px] left-[1px] z-0 animate-pulse rotate-[10deg] '
  />
  <img
    src={card}
    width={50}
    height={50}
    className='absolute top-[200px] left-[250px] z-0 animate-pulse rotate-[10deg]'
  />
  <img
    src={phone}
    width={50}
    height={50}
    className='absolute top-[50px] left-[250px] z-0 animate-pulse rotate-[-10deg]'
  />
 
</motion.div>



       </div>   
    </div>
  )
}

export default About