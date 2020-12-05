import React from "react";
import "./WeatherInfo.css";
import FormattedDate from "../Details/FormattedDate";
import CurrentTemperature from "../Details/CurrentTemperature";
import WeatherIcon from "../Details/WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="box c">
        <div className="row row-cols-2">
          <div className="col md-6">
            <div className="city">{props.data.city}</div>
            <div className="date">
              <FormattedDate date={props.data.date} />
            </div>
            <div>
              <CurrentTemperature celsius={props.data.temperature} />
            </div>
          </div>
          <div className="col md-6 currenticon">
            <WeatherIcon code={props.data.icon} size={140} />
          </div>
        </div>
      </div>
    </div>
  );
}
