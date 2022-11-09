import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import WeatherState from "./context/weatherData/WeatherState";
import SaveWeatherState from "./context/weather/WeatherState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthState>
      <WeatherState>
        <AlertState>
          <SaveWeatherState>
            <App />
          </SaveWeatherState>
        </AlertState>
      </WeatherState>
    </AuthState>
  </React.StrictMode>
);
