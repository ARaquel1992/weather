import React from "react";
import "./CurrentDetails.css";

export default function CurrentDetails() {
  return (
    <div className="CurrentDetails">
      <div className="row">
        <div className="col">
          <p id="today-temperature"> 3 </p>
        </div>
        <div className="col-3">
          <strong>
            <a href="#" className="active" id="celsius-link" />
            °C | <a href="#" id="fahrenheit-link" />
            °F
          </strong>
        </div>
      </div>
    </div>
  );
}