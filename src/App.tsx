import './App.css';
import React, { useState, useEffect } from "react";
import Map from "./Map";

function App() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [result, setResult] = useState("");
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLongitude(position.coords.longitude);
        setLatitude(position.coords.latitude);
        const url =
          "https://api.openweathermap.org/data/2.5/forecast?lat=" +
          position.coords.latitude +
          "&lon=" +
          position.coords.longitude +
          "&appid=" +
          process.env.REACT_APP_API_KEY;
        fetch(url)
          .then((response) => response.text())
          .then((data) => setResult(data));
      },
      () => alert("We Need ACCCCCCCCCCCCCCCCCEEEEEEEEESSSSSSSSSSSSSSSSSSSSS")
    );
  }, []);
  return (
    <div className="App">
      <div id="mapid"> <Map /> </div>
      <div>long: {longitude}</div>
      <div>lat: {latitude}</div>
      <p>result: {result}</p>
    </div>
  );
}

export default App;
