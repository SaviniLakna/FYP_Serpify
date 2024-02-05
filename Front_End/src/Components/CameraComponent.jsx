// import React, { useRef } from 'react';
// import { CenterFocusStrong, Upload, NavigateNext } from "@mui/icons-material";


// const CameraCaptureButton = () => {
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);


  


//   const handleCaptureClick = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ video: true });

//       if (videoRef.current) {
//         videoRef.current.srcObject = stream;
//       }
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
//     <div>
//       <button
//         className="bg-white rounded-full block sm:hidden border-[1px] border-[#8EA604] text-[#2C6E49] text-[14px] font-semibold uppercase px-4 py-4 backdrop-blur-sm"
//         onClick={handleCaptureClick}
//       >
//         Start Camera
//       </button>
//       <button
//         className="bg-white block sm:hidden rounded-full border-[1px] border-[#8EA604] text-[#2C6E49] text-[14px] font-semibold uppercase px-4 py-4 backdrop-blur-sm"
//         onClick={handleCaptureImage}
//       >
//         Capture Image
//       </button>
//       <div className='flex flex-row absolute'>

//       <video ref={videoRef} autoPlay></video>
//       <canvas ref={canvasRef} style={{ display: 'none' }} className='absolute'></canvas>
//       </div>
     
//     </div>





//   );
// };

// export default CameraCaptureButton;








import React, { useRef } from 'react';

const CameraCaptureButton = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const handleCaptureClick = async () => {
    try {
      // Request permission to access the camera
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const handleCaptureImage = () => {
    if (videoRef.current) {
      const video = videoRef.current;

      // Pause the video to capture a frame
      video.pause();

      // Draw the current video frame onto a canvas
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Convert the canvas content to a data URL (base64-encoded PNG)
      const imageDataURL = canvas.toDataURL('image/png');

      // Do something with the captured image data (e.g., send it to the server)
      console.log(imageDataURL);

      // Resume the video
      video.play();
    }
  };

  return (
    <div>
      <button
        className="bg-white rounded-full block sm:hidden border-[1px] border-[#8EA604] text-[#2C6E49] text-[14px] font-semibold uppercase px-4 py-4 backdrop-blur-sm"
        onClick={handleCaptureClick}
      >
        Start Camera
      </button>
      <button
        className="bg-white block sm:hidden rounded-full border-[1px] border-[#8EA604] text-[#2C6E49] text-[14px] font-semibold uppercase px-4 py-4 backdrop-blur-sm"
        onClick={handleCaptureImage}
      >
        Capture Image
      </button>
      <div className='flex flex-row absolute'>
        <video ref={videoRef} autoPlay playsInline></video>
        <canvas ref={canvasRef} style={{ display: 'none' }} className='absolute'></canvas>
      </div>
    </div>
  );
};

export default CameraCaptureButton;

