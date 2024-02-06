


import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { CenterFocusStrong } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";


const CameraCaptureButton = () => {
  const webcamRef = useRef(null);


const [isCameraOpen, setIsCameraOpen] = useState(false);

const handleToggleCamera = () => {
setIsCameraOpen(!isCameraOpen);
};


const navigate = useNavigate();
const [snakeId, setSnakeId] = useState(null);


const handleCaptureImage = async () => {
  if (webcamRef.current) {
    const screenshot = webcamRef.current.getScreenshot();
    const formData = new FormData();

    // Create a Blob from the base64 data
    const blob = dataURItoBlob(screenshot);
    
    // Append the Blob as a file to the FormData
    formData.append("file", blob, "captured_image.png");

    try {
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Prediction failed");
      }

      const result = await response.json();
      console.log("Snake id:", result.prediction);

      // Assuming setSnakeId and navigate functions are defined
      setSnakeId(result.prediction);
      navigate(`/PredictResult/${result.prediction}`, {
        state: { file: screenshot },
      });
    } catch (error) {
      console.error("Error:", error.message);
    }
  }
};

function dataURItoBlob(dataURI) {
  // Split the data URI to get the mime type and data
  const [type, data] = dataURI.split(',');

  // Convert base64 data to a Uint8Array
  const byteCharacters = atob(data);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);

  // Create a Blob using the Uint8Array and mime type
  const blob = new Blob([byteArray], { type: type.split(':')[1].split(';')[0] });
  return blob;
}

  return (
    <div className="justify-center items-center">
      <button
        className="bg-white rounded-full mb-3 border-[1px] border-[#8EA604] text-[#2C6E49] text-[14px] font-semibold uppercase px-4 py-4 backdrop-blur-sm"
        onClick={handleToggleCamera}
      >
        <CenterFocusStrong/>
        {isCameraOpen ? 'Close Camera' : 'Open Camera'}
      </button>
      <div className={`flex flex-row ${isCameraOpen ? '' : 'hidden'}`}>
        <Webcam
          ref={webcamRef}
          audio={false}
          screenshotFormat="image/png"
        />
      </div>

      {isCameraOpen && (
        <button
          className="bg-white mt-3 block mx-auto rounded-full border-[1px] border-[#8EA604] text-[#2C6E49] text-[14px] font-semibold uppercase px-4 py-4 backdrop-blur-sm"
          onClick={handleCaptureImage}
        >
          <CenterFocusStrong/> Capture Image
        </button>
      )}
    </div>
  );
};

export default CameraCaptureButton;
