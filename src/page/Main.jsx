import React from "react";
import Search from "../component/Search";
import WeatherDetails from "../component/WeatherDetails";
import HourlyForecast from "../component/HourlyForecast";
import DailyForecast from "../component/DailyForecast";

const Main = () => {
  return (
    <div className="bg__img">
      <div className="container backdrop__img w-full hide__scrollbar">
        <Search />
        <WeatherDetails />
        <HourlyForecast />
        <DailyForecast />
      </div>
    </div>
  );
};

export default Main;
