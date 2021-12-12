import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
function App() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [result, setResult] = useState("");
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
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
      .then(response=>response.text())
      .then(data => (setResult(data)));
    },()=>alert("cant access coordinates"));
  }, []);
  return (
    <div className="App">
      <div>long: {longitude}</div>
      <div>lat: {latitude}</div>
      <p>result: {result}</p>
    </div>
  );
}

export default App;
