'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
    const [show, setShow] = useState(false)
    
    return (
        <div className='flex justify-between px-5 lg:px-10 py-2'>
            <div>
                <h1 className='lg:text-2xl font-semibold'>Amader UI</h1>
            </div>
            <div>
                <div className='relative lg:hidden'>
                    <svg onClick={()=>setShow(!show)} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                    <ul className={show ? 'absolute right-0 rounded-lg list-none font-medium text-lg bg-white p-4':'hidden'}>
                        <Link href={'/'}><li>Home</li></Link>
                        <li>Components</li>
                        <li>Docs</li>
                        <li>About</li>
                        <li>Contact</li>
                        
                    </ul>
                </div>
                <div className='hidden lg:block'>
                    <ul className='list-none font-medium text-lg flex gap-5'>
                        <li className='active:underline'>Home</li>
                        <li className='active:underline'>Components</li>
                        <li className='active:underline'>Docs</li>
                        <li className='active:underline'>About</li>
                        <li className='active:underline'>Contact</li>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;