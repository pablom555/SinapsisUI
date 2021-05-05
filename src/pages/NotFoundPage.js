import React from 'react';
import {useHistory} from 'react-router-dom';

const NotFoundPage = () => {
  const history = useHistory();

  return (
    <div className="h-screen text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex justify-center items-center flex-col h-full">
        <h2 className="text-7xl sm:text-9xl text-pink-400 tracking-widest font-bold title-font mb-1">
          404
        </h2>
        <h1 className="text-xl sm:text-3xl font-medium title-font text-white">
          Not Found
        </h1>
        <p className="mt-3 text-base sm:text-lg px-3 text-center">
          The resource requested could not be found on this server!
        </p>

        <div className="mt-10">
          <button
            className="bg-gray-800 inline-flex py-2 sm:py-3 px-3 sm:px-5 rounded-lg items-center hover:bg-gray-700 hover:bg-opacity-50 focus:outline-none"
            onClick={() => history.push('/')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-6 sm:w-8 h-6 sm:h-8 text-white p-1 bg-pink-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="title-font font-medium text-base sm:text-xl ml-3">
              Home
            </span>
          </button>
        </div>
      </div>
    </div>
  );

};

export default NotFoundPage;
