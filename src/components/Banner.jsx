import React from 'react';
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
const Banner = () => {
    return (
        <div
        className="hero h-[250px] "
        style={{
            backgroundImage: "url('/image/Background image 1.jpg')",
          }}>
        <div className=""></div>
        <div className="hero-content text-white text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Construction
            </h1>
            <div className="mb-5 flex items-center gap-2 text-xl">
             <h2>Home</h2> <MdOutlineKeyboardDoubleArrowRight /><h2>Industry</h2> <MdOutlineKeyboardDoubleArrowRight /><h2>Construction</h2>    
            </div>
          
          </div>
        </div>
      </div>
    );
};

export default Banner;