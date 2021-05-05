import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {container} from './../config/motion.config';

const Header = () => {
  const {logout, user} = useAuth0();
  console.log(user);

  return (
    <header className="bg-gray-900 body-font" style={{height: '10%'}}>
      <motion.div
        className="flex items-center justify-between p-5"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <Link
          to={'/'}
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-pink-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Thumbnail UI</span>
        </Link>
        <div className="flex">
          <img src={user.picture} alt="avatar" className="rounded-full w-10 mr-4"></img>
          <button
            className="bg-gray-800 border-0 py-2 px-2 focus:outline-none hover:bg-gray-700 text-pink-500 hover:text-gray-400 rounded"
            onClick={() => logout()}
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
