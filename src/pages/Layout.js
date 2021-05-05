import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({children}) => {
  return (
    <div className="h-screen overflow-x-hidden text-gray-400 bg-gray-900 body-font">
      <Header />
      <div className="flex justify-center items-center" style={{height: '80%'}}>
        <div className="flex flex-col sm:flex-row justify-center items-center w-full">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
