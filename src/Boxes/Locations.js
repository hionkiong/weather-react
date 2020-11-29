import React from "react";
import "./Locations.css";

export default function Locations() {
  return (
    <div className="Locations">
      <div className="box a">
        <strong> LOCATIONS </strong>
        <ul className="cities">
          <li>London</li>
          <li>Madrid</li>
          <li>Seoul</li>
          <li>Tokyo</li>
          <li>Paris</li>
        </ul>
        <button id="currentLocationButton"> Current Location </button>
      </div>
    </div>
  );
}
