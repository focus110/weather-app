import React from "react";
import Search from "../component/Search";
import WeatherForecast from "../component/WeatherForecast";
import HourlyForecast from "../component/HourlyForecast";
import DailyForecast from "../component/DailyForecast";

const Main = () => {
  return (
    <div>
      <Search />
      <WeatherForecast />
      <HourlyForecast />
      <DailyForecast />
    </div>
  );
};

export default Main;
