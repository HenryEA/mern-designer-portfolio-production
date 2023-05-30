import React from "react";
import A from '../PORTFOLIO/A.jpg'
import B from '../PORTFOLIO/B.jpg'
import C from '../PORTFOLIO/C.jpg'
import D from '../PORTFOLIO/D.jpg'
import E from '../PORTFOLIO/E.jpg'
import F from '../PORTFOLIO/F.jpg'
import G from '../PORTFOLIO/G.jpg'
import H from '../PORTFOLIO/H.jpg'

const Portfolio = () => {

const portfolios = [
    {
        id: 1,
        src: A
    },
    {
        id: 2,
        src: B
    },
    {
        id: 3,
        src: C
    },
    {
        id: 4,
        src: D
    },
    {
        id: 5,
        src: E
    },
    {
        id: 6,
        src: F
    },
    {
        id: 7,
        src: G
    },
    {
        id: 8,
        src: H
    },
]

  return <div name="portfolio" className="bg-gradient-to-b from-blue-800 to bg-blue-950 w-full text-white md:h-screen">
    
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pt-20">
                    <p className="text-3xl font-bold inline border-b-4 border-amber-300 text-amber-300 pt-20">
                        Portfolio
                    </p>
                    <p className="py-4">
                        Check out some of my work right here
                    </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 px-12 sm:px-0">

            {
                portfolios.map(({id, src}) => (

                    <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                        <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />
                        <div className="flex items-center justify-center">
                        
                        </div>
                    </div>
           
                ))
            }
             </div>
    </div>
  </div>;
};

export default Portfolio;
