import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';



export default function Map() {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [location, setLocation] = useState('');
  const [error, setError] = useState(null);
  const [data,setData]=useState({})
  // Custom icon for the marker
const icon = L.icon({
  iconUrl: 'https://img.lovepik.com/png/20231007/location-icon-map-icon-adress-maps-and-location-icon_120018_wh1200.png',
  iconSize: [40, 50]
});
  useEffect(() => {
    const currentLocation=navigator.geolocation
    console.log(currentLocation)
    const Location = localStorage.getItem("location");
    if (Location) {
      setLocation(Location);
      
    }
  }, [Location]);

  useEffect(() => {
    if (location) {
      fetch(`https://nominatim.openstreetmap.org/search?q=${location}&format=json`, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data[0])
          setData(data[0])
          if (data.length > 0 && data[0].lat !== undefined && data[0].lon !== undefined) {
            setLat(parseFloat(data[0].lat));
            setLng(parseFloat(data[0].lon));
            console.log(lat , lng)
          } 
        })
        .catch(() => {
          alert("enter your affected place");
        });
    }
  }, [location]);
  const CurrentLocation=()=>{
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      return;
    }

    const handleSuccess = (position) => {
      const { latitude, longitude } = position.coords;
      setLocation({ lat: latitude, lng: longitude });
    };

    const handleError = (error) => {
      setError(error.message);
    };

    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  }

  return (
    <>
    <MapContainer center={[lat,lng]}zoom={lat>0?13:1} scrollWheelZoom={true} style={{ width: "100%", height: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=3JzVOCsCaSKqKCt9aL77"
      />
      {lat !== 0 && lng !== 0 && (
        <Marker position={[lat, lng]} icon={icon}>
          <Popup>
           <p> {data.display_name}</p> <br /> Easily customizable.
          </Popup>
        </Marker>
      )} 
    </MapContainer>
   
    </>
  );
}
