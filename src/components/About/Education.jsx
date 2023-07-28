import React from 'react';
import education from '../../assets/education.png'
import education1 from '../../assets/education1.png'
import { motion } from 'framer-motion';
const Education = () => {
  const educationData = [
    {
      title: 'Certification Program',
      degree: 'Mern Stack Deveopler',
      institution: 'CODE HELP - LOVE BABBER',
      year: 'jan-2023 - july-2023',

    },
    {
      title: 'Graduation',
      degree: "BACHELOR OF COMPUTER SCIENCE",
      institution: 'Vasantrao Kale College of Computer Science, Kalamb.',
      year: '2019-2022',
    },
    {
      title: '12th Std.',
      degree: 'HIGHER SECONDARY CERTIFICATE',
      institution: 'Shikshan Maharshi DnyandeoMohekar Mahavidyalaya,kalamb',
      year: '2016-2018',
    },
  
   
    // Add more education milestones here if needed
  ];

  return (
 <div className='flex flex-col items-center justify-center gap-6'>
        <h1 className="flex items-center justify-center text-3xl font-base2 text-[#fffffe] underline">Education and Certifications</h1>
         <div className='flex flex-col lg:flex-row items-center justify-center gap-16'>
                
         <motion.div
                       initial={{ opacity: 0, y: 50 }} // Initial opacity and y-position before animation
                       animate={{ opacity: 1, y: 0 }} // Final opacity and y-position after animation
                       exit={{ opacity: 0, y: 50 }} // Opacity and y-position when component is removed from the DOM
                       transition={{ duration: 1.0 }} // Duration of the animation
                       whileHover={{ scale: 1.1 }} >
               <img src={education1} width={500} height={300}/>
           </motion.div>
           
           <div className='flex flex-col   gap-4'>
               {
                educationData.map((educationItem,index)=>(
                           <div key={index} text-2xl text-white className='flex flex-col items-start gap-3'>
                             <motion.div
                       initial={{ opacity: 0, y: 50 }} // Initial opacity and y-position before animation
                       animate={{ opacity: 1, y: 0 }} // Final opacity and y-position after animation
                       exit={{ opacity: 0, y: 50 }} // Opacity and y-position when component is removed from the DOM
                       transition={{ duration: 1.0 }} // Duration of the animation
                       whileHover={{ scale: 1.1 }} className='flex flex-row items-center gap-3'> 
                        
                             <div>
                                  <img src={education} width={30} height={30} />
                             </div>
                            
                             <div className='flex flex-col item-start gap-3'>
                             <h2 className='text-[#fffffe] font-base2 text-xl'>{educationItem.title}</h2>
                              <p className='text-[#fffffe]  font-base2'>{educationItem.degree}</p>
                              <p  className='text-[#fffffe]  font-base2'>{educationItem.institution}</p>
                              <p  className='font-base2 text-[#fffffe] '> {educationItem.year}</p>
                              <p  className='h-1 border-b border-[#fffffe] w-[10rem] pt-[0.1spx] pb-[2px]'></p>
                             </div>
                            
                             </motion.div>
                            
                           </div>       
                ))}
           </div>

         </div>

 </div>
  );
};

export default Education;

{/**
   <div className='flex flex-col lg:flex-row items-center justify-center gap-5'>
    <div>
          <img src={education1}/>
    </div>
    <div className=" container flex flex-col justify-items-center  text-white">
      <h1 className="flex items-center justify-center text-3xl font-base2 text-[#fffffe]">Education and Certifications</h1>
      {educationData.map((educationItem, index) => (
        <div key={index} className="flex flex-row items-center gap-4  ">
        <div>
          <img src={education} alt='education' width={30} height={30}/>
        </div>
         <div>
          <h2 className="text-xl font-semibold">{educationItem.title}</h2>
          <p className='flex '>{educationItem.degree}</p>
          <p>{educationItem.institution}</p>
          <p>{educationItem.year}</p>
          <p  className='h-1 border-b border-gray-500 pt-[0.1spx] pb-[2px]'></p>
          </div>
        </div>
      ))}
    </div>
    </div> */}

