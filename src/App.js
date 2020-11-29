import React from "react";
import "./App.css";
import Locations from "./Boxes/Locations";
import Search from "./Boxes/Search";
import WeatherInfo from "./Boxes/WeatherInfo";
import WeatherInfoDetails from "./Boxes/WeatherInfoDetails";
import Header from "./Boxes/Header";
import ThemeBox from "./Boxes/ThemeBox";
import BoxE from "./Boxes/BoxE";
import Footer from "./Boxes/Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="wrapper">
          <Header />
          <Locations />
          <ThemeBox />
          <Search />
          <WeatherInfo />
          <WeatherInfoDetails />
          <BoxE />
          <Footer />
        </div>
      </div>
    </div>
  );
}
