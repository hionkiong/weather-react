import React from "react";
import "./WeatherInfoDetails.css";

export default function WeatherInfoDetails() {
  let weatherDetails = {
    description: "Sunny",
    humidity: "13",
    wind: "14",
  };
  return (
    <div className="WeatherInfoDetails">
      <div className="box d details">
        <ul className="weatherDetails">
          <li id="description">{weatherDetails.description}</li>
          <li>
            Humidity: <span id="humidity">{weatherDetails.humidity}</span>%
          </li>
          <li>
            Wind: <span id="wind">{weatherDetails.wind}</span>m/sec
          </li>
        </ul>
      </div>
    </div>
  );
}
