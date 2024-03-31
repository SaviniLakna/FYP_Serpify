

/// working code for current location
import React, { useEffect, useState } from "react";
import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import HospitalCover from "../Assets/Images/hospitalcover.jpg";
import RescuresDB from "../Assets/Data/RescuresDB";
import { CenterFocusStrong, Upload, NavigateNext } from "@mui/icons-material";

const Libraries = ['places'];

const Hospitals = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBjB-vFl5lG3Sl6oulPnEwcSbO6Hvv0ncE',
    libraries: Libraries,
  });

  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    if (isLoaded) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    }
  }, [isLoaded]);

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


      <div className="hero-wrapper_sub w-full h-1/3 relative  bg-slate-700">
        <div className="hero-layout w-full h-full absolute bg-gray-950 bg-opacity-70 justify-center items-center">
          {" "}
        </div>
        <img
          src={HospitalCover}
          alt='"Hero'
          className="w-full h-full object-cover"
        ></img>
      </div>
      <div className="w-full md:p-10 p-3 border-b-[1px] border-[#565656] border-opacity-10 flex flex-row justify-start items-center space-x-3">
        <h5> Home </h5> <NavigateNext /> <h5>Hospitals Nearby</h5>
      </div>

      
        <div className="md:w-[80%] w-[95%] mx-auto">

          <div className="mt-[24px] w-full h-auto">
          <GoogleMap
            center={userLocation}
            zoom={13}
            mapContainerStyle={{ width: '100%', height: '500px' }}
            
          >
            {userLocation && (
              <Marker position={userLocation} title="Your Location" />
            )}
          </GoogleMap>
          </div>
          
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Hospitals;