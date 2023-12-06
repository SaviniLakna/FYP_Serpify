// import React, { useEffect, useState } from "react";
// import Nav from "../Components/Nav";
// import Footer from "../Components/Footer";
// import HospitalCover from "../Assets/Images/hospitalcover.jpg";
// import RescuresDB from "../Assets/Data/RescuresDB";
// import { CenterFocusStrong, Upload, NavigateNext } from "@mui/icons-material";
// import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

// function Hospitals() {
  


//     const [map, setMap] = useState(null);

//     useEffect(() => {
//         const script = document.createElement('script');
//         script.src = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyC4dg11NsnS2z2RNfe_-h9CAESDVnRriSo&libraries=places';
//         script.async = true;
//         script.defer = true;
//         script.addEventListener('load', () => {
//           const userLocation = navigator.geolocation;
//           if (userLocation) {
//             userLocation.getCurrentPosition((position) => {
//               const mapOptions = {
//                 center: { lat: position.coords.latitude, lng: position.coords.longitude },
//                 zoom: 13,
//               };
//               const newMap = new window.google.maps.Map(document.getElementById('map'), mapOptions);
//               setMap(newMap);
    
              
//               const request = {
//                 location: mapOptions.center,
//                 radius: 20000, // 5km in meters
//                 type: ['hospital'],
//               };
//               const service = new window.google.maps.places.PlacesService(newMap);
//               service.nearbySearch(request, (results, status) => {
//                 if (status === window.google.maps.places.PlacesServiceStatus.OK) {
//                   for (let i = 0; i < results.length; i++) {
//                     createMarker(results[i]);
//                   }
//                 }
//               });
//             });
//           }
//         });
//         document.head.appendChild(script);
//       }, []);
    
//       const createMarker = (place) => {
//         const marker = new window.google.maps.Marker({
//           map: map,
//           position: place.geometry.location,
//           title: place.name,
//         });
//       };
    
//       return <div id="map" style={{ width: '100%', height: '500px' }}></div>;
//     };

//     export default Hospitals;






// import React, { useEffect, useState } from "react";
// import { useLoadScript } from "@react-google-maps/api";
// import Nav from "../Components/Nav";
// import Footer from "../Components/Footer";
// import HospitalCover from "../Assets/Images/hospitalcover.jpg";
// import RescuresDB from "../Assets/Data/RescuresDB";
// import { CenterFocusStrong, Upload, NavigateNext } from "@mui/icons-material";

// const Hospitals = () => {
//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: 'AIzaSyC4dg11NsnS2z2RNfe_-h9CAESDVnRriSo',
//     libraries: ['places'],
//   });

//   const [map, setMap] = useState(null);

//   useEffect(() => {
//     if (isLoaded) {
//       const userLocation = navigator.geolocation;
//       if (userLocation) {
//         userLocation.getCurrentPosition((position) => {
//           const mapOptions = {
//             center: { lat: position.coords.latitude, lng: position.coords.longitude },
//             zoom: 13,
//           };
//           const newMap = new window.google.maps.Map(document.getElementById('map'), mapOptions);
//           setMap(newMap);

//           const request = {
//             location: mapOptions.center,
//             radius: 20000, // 20km in meters
//             type: ['hospital'],
//           };
//           const service = new window.google.maps.places.PlacesService(newMap);
//           service.nearbySearch(request, (results, status) => {
//             if (status === window.google.maps.places.PlacesServiceStatus.OK) {
//               for (let i = 0; i < results.length; i++) {
//                 createMarker(results[i]);
//               }
//             }
//           });
//         });
//       }
//     }
//   }, [isLoaded]);

//   const createMarker = (place) => {
//     const marker = new window.google.maps.Marker({
//       map: map,
//       position: place.geometry.location,
//       title: place.name,
//     });
//   };

//   if (loadError) {
//     return <div>Error loading maps</div>;
//   }

//   if (!isLoaded) {
//     return <div>Loading maps</div>;
//   }

//   return (
//     <div className="w-full h-screen">
//       <Nav />
//       <div className="body-wrapper w-full">
//         <div className="w-[80%] mx-auto">
//           <div id="map" style={{ width: '100%', height: '500px' }}></div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Hospitals;










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
    googleMapsApiKey: 'AIzaSyC4dg11NsnS2z2RNfe_-h9CAESDVnRriSo',
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
      <Footer />
    </div>
  );
};

export default Hospitals;



