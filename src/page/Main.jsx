import React from "react";
import Search from "../component/Search";
import WeatherForecast from "../component/WeatherForecast";
import HourlyForecast from "../component/HourlyForecast";
import DailyForecast from "../component/DailyForecast";

const Main = () => {
  return (
    <div className=" h-screen bg__img">
      <div className="container h-screen backdrop__img w-full">
        <Search />
        {/* <WeatherForecast />
        <HourlyForecast />
        <DailyForecast /> */}
      </div>
    </div>
  );
};

export default Main;
