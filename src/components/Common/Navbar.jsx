import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai"
import Mobilenav from './Mobilenav';
import { Link } from 'react-router-dom';
import logo from '../../assets/onkar.png'
import ToggleButton from './ToggleButton';
const Navbar = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const navbarItems = [
    { id: 1, title: 'Home', path: '/' },
    { id: 2, title: 'Projects', path: '/projects' },
    { id: 3, title: 'About', path: '/about' },
    { id: 4, title: 'Contact', path:'/contact' },
  ];
//   <div className='flex flex-row font-base border-[2px] border-[#fffffe] ml-[5rem] rounded-2xl'><p className='text-[#fffffe] p-1  rounded-2xl '> Onkar </p><p className='text-[#ff8906] pl-[12px] flex items-center pr-[5px] '>surwase</p></div>
  return (
    <nav className="flex w-11/12 max-w-maxContent items-center justify-between pt-[2rem] bg-transparent">
   <Link to={'/'}>
   <div className='lg:ml-[2rem]'><img src={logo} alt='logo' width={300} height={100}/></div>
   </Link>
      <div className="hidden md:block container mx-auto">
        <div className="flex justify-end font-base ">
        <ul className="flex space-x-4">
            {navbarItems.map((item) => (
              <li key={item.id}>
                <a
                  className={`text-[#fffffe] hover:text-[#ff8906] ${activeItem === item.id ? 'underline' : ''}`}
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
      <div  className='md:hidden z-10 flex justify-end'>
       <Mobilenav/>
  </div>
    </nav>
  );
};

export default Navbar;
