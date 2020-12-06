import React, { useState } from "react";
import Axios from "axios";
import WeatherInfo from "./Boxes/WeatherInfo";
import WeatherInfoDetails from "./Boxes/WeatherInfoDetails";
import Header from "./Boxes/Header";
import ThemeBox from "./Boxes/ThemeBox";
import WeatherForecast from "./Boxes/WeatherForecast";
import Footer from "./Boxes/Footer";
import Loader from "react-loader-spinner";
import "./Weather.css";

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

  function displayLondon(event) {
    event.preventDefault();
    setCity("London");
    search(city);
  }
  function displayMadrid(event) {
    event.preventDefault();
    setCity("Madrid");
    search(city);
  }
  function displaySeoul(event) {
    event.preventDefault();
    setCity("Seoul");
    search(city);
  }
  function displayTokyo(event) {
    event.preventDefault();
    setCity("Tokyo");
    search(city);
  }
  function displayParis(event) {
    event.preventDefault();
    setCity("Paris");
    search(city);
  }

  if (ready) {
    return (
      <div className="wrapper">
        <Header />
        <div className="Locations">
          <div className="box a">
            <strong> LOCATIONS </strong>
            <ul className="cities">
              <li>
                <a href="/" onClick={displayLondon}>
                  London
                </a>
              </li>
              <li>
                <a href="/" onClick={displayMadrid}>
                  Madrid
                </a>
              </li>
              <li>
                <a href="/" onClick={displaySeoul}>
                  Seoul
                </a>
              </li>
              <li>
                <a href="/" onClick={displayTokyo}>
                  Tokyo
                </a>
              </li>
              <li>
                <a href="/" onClick={displayParis}>
                  Paris
                </a>
              </li>
            </ul>
          </div>
        </div>
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
        <WeatherForecast city={weatherData.city} />
        <Footer />
      </div>
    );
  } else {
    search();
    return <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />;
  }
}
