import React, { useState, useEffect } from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import Hero from "../Assets/Images/resc.jpg";
import SnakeDB from "../Assets/Data/snakeDB";
import { NavigateNext } from "@mui/icons-material";
import { useLocation, useParams } from "react-router-dom";
import FullWidthTabs from "../Components/PredictionResultTab";

function PredictResult() {
  const { snakeId } = useParams();
  const { state } = useLocation();
  const file = state && state.file;
  const [imageUrl, setImageUrl] = useState(null);
  const [snakeData, setSnakeData] = useState(null);

  useEffect(() => {
    const foundSnakeData = SnakeDB.find((snake) => snake.snakeID === snakeId);

    if (foundSnakeData) {
      setSnakeData(foundSnakeData);

      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);

      return () => URL.revokeObjectURL(imageUrl);
    }
  }, [snakeData, file]);

  if (!snakeData) {
    return <div>Loading...</div>;
  }


  


  return (
    <div className="w-full h-screen">
      <Nav />

      <div className="body-wrapper w-full">
        <div className="hero-wrapper_sub w-full h-1/3 relative  bg-slate-700">
          <div className="hero-layout w-full h-full absolute bg-gray-950 bg-opacity-70 justify-center items-center">
            {" "}
          </div>

          <img
            src={Hero}
            alt='"Hero'
            className="w-full h-full object-cover"
          ></img>
        </div>
        <div className="w-full md:p-10 p-3 border-b-[1px] border-[#565656] border-opacity-10 flex flex-row justify-start items-center space-x-3 ">
          <h5> Home </h5> <NavigateNext /> <h5>Predict Result</h5>
        </div>

        <div className="md:w-[80%] w-[95%] mx-auto mt-[68px]">
          <div className="w-full flex md:flex-row flex-col ">
            <div className="flex flex-col space-y-3 md:w-1/3 w-full border-r-[1px] border-[#565656] border-opacity-10 ">
              <h4 className="text-[16px] font-semibold">Uploaded Image</h4>

              {imageUrl && (
                <div className=" md:w-[200px] lg:w-[300px]  md:h-auto relative">
                  <img
                    src={imageUrl}
                    alt="uploadedimage"
                    className="w-full object-cover rounded-lg shadow-lg shadow-slate-400"
                  />
                </div>
              )}
            </div>

            <div className="flex flex-col space-y-3 md:w-2/3 w-full justify-start px-5 mt-5 md:mt-0">
              <h4 className="text-[16px] font-semibold">Prediction Result</h4>

              <FullWidthTabs snakeIdentifiedData={snakeData} />

              
            </div>
          </div>

          <div className=" w-100 mt-[56px] ">
            <h2> Similar Ones </h2>

<div className="flex flex-wrap justify-center mx-auto ">
{snakeData.similarOnes.map((similarSnake, index) => (
           
            <div
              key={index}
              className="md:w-3/12 w-1/2 lg:w-2/12 relative rounded-md p-2 flex flex-col  "
            >
              <img
                src={similarSnake.image} 
                alt={similarSnake.name}
                className="w-full h-full object-cover rounded-lg shadow-lg shadow-slate-400"
              />
             
             <div className="   bg-opacity-80  text-[#161616] p-2">
                <p className="font-semibold">{similarSnake.name}</p>
                <p>Venom Level: {similarSnake.venomusLevel}</p>
              </div>

            </div>
            
          ))}
</div>
            



          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PredictResult;
