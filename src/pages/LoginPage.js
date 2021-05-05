import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import Loading from '../components/Loading';

const LoginPage = () => {
  const {loginWithPopup, isLoading} = useAuth0();

  const handleLogin = () => {
    loginWithPopup();
  };

  return isLoading ? (
    <Loading />
  ) : (
    <div className="h-screen text-gray-400 bg-gray-900 body-font flex justify-center items-center">
      <div className="w-5/6 sm:w-2/3 md:w-1/2 lg:w-1/4 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col">
        <h2 className="text-white text-lg font-medium title-font mb-5">
          Sign In with Auth0
        </h2>
        <button
          className="text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg"
          onClick={handleLogin}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
