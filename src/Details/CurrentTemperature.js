import React, { useState } from "react";
import "./CurrentTemperature.css";

export default function CurrentTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "celsius") {
    return (
      <div className="CurrentTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="units">
          °C |
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  }

  if (unit === "fahrenheit") {
    return (
      <div className="CurrentTemperature">
        <span className="temperature">{Math.round(convertToFahrenheit())}</span>
        <span className="units">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
