import React, { useState, useEffect } from "react";

import Logo from "../Assets/Images/logo.png";

function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 100;
      setIsScrolled(scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  
  return (
    <div
      className={`nav-wrapper w-full flex justify-center items-center fixed top-0 z-10 transition-all duration-300 ${
        isScrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="nav-body p-5 lg:w-[60%] sm:w-2/3 flex flex-row justify-between mx-auto">
        <div className="logo lg:w-1/3 sm:w-1/3 w-1/3">
          <div className="relative lg:w-[140px]">
            <img
              src={Logo}
              alt='"logo'
              className="w-full h-full object-cover"
            ></img>
          </div>
        </div>
        <div className="links w-full justify-center text-center flex items-center space-x-5">
          <ul className={`flex flex-row space-x-5 
          ${ isScrolled ? "text-[#3d3d3d]": "text-white"}`}>
            <li className="text-[14px] uppercase">Find Rescure</li>

            <li className="text-[14px] uppercase">Hospitals nearby</li>

            <li className=" text-[14px] uppercase">First Aids</li>
          </ul>

          <button className="lg:w-[128px] rounded-full bg-gradient-to-r from-[#2C6E49] to-[#8EA604] text-white text-[14px] font-semibold uppercase px-4 py-2 ">
            Try Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
