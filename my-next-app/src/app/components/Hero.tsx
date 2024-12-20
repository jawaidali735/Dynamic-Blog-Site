"use client"

import Typed from 'typed.js';
import React, {useEffect} from 'react'
import Link from 'next/link';

const Hero = () => {
    const el = React.useRef(null);
  
    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['Exploring World', 'Startups and Technology', 'Lifestyle Tips'],
        typeSpeed: 50,
      });
  
      return () => {
     
        typed.destroy();
      };
    }, []);
  return (
    <div className="dark:bg-gray-900">
    <div className="Toastify"></div>
    <div className="flex bg-white h-96 container mx-auto dark:bg-gray-900">
       
        <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
            <div>
                <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl dark:text-white">
                    Welcome to 
                    <span className="text-purple-700 dark:text-purple-600"> Vibe With Jawaid</span>
                </h2>
                <h4 className="text-xl font-semibold text-gray-800 md:text-2xl dark:text-white">
                    Start
                    <span className="text-purple-700 dark:text-purple-600"> <span ref={el}/></span>
                </h4>
                <p className="mt-2 text-sm text-gray-500 md:text-base dark:text-gray-400">
                Confused about where to start? I’ve got you covered. Dive into the world of Startups, explore the latest in Technology, or discover tips to enhance your Lifestyle.
                    <span className="font-semibold"> Vibe With Jawaid</span>  my platform to share valuable knowledge and insights that can inspire and guide you, all in one place.
                </p>
                <div className="flex justify-center lg:justify-start mt-6">
                    <Link href='/contact'>
                    <button className="px-3 py-2 lg:px-4 lg:py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:text-white hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-600 dark:hover:bg-gray-300">
                        Contact Us
                    </button>
                    </Link>

                    <Link href='/blog'>
                    <button className="px-3 py-2 mx-4 lg:px-4 lg:py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400">
                        Explore Blog
                    </button> 
                    </Link>
                   
                </div>
            </div>
        </div>
        
        <div className="hidden lg:block lg:w-1/2" 
             style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%)' }}>
            <div className="h-full bg-cover bg-center relative" 
                 style={{ backgroundImage: "url('/hero.jpg')" }}>
                <div className="h-full bg-black opacity-25 absolute inset-0"></div>
            </div>
        </div>
    </div>
</div>

  )
}

export default Hero
