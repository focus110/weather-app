import React, { useContext, useState } from "react";
import cloudy from "../assets/images/cl.png";
import WeatherContext from "../context/weatherData/weatherContext";
import Title from "./Title";

const HourlyForecast = () => {
  const weatherContext = useContext(WeatherContext);
  const { hourly } = weatherContext;

  const hourlyForcast = hourly.map((item, i) => {
    return (
      <div
        key={i}
        className="text-left bg-white bg-opacity-10 space-y-2 bg-transparent rounded px-8 py-4"
      >
        <h2 className="font-light text-base border-gray-500 border-opacity-10 border-b pb-2 text-gray-500">
          {item?.DateTime?.toString().split("T")[1].slice(0, 4)}
        </h2>
        <div className="sm:w-24 flex flex-col-reverse sm:flex-row items-center space-x-4 justify-between">
          <div>
            <h2 className="font-semibold text-white sm:text-sm">
              {item.Temperature.Value?.toString().split(".")[0]}°
            </h2>
            <h2 className="font-medium text-gray-500 sm:text-sm ">
              {item.IconPhrase}
            </h2>
          </div>

          <div>
            <img
              className="object-contain w-16 h-16 sm:w-12 sm:h-12"
              src={cloudy}
              alt=""
            />
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="">
      <Title title="Hourly Forcast" />
      <div className="bg-transparent bg-opacity-10 rounded-lg overflow-x-scroll hide__scrollbar">
        <div className="w-full flex items-center text-center space-x-2 py-4">
          {hourlyForcast}
        </div>
      </div>
    </div>
  );
};

export default HourlyForecast;
