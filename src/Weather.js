import React, { useState } from "react";
import Axios from "axios";
import Locations from "./Boxes/Locations";
import WeatherInfo from "./Boxes/WeatherInfo";
import WeatherInfoDetails from "./Boxes/WeatherInfoDetails";
import Header from "./Boxes/Header";
import ThemeBox from "./Boxes/ThemeBox";
import BoxE from "./Boxes/BoxE";
import Footer from "./Boxes/Footer";
import Loader from "react-loader-spinner";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("London");

  function handleResponse(response) {
    setWeatherData({
      city: response.data.name,
      temperature: response.data.main.temp,
      feels_like: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });
    setReady(true);
  }

  function search() {
    const apiKey = "d20ee31d1c5fc8d0a74be4a2ab93bf1f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    Axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="wrapper">
        <Header />
        <Locations />
        <ThemeBox />
        <div className="Search">
          <div className="box b">
            <form id="search-location" onSubmit={handleSubmit}>
              <input
                className="box2 form-control"
                id="search-location-input"
                type="text"
                placeholder="Search location..."
                autoComplete="off"
                autoFocus="on"
                onChange={handleCityChange}
              />
              <input type="submit" value="Search" id="searchButton" />
            </form>
          </div>
        </div>
        <WeatherInfo data={weatherData} />
        <WeatherInfoDetails data={weatherData} />
        <BoxE />
        <Footer />
      </div>
    );
  } else {
    search();
    return <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />;
  }
}
