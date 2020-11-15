import React from "react";
import "./BoxA.css";

export default function BoxA() {
  return (
    <div className="BoxA">
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
