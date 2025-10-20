import React from 'react';
import DesignerImage from '../PORTFOLIO/pic.jpg';
import { HiArrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import SocialLinks from './SocialLinks';

const Home = () => {
  return (
    <div
      name="home"
      className=" h-screen bg-gradient-to-b from-blue-800 to bg-purple-900 "
    >
      <SocialLinks />
      <div className=" max-w-screen-lg h-auto mx-auto flex flex-col items-center align-center justify-center px-4 md:flex-row md:justify-center md:pt-20 md:mt-20 sm:flex-col sm:h-auto lg:pt-20">
        <div className="flex flex-col h-full md:pt-10 md:pl-10 ml-5">
          <h2 className="w-full text-4xl sm:text-6xl pt-20 mt-5 font-bold  text-white md:pt-0 ">
            <TypeAnimation
              sequence={['GRAPHICS DESIGNER', 2000]}
              speed={2}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </h2>
          <p className="text-gray-300 py-1 max-w-md">
            I have 4 years of experience in creating various kinds of flyers and
            illustrations as well as creating beautiful effects on images and
            designs. I love to work with Photoshop and CorelDraw.
          </p>
          <div>
            <Link
              to="/portfolio"
              smooth
              duration={500}
              className=" group text-white w-fit px-6 py-3 my-1 flex items-center rounded-md bg-gradient-to-r from-amber-300 to-yellow-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={DesignerImage}
            alt="my profile"
            className="h-auto rounded-2xl mx-auto w-2/3 md:w-full sm:max-w-xs md:pt-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
