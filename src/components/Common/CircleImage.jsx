import React from 'react';
import s1 from "../../assets/s1.png";
import s2 from "../../assets/s2.png";
import s3 from "../../assets/s3.png";
import s4 from "../../assets/s4.png";
import s5 from "../../assets/s5.png";
import s6 from "../../assets/s6.png";
import s7 from "../../assets/s7.png";
import s8 from "../../assets/s8.png";

const CircleImage = () => {
    const swipItems = [
        { id: 1, image: s1 },
        { id: 2, image: s2 },
        { id: 3, image: s3 },
        { id: 4, image: s4 },
        { id: 5, image: s5 },
        { id: 6, image: s6 },
        { id: 7, image: s7 },
        { id: 8, image: s8 },
      ];
  const numberOfImages = 6; // Change this number to add more or fewer images
  const images = [];

  for (let i = 0; i < numberOfImages; i++) {
    const rotationAngle = (360 / numberOfImages) * i;
    images.push(
      <div
        key={i}
        className="absolute w-16 h-16 rounded-full border-2 border-blue-500"
        style={{ transform: `rotate(${rotationAngle}deg)` }}
      >
        <img
          className="w-full h-full rounded-full object-cover"
          src="path/to/your/image.jpg"
          alt={`Circle Image ${i + 1}`}
        />
      </div>
    );
  }

  return (
    <div className="relative h-screen flex justify-center items-center">
      {images}
    </div>
  );
};

export default CircleImage;

