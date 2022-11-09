import React, { useContext, useEffect, useState } from "react";
import cloudy from "../assets/images/cloudy.png";
import WeatherContext from "../context/weatherData/weatherContext";
import Title from "./Title";

const WeatherDetails = () => {
  const weatherContext = useContext(WeatherContext);
  const { weather, daily, current, unit } = weatherContext;

  const date = new Date().toLocaleTimeString();

  useEffect(() => {
    if (unit === "metric") {
    } else if (unit === "") {
    }
  }, [unit]);

  const metric = `${
    weather?.Temperature?.Metric?.Value.toString().split(".")[0]
  }°`;

  const imperial = `${
    weather?.Temperature?.Imperial?.Value.toString().split(".")[0]
  }°`;

  const weatherPhrase = daily[0]?.Day?.IconPhrase.split("w/")[0];

  return (
    <div className="text-center pb-8 sm:px-96">
      <div className="bg-white bg-opacity-10 rounded py-8 px-8 text-white">
        <div className="flex justify-between items-center">
          <div className="text-left text-lg border-gray-600 border-opacity-10 border-r pr-4">
            <h2 className="font-extralight mb-4">{weatherPhrase}</h2>
            <h2 className="font-medium text-6xl flex">
              {unit === "metric"
                ? metric
                : unit === "standard"
                ? imperial
                : "0"}
            </h2>
          </div>
          <div className="text-left">
            <p>{`${date}`}</p>
            <div className="flex items-start pt-2 text-sm">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <p className="pl-2">
                {current?.name + ", "}
                <span>{current?.countryCode?.toUpperCase() + ", "}</span>
                <span>{current?.country}</span>
              </p>
            </div>
          </div>
          <img className="object-contain w-16 h-16 " src={cloudy} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
