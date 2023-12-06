import React from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import Hero from "../Assets/Images/resc.jpg";
import RescuresDB from "../Assets/Data/RescuresDB";
import Snake1 from "../Assets/testpredictions/snake1.jpg";

import { CenterFocusStrong, Upload, NavigateNext } from "@mui/icons-material";

function PredictResult() {
  return (
    <div className="w-full h-screen">
      <Nav />

      <div className="body-wrapper w-full">
        <div className="hero-wrapper w-full h-1/3 relative  bg-slate-700">
          <div className="hero-layout w-full h-full absolute bg-gray-950 bg-opacity-70 justify-center items-center">
            {" "}
          </div>
          <img
            src={Hero}
            alt='"Hero'
            className="w-full h-full object-cover"
          ></img>
        </div>
        <div className="w-full p-10 border-b-[1px] border-[#565656] border-opacity-10 flex flex-row justify-start items-center space-x-3">
          <h5> Home </h5> <NavigateNext /> <h5>Predict Result</h5>
        </div>

        <div className="w-[80%] mx-auto mt-[68px]">
          <div className="w-full flex md:flex-row flex-col ">
            <div className="flex flex-col space-y-3 md:w-1/3 w-full border-r-[1px] border-[#565656] border-opacity-10 ">
              <h4 className="text-[16px] font-semibold">Uploaded Image</h4>

              <div className=" md:w-[300px] md:h-auto relative">
                <img
                  src={Snake1}
                  alt="uploadedimage"
                  className="w-full h-full object-cover rounded-lg shadow-lg shadow-slate-400"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-3 md:w-2/3 w-full justify-start px-5">
              <h4 className="text-[16px] font-semibold">Prediction Result</h4>
            
                <table className="w-full">
                    <tr>
                        <td className="w-2/12 py-2 border-b-[1px] border-r-[1px] border-[#565656] border-opacity-10 ">නාමය</td>
                        <td className="w-10/12 py-2 border-b-[1px] border-[#565656] border-opacity-10 px-2">නාගයා</td>
                    </tr>
                    <tr>
                        <td className="w-2/12 py-2 border-b-[1px] border-r-[1px] border-[#565656] border-opacity-10">විෂ ස්වභාවය</td>
                        <td className="w-10/12 py-2 border-b-[1px] border-[#565656] border-opacity-10 px-2">උග්‍ර විෂ</td>
                    </tr>
                    <tr>
                        <td className="w-2/12 py-2 border-b-[1px] border-r-[1px] border-[#565656] border-opacity-10">උපරිම දිග</td>
                        <td className="w-10/12 py-2 border-b-[1px] border-[#565656] border-opacity-10 px-2">220 cm</td>
                    </tr>
                </table>
              
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PredictResult;
