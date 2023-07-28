import React from 'react';
import { motion } from 'framer-motion';
import banner from "../../assets/banner.png";
const Card = () => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-4 w-64"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
       <div class="border-3 border-gray-600 border-b-gray-900 rounded-lg shadow-lg overflow-hidden">
    <img src={banner} alt="Image" class="w-full h-auto"/>
   
    </div>
    </motion.div>
  );
};

export default Card;
