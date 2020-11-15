import React from "react";
import "./BoxX.css";

export default function BoxX() {
  return (
    <div className="BoxX">
      <div className="box x">
        <strong> THEMES </strong>
        <ul className="themes">
          <li>
            {" "}
            <a href="" id="limeTheme">
              Dark Lime
            </a>
          </li>
          <li>
            {" "}
            <a href="" id="blueTheme">
              Ocean Blue
            </a>
          </li>
          <li>
            {" "}
            <a href="" id="pinkTheme">
              Candy Pink
            </a>
          </li>
          <li>
            {" "}
            <a href="" id="brownTheme">
              Sandy Brown
            </a>
          </li>
          <li>
            {" "}
            <a href="" id="classicTheme">
              Classic Blue
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
