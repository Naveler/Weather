import {MapContainer, TileLayer, Marker, Popup, useMapEvent} from 'react-leaflet';
import React, {useState} from "react";

function MyMap() {
    const [loc, setLoc] = useState(null);
    const map = useMapEvent('click', (e) => {
      setLoc(e.latlng);
        map.locate()
        console.log(e.latlng.lat, e.latlng.lng);
    })
    return loc === null ? null : (
      <Marker position={loc}>
          <Popup>SHEEESH</Popup>
      </Marker>
  )
}
function Map() {
    return (
      <MapContainer
        center={[49.1951, 16.6068]}
        zoom={10}
        scrollWheelZoom={true}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MyMap />
    </MapContainer>
  );
}
export default Map;