import React from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import Hero from "../Assets/Images/resc.jpg";
import RescuresDB from "../Assets/Data/RescuresDB";

import { CenterFocusStrong, Upload, NavigateNext } from "@mui/icons-material";

import FirstAidTab from "../Components/FirstAidTab";





function FirstAids() {
  const rescureData = RescuresDB;

  return (
    <div className="w-full h-screen">
      <Nav />

      <div className="body-wrapper w-full">


        <div className="hero-wrapper_sub w-full md:h-1/3  relative  bg-slate-700">
          <div className="hero-layout w-full h-full absolute bg-gray-950 bg-opacity-70 justify-center items-center">
            {" "}
          </div>
          <img
            src={Hero}
            alt='"Hero'
            className="w-full h-full object-cover"
          ></img>
        </div>





        <div className="w-full md:p-10 p-3 border-b-[1px] border-[#565656] border-opacity-10 flex flex-row justify-start items-center space-x-3">
          <h5> Home </h5> <NavigateNext /> <h5>First Aids</h5>
        </div>

        <div className="lg:w-[80%] w-[95%] mx-auto md:mt-[68px] mt-[24px]">
      <FirstAidTab/>

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default FirstAids;
