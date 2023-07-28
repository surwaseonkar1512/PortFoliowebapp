import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
    <p  className='h-1 border-b border-gray-500 pt-[0.1spx] pb-[2px]'></p>
    <div className='flex flex-col text-[#fffffe] lg:flex-row items-center justify-between m-[1rem] mt-[5rem] mb-[1rem] '>
      <div> <p className='text-2xl font-base3'> 2023 © All Rights Reserved </p> </div>
      <div className=''>
      <p className='text-2xl font-base3 '>
      Built with <span className='text-[#ff8906] outline-8  text-3xl animate-pulse items-center mt-10 '>  ♡  </span> by Onkar Surwase
      </p>
      </div>
      
      
      <Link to={'/contact'}
             className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
                                >
              <div className='text-2xl font-base3 underline '> Contact </div> 
       </Link>
    </div>
    </div>
  )
}

export default Footer
