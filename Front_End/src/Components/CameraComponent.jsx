


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



const videoConstraints = {
  width: 420,
  height: 420,
  facingMode: "environment", // use the back camera
};



const handleCaptureImage = async () => {
  const imageSrc = webcamRef.current.getScreenshot();
  
  // Convert base64 image to Blob
  const byteCharacters = atob(imageSrc.split(',')[1]);
  const byteNumbers = new Array(byteCharacters.length);
  
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  
  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], { type: 'image/jpeg' });

  // Create a FormData object and append the image blob to it
  const formData = new FormData();
  formData.append('file', blob, 'captured_image.jpg');

  // Make a POST request to the Flask server for prediction
  try {
    const response = await fetch(
      "https://savi05-serpifyidentity.hf.space/predict",
      {
        method: "POST",
        body: formData,
      }
    );

    if (response.ok) {
      const result = await response.json();
      // Handle the prediction result as needed
      console.log('Prediction Result:', result);

     // Assuming setSnakeId and navigate functions are defined
     setSnakeId(result.prediction);
     navigate(`/PredictResult/${result.prediction}`, {
       state: { file: imageSrc },
     });
    } else {
      console.error('Prediction failed:', response.statusText);
    }
  } catch (error) {
    console.error('Error during prediction:', error);
  }
};



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
          videoConstraints={videoConstraints}
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
