import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ParticleEffect from './Common/ParticleEffect';
import { motion } from "framer-motion";
import Footer from './Common/Footer';
const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch data from the Express server when the component mounts shadow =shadow-[5px_5px_#FE4066,_10px_10px_#F26C86,_15px_15px_#F39DAE,_20px_20px_#F5B7C3,_25px_25px_#F2D9DE]
    axios.get('http://localhost:4000/allprojects')
      .then((response) => setProjects(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='flex flex-col items-center justify-center'>
    <ParticleEffect/>
      <div>
        <h1 className='flex items-center justify-center text-2xl underline text-[#fffffe] font-base m-12'> My Projects </h1>
        
        <div className='flex flex-col gap-14 items-center justify-center '>
   {projects.map((project, index) => (
    <motion.div
    key={index}
    className="w-full md:w-[60%] bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 "
    whileHover={{
      scale: 1.05,
      rotateX: 5,
      rotateY: 5,
      transition: { duration: 2.0 },
    }} >
      <a href="#">
        <img className="rounded-t-lg w-full" src={project.imageUrl} alt={project.title} />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-base2 tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
        </a>
        <p className="mb-3 font-base2 text-gray-700 dark:text-gray-400">{project.description}</p>
        <div className="flex flex-col md:flex-row gap-4">
          <a href={project.gitHublink} className="flex flex-row gap-1 items-center bg-[#ff8906] hover:bg-[#0f0e17] text-[#fffffe] font-bold py-2 px-4 rounded-lg transform transition-transform ease-in-out">
            GitHub Link
            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
          <a href={project.projectlink} className="flex flex-row gap-1 items-center bg-[#ff8906] hover:bg-[#0f0e17] text-[#fffffe] font-bold py-2 px-4 rounded-lg transform transition-transform ease-in-out">
            Project Link
            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  ))}

        </div>
      </div>
      <div>
      


      </div>
      <Footer/>
    </div>
   
  );
};

export default Projects;

