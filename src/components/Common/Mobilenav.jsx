import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineShoppingCart,AiFillCloseCircle } from "react-icons/ai";
import { MdOutlineMenu } from "react-icons/md";
import { Link } from 'react-router-dom';

const Mobilenav = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };
  const [nav,setNav] = useState(false);
       
  const handleNav=()=>{
     setNav(!nav);}

     const navbarItems = [
      { id: 1, title: 'Home', path: '/' },
      { id: 2, title: 'Projects', path: '/projects' },
      { id: 3, title: 'About', path: '/about' },
      { id: 4, title: 'Contact', path:'/contact' },
    ];

  return (
    <div>
           <div onClick={handleNav} className='md:hidden z-10 flex justify-end'>
                  {
                    nav ? ( <AiFillCloseCircle
          size={20}
          className="bg-white mr-[16px] ml-[100px] flex items-center cursor-pointer"
        />):(<MdOutlineMenu size={20}
          className="bg-white mr-[16px] ml-[100px] flex items-center cursor-pointer"
        />)
                  } 
             </div>
  <div 
      onClick={handleNav}
       className={nav ?
       'overflow-y-hidden md:hidden ease-in duration-300 absolute z-100 text-[#fffffe] right-0 top-[64px] w-full h-[40%] backdrop-filter backdrop-blur-lg bg-transparent px-4 py-7 flex flex-col items-center gap-[12px] mr-[20px]  '
       :
       'absolute top-0 h-screen left-[-100%] '}>
         <div className="flex w-11/12 max-w-maxContent items-center justify-between pt-[2rem] bg-transparent">

      <div className=" container mx-auto ">
        <div className="flex justify-center font-base">
        <ul className="flex flex-col gap-1 text-xl ">
            {navbarItems.map((item) => (
              <li key={item.id}>
                <a
                  className={`text-grey-600 hover:text-[#ff8906] ${activeItem === item.id ? 'underline' : ''}`}
                  href={item.href}
                  onClick={() => handleItemClick(item.id)}
                >
                  <Link
                                  to={item.path}

                                  className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50"
                                >
                                  <p>{item.title}</p>
                                </Link>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
     
    </div>
       </div>

    </div>
  )
}

export default Mobilenav