import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
        <div>
        <div className="md:h-[80vh] text-center opacity-75 grid bg-contain bg-[url('/Banner.jpg')]">
            <div className="col-start-1 row-start-1 bg-black bg-opacity-20 h-full"></div>
            <div className="col-start-1 w-screen row-start-1 mx-auto my-auto">
                <h1 className='text-7xl font-bold mb-7 text-white'>Amader UI</h1>
                <p className='text-white font-bold
             text-3xl mb-5 p-5'>Our site features interactive learning modules that allow you to learn at your own pace and in a way that works best for you.</p>
                <button className='p-5 font-bold mb-5 rounded-full bg-blue-800 text-white border-none'><Link href={'#'}>Let's Explore</Link></button>
            </div>
        </div>
    </div>
    );
};

export default Banner;