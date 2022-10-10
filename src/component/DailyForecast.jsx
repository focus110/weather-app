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
      <div className="items-center space-y-2 bg-transparent rounded p-4">
        <img
          className="object-contain w-16 h-16 sm:w-24 sm:h-24"
          src={cloudy}
          alt=""
        />

        <h2 className="font-bold text-white sm:text-3xl">18°C</h2>
        <h2 className="font-medium text-white sm:text-2xl">Cloudy</h2>
      </div>
    );
  });

  return (
    <div className="space-y-4">
      <Title title="Daily Forecast" />
      <div className="bg-white bg-opacity-10 rounded-lg px-2 sm:px-8 overflow-x-scroll hide__scrollbar">
        <div className="flex items-center text-center sm:space-x-8 sm:py-4">
          {DailyForecast}
        </div>
      </div>
    </div>
  );
};

export default DailyForecast;
