import React, { useState } from 'react';
import Map, { Marker } from 'react-map-gl';





const MapPart = () => {
    const [viewport, setViewport] = useState({
        latitude: 45.4211,
        longitude: -75.6903,
        zoom: 10,
        width: "100vw",
        height: "100vh",
        pitch: 50
    });

    
    return (
        <div>
            <Map
                mapStyle="mapbox://styles/mapbox/streets-v9"
                mapboxAccessToken='pk.eyJ1IjoibW9oYW1tZWQtZmFyaGFkLXVkZGluIiwiYSI6ImNsM3BreDV3bDB3MTIzY2wydzE5ZzdxZTIifQ.y47qzDHr4MB_941jGT8FBg'
                {...viewport} 
                onViewportChange={(newView) => setViewport(newView)}>
                <Marker 
                latitude={22.00} 
                longitude={86.22} 
                offsetTop={(-viewport.zoom * 5) / 2} >
                    <img src="https://image.shutterstock.com/image-vector/location-pin-icon-on-transparent-260nw-1096787816.jpg" width={viewport.zoom * 5} height={viewport.zoom * 5} alt="" />
                </Marker>
            </Map>
        </div>
    );
};

export default MapPart;