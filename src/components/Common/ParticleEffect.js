// src/ParticleEffect.js
import React, { useState } from 'react';
import Particles from 'react-particles';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
const ParticleEffect = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
   
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []); 
  return (
    <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <motion.div className="fixed top-0 bottom-0 right-full w-full h-screen z-30 bg-[#ff8906]" 
      
          initial={{x:"100%", width: "100%"}}

           animate={{x:"0%", width: "0%"}}

          exit={{x:["0%", "100%"], width: ["0%", "100%"]}}
           transition={{ duration: 0.8, ease: "easeInOut"}}





      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-full h-screen z-20 bg-[#0f0e17] " 
      
      initial={{x:"100%", width: "100%"}}

       animate={{x:"0%", width: "0%"}}

      exit={{x:["0%", "100%"], width: ["0%", "100%"]}}
       transition={{delay:0.2,duration: 0.8, ease: "easeInOut"}}
      />
      
      <motion.div
        className="fixed top-0 bottom-0 right-full w-full h-screen z-10 bg-[#e53170]" 
      
      initial={{x:"100%", width: "100%"}}

       animate={{x:"0%", width: "0%"}}

      exit={{x:["0%", "100%"], width: ["0%", "100%"]}}
       transition={{delay:0.6,duration: 0.8, ease: "easeInOut"}}
      />

   </div>
  );
};

export default ParticleEffect;


