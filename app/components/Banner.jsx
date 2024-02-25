import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
      <div className ="">
        <div className="md:h-[80vh] mt-5 w-full text-center opacity-75 grid bg-contain bg-[url('https://web.programming-hero.com/home/_next/image?url=%2Fhome%2Flevel2Home%2Fimages%2FwhyThisCourse%2Fbg-right.png&w=640&q=75')]">
          <div className="col-start-1 row-start-1 bg-black bg-opacity-20 h-full"></div>
          <div className="col-start-1 w-screen row-start-1 mx-auto my-auto">
            <h1 className="lg:text-7xl md:text-5xl text-3xl font-bold mb-4 text-white">Amader UI</h1>
            <p
              className="text-white font-bold
             md:text-2xl text-[16px] lg:text-3xl w-[75%] md:w-[60%] mx-auto md:mb-4 p-5"
            >
              Our site features interactive learning modules that allow you to
              learn at your own pace and in a way that works best for you.
            </p>
            <button className="p-5 font-bold mb-5 rounded-full bg-blue-800 text-white border-none">
              <Link href={"#"}>Let's Explore</Link>
            </button>
          </div>
        </div>
      </div>
    );
};

export default Banner;