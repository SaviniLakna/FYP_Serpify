import React, { useEffect, useState } from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import HospitalCover from "../Assets/Images/hospitalcover.jpg";
import RescuresDB from "../Assets/Data/RescuresDB";
import { CenterFocusStrong, Upload, NavigateNext } from "@mui/icons-material";
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

function Hospitals() {
  


    const [map, setMap] = useState(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyC4dg11NsnS2z2RNfe_-h9CAESDVnRriSo&libraries=places';
        script.async = true;
        script.defer = true;
        script.addEventListener('load', () => {
          const userLocation = navigator.geolocation;
          if (userLocation) {
            userLocation.getCurrentPosition((position) => {
              const mapOptions = {
                center: { lat: position.coords.latitude, lng: position.coords.longitude },
                zoom: 13,
              };
              const newMap = new window.google.maps.Map(document.getElementById('map'), mapOptions);
              setMap(newMap);
    
              
              const request = {
                location: mapOptions.center,
                radius: 20000, // 5km in meters
                type: ['hospital'],
              };
              const service = new window.google.maps.places.PlacesService(newMap);
              service.nearbySearch(request, (results, status) => {
                if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                  for (let i = 0; i < results.length; i++) {
                    createMarker(results[i]);
                  }
                }
              });
            });
          }
        });
        document.head.appendChild(script);
      }, []);
    
      const createMarker = (place) => {
        const marker = new window.google.maps.Marker({
          map: map,
          position: place.geometry.location,
          title: place.name,
        });
      };
    
      return <div id="map" style={{ width: '100%', height: '500px' }}></div>;
    };

    export default Hospitals;
