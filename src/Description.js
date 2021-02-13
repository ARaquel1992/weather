import React from "react";
import "./Description.css";

export default function Description() {
  return (
    <div className="Description">
      <div className="row">
        <div className="col-6">
          <ul>
            <li>
              Feels like: <span id="feeling">0</span> °
            </li>
            <li>
              Max: <span id="max-temp-today">5</span>° | Min:{" "}
              <span id="min-temp-today">-1</span>°
            </li>
            <li>
              Humidity: <span id="humidity">70</span> %
            </li>
            <li>
              Wind: <span id="wind">1</span> Km/h
            </li>
          </ul>
        </div>
        <div className="col-6">
          <img src=" " alt="" id="icon" />
          <p id="description">Cloudy</p>
        </div>
      </div>
    </div>
  );
}
