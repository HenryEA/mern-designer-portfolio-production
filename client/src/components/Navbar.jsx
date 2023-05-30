import React from 'react';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: 'home',
    },
    {
      id: 2,
      link: 'about',
    },
    {
      id: 3,
      link: 'portfolio',
    },
    {
      id: 4,
      link: 'experience',
    },
    {
      id: 5,
      link: 'contact',
    },
    {
      id: 6,
      link: 'logout',
    },
  ];
  return (
    <div className="top-0 mt-0 flex justify-between items-center w-full h-20 px-4 bg-gradient-to-b from-black to-gray-900 text-gray-200 fixed">
      <div>
        <h1 className="text-3xl lg:text-5xl font-signature mr-2">
          Henry Anene
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:text-gray-100 hover:scale-105 duration-200"
          >
            <Link to={link}>{link}</Link>
          </li>
        ))}
        {/* <li>
          <button
            type="button"
            className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:text-gray-100 hover:scale-105 duration-200"
            onClick={logoutUser}
          >
            Logout
          </button>
        </li> */}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-400 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-blue-800 to-purple-900 text-gray-200">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
