// src/ToggleButton.js
import React, { useState } from 'react';

const ToggleButton = () => {
  const [isToggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled(!isToggled);
  };

  return (
    <div onClick={handleToggle}>
        {
            isToggled ? ( 
          <div className='flex flex-row font-base border-[2px]
             border-[#fffffe] ml-[5rem] rounded-2xl
              shadow-[5px_5px_#00625A66,_10px_10px_#00625A66,_15px_15px_#00625A33,_20px_20px_#00625A1A,_25px_25px_#00625A0D]'>
              <p className='text-[#fffffe] p-1  rounded-2xl   '> Onkar </p>
              <p className='text-[#ff8906] pl-[12px] flex items-center pr-[5px] '>surwase</p>
          </div>)
            :(
           <div className='flex flex-row font-base  ml-[5rem] '>
             <p className='text-[#ff8906] p-1  rounded-2xl '> Onkar </p>
             <p className='text-[#fffffe] pl-[12px] flex items-center pr-[5px] '>surwase</p>
          </div>)
        }
    </div>
  );
};

export default ToggleButton;

