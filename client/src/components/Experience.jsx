import React from 'react';

import cd from '../PORTFOLIO/coreldraw.png';
import ps from '../PORTFOLIO/photoshop.png';
import ai from '../PORTFOLIO/illustrator.png';
import id from '../PORTFOLIO/indesign.png';

const Experience = () => {
  const designsoftware = [
    {
      id: 1,
      src: cd,
      title: 'CORELDRAW',
      style: 'shadow-green-500',
    },
    {
      id: 2,
      src: ps,
      title: 'ADOBE PHOTOSHOP',
      style: 'shadow-blue-800',
    },
    {
      id: 3,
      src: ai,
      title: 'ADOBE ILLUSTRATOR',
      style: 'shadow-amber-400',
    },
    {
      id: 4,
      src: id,
      title: 'ADOBE INDESIGN',
      style: 'shadow-pink-700',
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-blue-800 to bg-blue-950 h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-3xl font-bold border-b-4 border-amber-300 text-amber-300 p-2 inline">
            Experience
          </p>
          <p className="py-6">
            These are the softwares that I am proficient with.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-2 gap-8 text-center py-8 px-12 sm:px-0">
          {designsoftware.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto " />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
