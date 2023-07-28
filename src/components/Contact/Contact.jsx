import React from "react"
import ContactDetails from "./ContactPage/ContactDetails"
import ContactForm from "./ContactPage/ContactForm"
import { motion } from 'framer-motion';
import ParticleEffect from "../Common/ParticleEffect";

import contact from "../../assets/contact.png";
import computer from "../../assets/sent-mail.gif";
import laptop from "../../assets/Laptop.png";
import Footer from "../Common/Footer";

const Contact = () => {

  const animationVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };
  return (
    <div className="h-full w-full bg-[#0f0e17]">
    <ParticleEffect/>
    <motion.div
    initial="hidden"
      animate="visible"
      variants={animationVariants}
      transition={{ duration: 3 }}
     
     className="m-4 mt-8 z-10">
      <div className="flex flex-col-reverse lg:flex-row items-center h-full justify-center gap-4 ">
        
      <motion.div
                       initial={{ opacity: 0, y: 50 }} // Initial opacity and y-position before animation
                       animate={{ opacity: 1, y: 0 }} // Final opacity and y-position after animation
                       exit={{ opacity: 0, y: 50 }} // Opacity and y-position when component is removed from the DOM
                       transition={{ duration: 1.0 }} // Duration of the animation
                       whileHover={{ scale: 1.1 }} className='relative h-[60vh] lg:h-screen top-36 lg:top-96 '>
  <img src={contact} width={300} height={250} className='z-10' />
  <img
    src={computer}
    width={500}
    height={500}
    className='absolute top-[-50px] left-[-145px] z-0 animate-pulse rotate-[10deg] '
  />
</motion.div>
 <div className="flex relative">
       <ContactForm />
     </div>
     
    </div>
    <p className="flex flex-col items-center justify-center text-xl font-base2 text-[#fffffe] pt-[6rem]">Thank you for visiting my 
   <br/><span className="font-base2 text-xl text-[#ff8906] py-2 md:text-4xl  text-transparent  bg-clip-text bg-gradient-to-r from-[#fcb462] to-[#FE4066]">portfolio! </span>
    <br/>I'm thrilled to see your interest in my work.
   <br/>Whether you have a project idea, a potential collaboration, 
   <br/>or just want to say hello, 
   <br/>feel free to get in touch using the contact form.</p>
  </motion.div>
 
    <Footer/>
    </div>
  )
}

export default Contact