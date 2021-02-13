import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form id="search-form" className="mb-4">
        <div className="row">
          <div className="col-8">
            <input
              type="search"
              id="search-field"
              className="form-control"
              placeholder="Search city..."
              autofocus="on"
              autocomplete="off"
            />
          </div>
          <div class="col-2">
            <input
              type="submit"
              id="submit-button"
              className="btn btn-light"
              value="🔎"
            />
          </div>
          <div className="col">
            <input
              type="button"
              id="current-location"
              className="btn btn-light"
              value="📍"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
