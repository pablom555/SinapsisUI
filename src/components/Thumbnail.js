import React from 'react';
import {motion} from 'framer-motion';
import {container} from './../config/motion.config';

const Thumbnail = ({thumbnail}) => {
  return (
    <motion.div
      className="w-2/5 sm:w-1/4 m-4 rounded-lg border-solid border-4 border-pink-500 overflow-hidden relative"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <img
        src={thumbnail.url}
        alt=""
        className="w-full object-cover object-center opacity-50 hover:opacity-100 focus:opacity-100 transition duration-500 transform hover:-translate-y-3 hover:scale-150 cursor-pointer"
      />
      <span className="absolute z-10 top-1 left-3 text-xs md:text-base text-gray-900 ">
        {thumbnail.url}
      </span>
    </motion.div>
  );
};

export default Thumbnail;
