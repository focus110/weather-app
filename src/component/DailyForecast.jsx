import React, { useContext, useEffect, useState } from "react";
import cloudy from "../assets/images/cloudy.png";
import WeatherContext from "../context/weatherData/weatherContext";
import Title from "./Title";

const DailyForecast = () => {
  const weatherContext = useContext(WeatherContext);
  const { daily } = weatherContext;

  const DailyForecast = daily.map((item, i) => {
    const max = item?.Temperature?.Maximum?.Value.toString().split(".")[0];
    const min = item?.Temperature?.Minimum?.Value.toString().split(".")[0];
    const unFormattedDate = item.Date.split("T")[0];

    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

    const d = new Date(unFormattedDate.toString());

    return (
      <div
        key={i}
        className={`${
          i === daily.length - 1 ? null : "border-r "
        } border-gray-500 border-opacity-10 items-center space-y-2 bg-transparent rounded p-4`}
      >
        <div
          className={`w-24 sm:w-32 flex flex-col items-center justify-center`}
        >
          <h2 className="font-bold text-white mb-2">{weekDays[d.getDay()]}</h2>
          <img className="object-contain w-16 h-16 " src={cloudy} alt="" />
          <h2 className="text-white text-3xl mt-4 mb-1">{max}°</h2>
          <h2 className="font-medium text-sm text-white ">
            {item?.Day?.IconPhrase?.split("w/")[0]}
          </h2>
        </div>
      </div>
    );
  });

  return (
    <div className="space-y-4">
      <Title title="Daily Forecast" />
      <div className="bg-white bg-opacity-10 rounded-lg overflow-x-scroll hide__scrollbar">
        <div className="flex items-center text-center sm:py-4">
          {DailyForecast}
        </div>
      </div>
    </div>
  );
};

export default DailyForecast;
