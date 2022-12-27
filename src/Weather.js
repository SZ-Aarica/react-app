import React, { useState } from "react";
import sunlight from "./sunlight.svg";
import snow from "./snow.svg";
import sunny from "./sunny.svg";
import rain from "./rain.svg";
import axios from "axios";
import cloudy from "./cloudy.svg";
import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("cityName");
  const [temperature, setTemperature] = useState("...");
  const [humidity, setHumidity] = useState("...");
  const [speed, setSpeed] = useState("...");
  const [description, setDescription] = useState("...");
  const [img, setImg] = useState(sunlight);

  function displayCity(response) {
    setTemperature(Math.round(response.data.main.temp));
    setHumidity(response.data.main.humidity);
    setSpeed(Math.round(response.data.wind.speed));
    setDescription(response.data.weather[0].description);
    if (response.data.weather[0].description.includes("sun")) {
      setImg(sunny);
    } else {
      if (response.data.weather[0].description.includes("clouds")) {
        setImg(cloudy);
      }
    }
    if (response.data.weather[0].description.includes("snow")) {
      setImg(snow);
    } else {
      if (response.data.weather[0].description.includes("rain")) {
        setImg(rain);
      }
    }
  }
  function handleSumbit(event) {
    event.preventDefault();

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=74e718c96dc64467c77303080c47c11d&units=metric`;
    axios.get(url).then(displayCity);
  }
  function changeCityName(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Weather">
      <div className="container">
        <div className="weatherApp">
          <form className="search-bar" onSubmit={handleSumbit}>
            <input type="submit" value="🔍" />
            <input
              type="search"
              placeholder="search"
              id="search"
              onChange={changeCityName}
            />
          </form>
          <div className="row">
            <div className="col-6">
              <div className="city-name">{city}</div>
            </div>
            <div className="col-6">
              <button id="button">Current location</button>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <div className="first">
                <span id="temperature">{temperature}</span>
                °C
                <div id="today">monday</div>
                <div id="date">9/8/2022</div>
                <span id="time">11:20</span>
              </div>
            </div>
            <div className="col-3">
              <div className="second">
                <img src={img} alt="" className="img" id="image" />
                <div id="weather">{description}</div>
                <span>humidity:</span>
                <span id="humidity">{humidity}</span>% <br />
                wind speed: <span id="wind">{speed}</span>m/h
              </div>
            </div>
            <div className="col-3 last">
              <div>
                <ul className="next-days">
                  <li>
                    Forcast
                    <br />
                    ...............
                    <br />
                    ...............
                    <br />
                    ...............
                    <br />
                    ...............
                    <br />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <a
            href="https://github.com/SZ-Aarica/Weather-App"
            target="_blank"
            className="gitHubLink"
          >
            Open Souce in GitHub
          </a>
          <span className="creator"> ,by Saba Zahedi</span>
        </footer>
      </div>
    </div>
  );
}
