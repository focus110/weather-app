import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import WeatherState from "./context/weatherData/WeatherState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WeatherState>
      <App />
    </WeatherState>
  </React.StrictMode>
);
