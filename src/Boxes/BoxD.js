import React from "react";
import "./BoxD.css";

export default function BoxD() {
  let weatherDetails = {
    description: "Sunny",
    humidity: "13",
    wind: "14",
  };
  return (
    <div className="BoxD">
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
