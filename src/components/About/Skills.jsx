import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import s1 from "../../assets/s1.png";
import s2 from "../../assets/s2.png";
import s4 from "../../assets/s4.png";
import s5 from "../../assets/s5.png";
import s6 from "../../assets/s6.png";
import s7 from "../../assets/s7.png";
import s8 from "../../assets/s8.png";
import s9 from "../../assets/s9.png";
import s10 from "../../assets/s10.png";
import s11 from "../../assets/s11.png";
import s12 from "../../assets/s12.png";
import s13 from "../../assets/s13.png";
import s14 from "../../assets/s14.png";
import s15 from "../../assets/s15.png";
import s16 from "../../assets/s16.png";
import s17 from "../../assets/s17.png";



const Skills = () => {
  const swipItems = [
    { id: 1, image: s1 },
    { id: 2, image: s2 },
    { id: 3, image: s8 },
    { id: 4, image: s4 },
    { id: 5, image: s5 },
    { id: 6, image: s6 },
    { id: 7, image: s7 },
    { id: 8, image: s8 },
    { id: 9, image: s9 },
    { id: 10, image: s10 },
    { id: 11, image: s11 },
    { id: 12, image: s12 },
    { id: 13, image: s13 },
    { id: 14, image: s14 },
    { id: 15, image: s15 },
    { id: 16, image: s16 },
    { id: 17, image: s17 },
  ];

  return (
    <div className="text-white  my-[50px] h-[220px] max-w-maxContent">
    
    <div className='flex items-center justify-center text-3xl font-base2 text-[#fffffe] mb-[6rem] underline'> Skills and Tools </div>
    <Swiper
      slidesPerView={4}
          spaceBetween={25}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="w-full "
    >
      {swipItems.map((item,id) => (
     <SwiperSlide key={id} className="flex justify-center items-center w-[200px] h-[200px]">
       
          <img
            src={item.image}
            alt={`Image ${item.id}`}
            className="w-full  lg:w-[40%] lg:h-[40%]  mx-auto"
          />
       
      </SwiperSlide>
      ))}
    </Swiper>
  </div>
  );
};

export default Skills;


 