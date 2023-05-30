import React from 'react';
import main from '../assets/image/main.svg';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-blue-800 to bg-purple-900 flex flex-col ">
      <nav className="top-0 mt-0 flex justify-between items-center w-full h-20  bg-gradient-to-b from-black to-gray-900 text-gray-200 fixed">
        <div>
          <h1 className="text-5xl font-signature  ml-2">Henry Anene</h1>
        </div>
      </nav>

      <div className="mt-10 pt-10  h-screen px-8 ">
        <div className="w-full mb-8 py-6">
          <h2 className="text-xl text-blue-100 py-3 uppercase">
            I am a Graphics Designer
          </h2>
          <h2 className="text-5xl text-white font-bold">
            Welcome to my Portfolio website
          </h2>
        </div>

        <div className="w-full text-white">
          <div>
            <p className="text-lg pb-4">Please proceed to Login or Register</p>
            <div>
              <Link to="/register">
                <button className="bg-gradient-to-r from-pink-600 to-orange-600 py-3 px-6 text-lg rounded-md w-48">
                  Login/Register
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <img
        src={main}
        alt="Portfolio"
        className="h-auto mx-auto w-2/3  sm:max-w-xs lg:max-w-sm  my-2 lg:mb-20 lg:pb-10 lg:w-f"
      />
    </div>
  );
}

export default Landing;
