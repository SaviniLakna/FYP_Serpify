// import React, { useRef, useState } from 'react';

// const CameraCaptureButton = () => {
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);
//   const [isCameraOpen, setIsCameraOpen] = useState(false);

//   const handleToggleCamera = async () => {
//     try {
//       if (!isCameraOpen) {
//         // Request permission to access the camera
//         const stream = await navigator.mediaDevices.getUserMedia({ video: true });

//         if (videoRef.current) {
//           videoRef.current.srcObject = stream;
//         }
//       }
//       setIsCameraOpen(!isCameraOpen);
//     } catch (error) {
//       console.error('Error accessing camera:', error);
//     }
//   };

//   const handleCaptureImage = () => {
//     if (videoRef.current) {
//       const video = videoRef.current;

//       // Pause the video to capture a frame
//       video.pause();

//       // Draw the current video frame onto a canvas
//       const canvas = canvasRef.current;
//       const context = canvas.getContext('2d');
//       context.drawImage(video, 0, 0, canvas.width, canvas.height);

//       // Convert the canvas content to a data URL (base64-encoded PNG)
//       const imageDataURL = canvas.toDataURL('image/png');

//       // Do something with the captured image data (e.g., send it to the server)
//       console.log(imageDataURL);

//       // Resume the video
//       video.play();
//     }
//   };

//   return (
//     <div className='flex flex-col space-y-3'>
//       <button
//         className="bg-white rounded-full block sm:hidden border-[1px]  border-[#8EA604] text-[#2C6E49] text-[14px] font-semibold uppercase px-4 py-4 backdrop-blur-sm"
//         onClick={handleToggleCamera}
//       >
//         {isCameraOpen ? 'Close Camera' : 'Open Camera'}
//       </button>
//       <div className={`flex flex-row   ${isCameraOpen ? '' : 'hidden'}`}>
//         <video ref={videoRef} autoPlay playsInline ></video>
//         <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
//       </div>
      
//       {isCameraOpen && (
//         <button
//           className="bg-white block sm:hidden rounded-full border-[1px] border-[#8EA604] text-[#2C6E49] text-[14px] font-semibold uppercase px-4 py-4 backdrop-blur-sm"
//           onClick={handleCaptureImage}
//         >
//           Capture Image
//         </button>
//       )}
      
//     </div>
//   );
// };

// export default CameraCaptureButton;










// import Webcam from "react-webcam";
// import React, { useRef, useState } from 'react';

// const CameraCaptureButton = () => {
//   const webcamRef = useRef(null);
//   const [isCameraOpen, setIsCameraOpen] = useState(false);
//   const [cameraType, setCameraType] = useState("environment"); // Use "environment" for rear camera

//   const handleToggleCamera = () => {
//     setIsCameraOpen(!isCameraOpen);
//   };

//   const handleCaptureImage = () => {
//     if (webcamRef.current) {
//       // Get a base64 encoded string of the current webcam image
//       const imageDataURL = webcamRef.current.getScreenshot();

//       // Do something with the captured image data (e.g., send it to the server)
//       console.log(imageDataURL);
//     }
//   };

//   return (
//     <div className="flex flex-col space-y-3">
//       <button
//         className="bg-white rounded-full block sm:hidden border-[1px]  border-[#8EA604] text-[#2C6E49] text-[14px] font-semibold uppercase px-4 py-4 backdrop-blur-sm"
//         onClick={handleToggleCamera}
//       >
//         {isCameraOpen ? "Close Camera" : "Open Camera"}
//       </button>
//       <div className={`flex flex-row   ${isCameraOpen ? "" : "hidden"}`}>
//         <Webcam
//           ref={webcamRef}
//           audio={false}
//           screenshotFormat="image/png"
//           videoConstraints={{ facingMode: cameraType }}
//         />
//       </div>

//       {isCameraOpen && (
//         <button
//           className="bg-white block sm:hidden rounded-full border-[1px] border-[#8EA604] text-[#2C6E49] text-[14px] font-semibold uppercase px-4 py-4 backdrop-blur-sm"
//           onClick={handleCaptureImage}
//         >
//           Capture Image
//         </button>
//       )}
//     </div>
//   );
// };

// export default CameraCaptureButton;



import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam'; // Make sure you have installed the 'react-webcam' package

const CameraCaptureButton = () => {
  const webcamRef = useRef(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [cameraType, setCameraType] = useState('environment'); // Use 'environment' for rear camera

  const handleToggleCamera = () => {
    setIsCameraOpen(!isCameraOpen);
  };

  const handleCaptureImage = () => {
    if (webcamRef.current) {
      // Get a base64 encoded string of the current webcam image
      const imageDataURL = webcamRef.current.getScreenshot();

      // Do something with the captured image data (e.g., send it to the server)
      console.log(imageDataURL);
    }
  };

  return (
    <div className="flex flex-col space-y-3">
      <button
        className="bg-white rounded-full block sm:hidden border-[1px] border-[#8EA604] text-[#2C6E49] text-[14px] font-semibold uppercase px-4 py-4 backdrop-blur-sm"
        onClick={handleToggleCamera}
      >
        {isCameraOpen ? 'Close Camera' : 'Open Camera'}
      </button>
      <div className={`flex flex-row ${isCameraOpen ? '' : 'hidden'}`}>
        <Webcam
          ref={webcamRef}
          audio={false}
          screenshotFormat="image/png"
          videoConstraints={{ facingMode: cameraType }}
        />
      </div>

      {isCameraOpen && (
        <button
          className="bg-white block sm:hidden rounded-full border-[1px] border-[#8EA604] text-[#2C6E49] text-[14px] font-semibold uppercase px-4 py-4 backdrop-blur-sm"
          onClick={handleCaptureImage}
        >
          Capture Image
        </button>
      )}
    </div>
  );
};


export default CameraCaptureButton;