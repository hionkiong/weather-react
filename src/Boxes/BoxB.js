import React from "react";
import "./BoxB.css";

export default function BoxB() {
  return (
    <div className="BoxB">
      <div className="box b">
        <form id="search-location">
          <input
            className="box2 form-control"
            id="search-location-input"
            type="text"
            placeholder="Search location..."
            autoComplete="off"
            autoFocus="on"
          />
          <input type="submit" value="Search" id="searchButton" />
        </form>
      </div>
    </div>
  );
}
