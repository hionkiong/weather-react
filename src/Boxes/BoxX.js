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
            <span href="" id="limeTheme">
              Dark Lime
            </span>
          </li>
          <li>
            {" "}
            <span href="" id="blueTheme">
              Ocean Blue
            </span>
          </li>
          <li>
            {" "}
            <span href="" id="pinkTheme">
              Candy Pink
            </span>
          </li>
          <li>
            {" "}
            <span href="" id="brownTheme">
              Sandy Brown
            </span>
          </li>
          <li>
            {" "}
            <span href="" id="classicTheme">
              Classic Blue
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
