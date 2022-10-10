import React, { useState } from "react";
import cloudy from "../assets/images/cloudy.png";
import Title from "./Title";

const DailyForecast = () => {
  const [dailyWeather, setDailyWeather] = useState([
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]);

  const DailyForecast = dailyWeather.map((item, i) => {
    return (
      <div
        className={`${
          i === dailyWeather.length - 1 ? null : "border-r "
        } border-gray-500 border-opacity-10 items-center space-y-2 bg-transparent rounded p-4`}
      >
        <div
          className={`w-24 sm:w-32 flex flex-col items-center justify-center`}
        >
          <h2 className="font-bold text-white mb-2">Today</h2>
          <img className="object-contain w-16 h-16 " src={cloudy} alt="" />
          <h2 className="text-white text-3xl mt-4 mb-1">18°C</h2>
          <h2 className="font-medium text-white ">Cloudy</h2>
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
