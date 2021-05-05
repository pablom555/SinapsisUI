import React from 'react';

const Loading = () => {
  return (
    <div className="h-screen text-gray-400 bg-gray-900 body-font flex justify-center items-center">
      <div className="loader p-5  flex justify-center space-x-3">
        <div className="w-5 h-5 bg-pink-500 rounded-full animate-bounce"></div>
        <div className="w-5 h-5 bg-pink-500 rounded-full animate-bounce"></div>
        <div className="w-5 h-5 bg-pink-500 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

export default Loading;
