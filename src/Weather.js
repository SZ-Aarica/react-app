import React from "react";
import sunlight from "./sunlight.svg";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <div className="weatherApp">
          <form className="search-bar">
            <input type="submit" value="🔍" />
            <input type="search" placeholder="search" id="search" />
          </form>
          <div className="row">
            <div className="col-6">
              <div className="city-name">city name</div>
            </div>
            <div className="col-6">
              <button id="button">Current location</button>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <div className="first">
                <span id="temperature"></span>
                °C
                <div id="today">monday</div>
                <div id="date">9/8/2022</div>
                <span id="time">11:20</span>
              </div>
            </div>
            <div className="col-3">
              <div className="second">
                <img src={sunlight} alt="" className="img" id="image" />
                <div id="weather">...</div>
                <span>humidity:</span>
                <span id="humidity">...</span>% <br />
                wind speed: <span id="wind">...</span>m/h
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
