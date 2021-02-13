import React from "react";
import CurrentDetails from "./CurrentDetails";
import "./CurrentInformation.css";

export default function CurrentInformation() {
  return (
    <div className="CurrentInformation">
      <h1> London</h1>
      <ul>
        <li>
          <span id="week-day">Sunday</span>, <span id="date">17/01/21</span>
        </li>
        <li id="current-hour">12:24h</li>
      </ul>
      <CurrentDetails />
    </div>
  );
}