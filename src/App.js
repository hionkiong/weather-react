import React from "react";
import "./App.css";
import BoxA from "./Boxes/BoxA";
import BoxB from "./Boxes/BoxB";
import BoxC from "./Boxes/BoxC";
import BoxD from "./Boxes/BoxD";
import BoxZ from "./Boxes/BoxZ";
import BoxX from "./Boxes/BoxX";
import BoxE from "./Boxes/BoxE";
import Footer from "./Boxes/Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">
          <BoxZ />
          <BoxA />
          <BoxX />
          <BoxB />
          <BoxC />
          <BoxD />
          <BoxE />
          <Footer />
        </div>
      </div>
    </div>
  );
}
