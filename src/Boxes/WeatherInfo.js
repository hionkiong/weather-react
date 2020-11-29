import React from "react";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="box c">
        <div className="row row-cols-2">
          <div className="col md-6">
            <div className="city">{props.data.city}</div>
            <div className="date">{props.data.date}</div>
            <div className="currentTemperature">
              <span className="temperature">{props.data.temperature}</span>
              <span className="units">
                <span href="#" id="celcius-link">
                  °C
                </span>
                |
                <span href="#" id="fahrenheit-link">
                  °F
                </span>
              </span>
            </div>
          </div>
          <div className="col md-6 currentemoji">
            <i className="current fas fa-sun" />
          </div>
        </div>
      </div>
    </div>
  );
}
