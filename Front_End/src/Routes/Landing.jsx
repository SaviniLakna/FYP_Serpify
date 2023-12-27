import React from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import Hero1 from "../Assets/Images/hero1.jpg";
import Snake from "../Assets/Images/snake.png";
import Snake2 from "../Assets/Images/snake2.png";
import { CenterFocusStrong, Upload, NavigateNext } from "@mui/icons-material";

import Rescure from "../Assets/Images/rescure.png";
import Heart from "../Assets/Images/heart.png";
import Hospital from "../Assets/Images/hospital.png";

function Landing() {


  const whatWeDoList=[
    {
      title:'Snake Identification',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, explicabo!',
      wwdicon: Snake,
    },
    {
      title:'Rescuer details',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, explicabo!',
      wwdicon: Rescure,
    },
    {
      title:'Provide First Aid ',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, explicabo!',
      wwdicon: Heart,
    },
    {
      title:'Nearest Hospitals ',
      description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, explicabo!',
      wwdicon: Hospital,
    }
  ]

















  return (
    <div className="w-full h-screen ">
      <Nav />

      <div className="body-wrapper w-full overflow-x-hidden">
        {/* hero content */}
        <div className="hero-wrapper w-full h-full object-cover">
          <div className="hero-layout w-full h-full absolute bg-gray-950 bg-opacity-70 justify-center items-center">
            <div className="hero-caption p-5 md:w-[60%] w-full mx-auto relative top-1/2  -translate-y-1/2 leading-none uppercase flex flex-col space-y-5 text-center">
              <h2 className="hero-heading text-white font-bold md:text-[3rem] text-[1.8rem] text-center drop-shadow-2xl">
                Empower Yourself to{" "}
                <span className="text-[#8EA604]">Identify Snakes</span> Around
                You Within A Minute
              </h2>
              <p className="text-[14px] font-light text-white italic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                adipisci.
              </p>
              <div className="mt-5 button-section justify-center md:space-x-5 space-y-5 md:space-y-0 flex md:flex-row flex-col">
                <button
                  className=" rounded-full bg-gradient-to-r from-[#2C6E49] to-[#8EA604]
                shadow-2xl shadow-[#8EA604]
                text-white text-[14px] font-semibold uppercase px-4 py-4 btn border-[1px] border-[#8EA604]"
                >
                  <Upload /> Upload an Image
                </button>
                <button className=" bg-white rounded-full border-[1px] border-[#8EA604] text-[#2C6E49] text-[14px] font-semibold uppercase px-4 py-4  backdrop-blur-sm">
                  <CenterFocusStrong /> Capture an Image
                </button>
              </div>
            </div>
          </div>
          <img
            src={Hero1}
            alt='"Hero1'
            className="w-full h-screen object-cover"
          ></img>
        </div>
        {/* hero content */}

        <div className="body-content mt-10 w-full">
          <div className="body w-full">
            {/* Who we are */}
            <div className="md:w-[80%] w-[95%] flex md:flex-row flex-col mx-auto ">
              <div className="section-intro md:w-1/2 w-full p-5 flex flex-col space-y-5 md:text-left text-center items-center md:items-start">
                <h5 className="subheading text-[16px] uppercase text-[#2C6E49] font-semibold">
                  Who we are
                </h5>
                <h2 className="mainheading md:text-[2rem] text-[1.5rem] uppercase font-bold">
                  Connecting Humans and Serpents for Mutual Safety.
                </h2>
                <p>
                  In the heart of Sri Lankan residential areas, Serpify takes on
                  the unique challenge of accurate snake identification. We use
                  cutting-edge technology to ensure the safety of both humans
                  and serpents, fostering coexistence and harmony. Join us on
                  this journey to learn how to identify, assess, and respond to
                  snake encounters, creating a safer, more understanding world.
                </p>
                <button
                  className=" rounded-full bg-gradient-to-r from-[#2C6E49] to-[#8EA604]
                w-[168px]
                text-white text-[14px] font-semibold uppercase px-4 py-4 btn border-[1px] border-[#8EA604] flex justify-center items-center space-x-3"
                >
                  Learn More <NavigateNext />
                </button>
              </div>
              <div className="section-Image md:w-1/2 w-full">
                <img src={Snake2} alt="snake2" className="Snake2"/>
              </div>
            </div>
            {/* Who we are */}

            {/* Our Vision and Mission Statement */}
            <div className="md:w-[80%] w-[95%] flex md:flex-row flex-col mx-auto md:space-x-3 mt-10 relative">
              <div className="md:w-5/12 w-full p-5 flex flex-col space-y-5 md:text-left text-center">
                <h5 className="subheading text-[16px] uppercase text-[#2C6E49] font-semibold">
                  Our Mission
                </h5>
                <h2 className="mainheading md:text-[2rem] text-[1.5rem] uppercase font-bold">
                  Connecting Humans and Serpents for Mutual Safety.
                </h2>
                <p>
                  In the heart of Sri Lankan residential areas, Serpify takes on
                  the unique challenge of accurate snake identification. We use
                  cutting-edge technology to ensure the safety of both humans
                  and serpents, fostering coexistence and harmony. Join us on
                  this journey to learn how to identify, assess, and respond to
                  snake encounters, creating a safer, more understanding world.
                </p>
              </div>
              <div className="w-2/12 p-5 md:flex hidden justify-center items-center ">
                <div className="w-[45px] h-[220px] bg-[#2C6E49] "></div>
              </div>
              <div className="md:w-5/12 w-full md:p-5 flex flex-col space-y-5 md:text-left text-center">
                <h5 className="subheading text-[16px] uppercase text-[#2C6E49] font-semibold">
                  Our Vision
                </h5>
                <h2 className="mainheading md:text-[2rem] text-[1.5rem] uppercase font-bold">
                  Connecting Humans and Serpents for Mutual Safety.
                </h2>
                <p>
                  In the heart of Sri Lankan residential areas, Serpify takes on
                  the unique challenge of accurate snake identification. We use
                  cutting-edge technology to ensure the safety of both humans
                  and serpents, fostering coexistence and harmony. Join us on
                  this journey to learn how to identify, assess, and respond to
                  snake encounters, creating a safer, more understanding world.
                </p>
              </div>
            </div>
            {/* Our Vision and Mission Statement */}

            {/* What we do */}
            <div className="lg:w-[80%] w-[95%] flex flex-col mx-auto mt-[56px]">
              <div className="section-intro w-full p-5 flex flex-col space-y-5 text-center">
                <h5 className="subheading text-[16px] uppercase text-[#2C6E49] font-semibold">
                  What we do
                </h5>
                <h2 className="mainheading md:text-[2rem] text-[1.5rem] uppercase font-bold">
                  Discover, Learn, and Protect.
                </h2>
              </div>

              <div className="w-full flex md:flex-row md:space-x-5 space-x-0 flex-wrap mt-5 mb-5 mx-auto justify-center ">
                

{whatWeDoList.map((whatwedo, index) => (
  
  <div className="md:w-2/12 w-1/2 p-1" key={index}>
                  <div className="w-full rounded-lg border-[1px] border-[#2C6E49] flex flex-col p-5  items-center ">
                  <div className="w-[64px] h-[64px] relative mb-3">
                    <img
                      src={whatwedo.wwdicon}
                      alt="Rescure"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h4 className="text-[#2C6E49] font-semibold uppercase text-center">
                    {whatwedo.title}
                  </h4>
                  <p className="text-center">
                    {whatwedo.description}
                  </p>
                  </div>
                 
              </div>


))}



              </div>
            </div>
            {/* What we do */}
          </div>
        </div>
      </div>

      <Footer/>

    </div>
  );
}

export default Landing;
