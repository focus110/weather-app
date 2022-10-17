import React, { useContext, useEffect } from "react";
import Search from "../component/Search";
import WeatherDetails from "../component/WeatherDetails";
import HourlyForecast from "../component/HourlyForecast";
import DailyForecast from "../component/DailyForecast";
import WeatherContext from "../context/weatherData/weatherContext";
import { SET_CURRENT } from "../context/types";

const Main = () => {
  const weatherContext = useContext(WeatherContext);
  const { getWeather } = weatherContext;

  // useEffect(() => {
  // getWeather("254085");
  // }, [])

  return (
    <div className="bg__img">
      <div className="container backdrop__img w-full hide__scrollbar pb-8">
        <Search />
        <WeatherDetails />
        <HourlyForecast />
        <DailyForecast />
      </div>
    </div>
  );
};

export default Main;
