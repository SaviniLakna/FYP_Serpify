import React, { useState, useEffect , useRef} from "react";
import Logo from "../Assets/Images/logo.png";
import { Link } from "react-router-dom";
import {
  CenterFocusStrong,
  Upload,
  NavigateNext,
  Menu,
} from "@mui/icons-material";

import Rescure from "../Assets/Images/rescure.png";
import Heart from "../Assets/Images/heart.png";
import Hospital from "../Assets/Images/hospital.png";

function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 10;
      setIsScrolled(scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };


  const navWrapperRef = useRef(null);
  const sideNavRef = useRef(null);

  useEffect(() => {
    const navWrapperHeight = navWrapperRef.current.clientHeight;
    sideNavRef.current.style.marginTop = `${navWrapperHeight}px`;
  }, []);



  return (

    <div className="w-full flex flex-col relative">
    <div
      className={`nav-wrapper w-full flex justify-center items-center fixed top-0 z-10 transition-all duration-300 flex-col ${
        isScrolled ? "bg-white" : "bg-transparent"
      }`}

      ref={navWrapperRef}
    >
      <div className="nav-body p-5 lg:w-[60%] sm:w-2/3 flex flex-row justify-between mx-auto ">
        <div className="logo lg:w-1/3 sm:w-1/3 w-1/4 ">
          <div className="relative lg:w-[140px]">
            <Link to="/">
              <img
                src={Logo}
                alt='"logo'
                className="w-full h-full object-cover"
              ></img>
            </Link>
          </div>
        </div>
        <div className="links w-full justify-center text-center md:flex items-center space-x-5 hidden">
          <ul
            className={`flex flex-row space-x-5 
          ${isScrolled ? "text-[#3d3d3d]" : "text-white"}`}
          >
            <Link to="/Rescure">
              <li className="text-[14px] uppercase cursor-pointer">
                Find Rescure
              </li>
            </Link>

            <Link to="/Hospitals">
              <li className="text-[14px] uppercase cursor-pointer">
                Hospitals nearby
              </li>
            </Link>

            <Link to="/FirstAids">
            <li className=" text-[14px] uppercase cursor-pointer">
              First Aids
            </li>
            </Link>
          </ul>

          <button className="lg:w-[128px] rounded-full bg-gradient-to-r from-[#2C6E49] to-[#8EA604] text-white text-[14px] font-semibold uppercase px-4 py-2 ">
            Try Now
          </button>
        </div>
        <div className="md:hidden flex justify-center items-center w-1/4 ">
          <button
            className={`${isScrolled ? "text-[#3d3d3d]" : "text-[#fafafa]"}`}
            onClick={toggleMobileMenu}
          >
            <Menu />
          </button>
        </div>
      </div>

      
    </div>

    <div className="Sidemenu-row fixed z-10 w-full " ref={sideNavRef}>
    <div
        className={`mobile-menu bg-white w-full md:hidden ${
          isMobileMenuOpen ? "show" : ""
        }`}
      >
        <ul className="space-y-5 flex flex-col">
          <Link to="/Rescure" onClick={toggleMobileMenu}>
            <div className="w-full flex flex-row justify-start space-x-3">
              <div className="w-[18px] h-[18px] relative ">
                <img
                  src={Rescure}
                  alt="Rescure"
                  className="w-full h-full object-contain"
                />
              </div>
              <li className="text-[14px] uppercase cursor-pointer">
                Find Rescure
              </li>
            </div>
          </Link>

          <Link to="/Hospitals" onClick={toggleMobileMenu}>
            <div className="w-full flex flex-row justify-start space-x-3">
              <div className="w-[18px] h-[18px] relative ">
                <img
                  src={Hospital}
                  alt="Hospital"
                  className="w-full h-full object-contain"
                />
              </div>
              <li className="text-[14px] uppercase cursor-pointer">
                Hospitals nearby
              </li>
            </div>
          </Link>

          <Link to="/FirstAids" onClick={toggleMobileMenu}>
            <div className="w-full flex flex-row justify-start space-x-3">
              <div className="w-[18px] h-[18px] relative ">
                <img
                  src={Heart}
                  alt="Heart"
                  className="w-full h-full object-contain"
                />
              </div>
              <li className="text-[14px] uppercase cursor-pointer">
                First Aids
              </li>
            </div>
          </Link>
        </ul>
      </div>
    </div>
    </div>
   
  );
}

export default Nav;
