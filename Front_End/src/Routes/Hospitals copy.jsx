import React from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import HospitalCover from "../Assets/Images/hospitalcover.jpg";
import RescuresDB from "../Assets/Data/RescuresDB";

import { CenterFocusStrong, Upload, NavigateNext } from "@mui/icons-material";
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';




function Hospitals() {

const libraries = ['places'];
const mapContainerStyle = {
  width: '80vw',
  height: '80vh',
};
const center = {
  lat: 7.2905715, // default latitude
  lng: 80.6337262, // default longitude
};

const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyC4dg11NsnS2z2RNfe_-h9CAESDVnRriSo',
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }


  return (
    <div className="w-full h-screen">
    <Nav />

    <div className="body-wrapper w-full">
      <div className="hero-wrapper w-full h-1/3 relative  bg-slate-700">
        <div className="hero-layout w-full h-full absolute bg-gray-950 bg-opacity-70 justify-center items-center">
          {" "}
        </div>
        <img
          src={HospitalCover}
          alt='"Hero'
          className="w-full h-full object-cover"
        ></img>
      </div>
      <div className="w-full p-10 border-b-[1px] border-[#565656] border-opacity-10 flex flex-row justify-start items-center space-x-3">
        <h5> Home </h5> <NavigateNext /> <h5>Hospitals Nearby</h5>
      </div>







      <div className="w-[80%] mx-auto">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>


    
    </div>

    <Footer />
  </div>
  )
}

export default Hospitals
