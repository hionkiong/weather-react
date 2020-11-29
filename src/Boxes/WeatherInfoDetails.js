import React from "react";
import "./WeatherInfoDetails.css";

export default function WeatherInfoDetails(props) {
  return (
    <div className="WeatherInfoDetails">
      <div className="box d details">
        <ul className="weatherDetails">
          <li>{props.data.description}</li>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {props.data.wind}m/sec</li>
        </ul>
      </div>
    </div>
  );
}
