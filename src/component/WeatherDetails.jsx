import React, { useContext, useState } from "react";
import cloudy from "../assets/images/cloudy.png";
import WeatherContext from "../context/weatherData/weatherContext";
import Title from "./Title";

const WeatherDetails = () => {
  const weatherContext = useContext(WeatherContext);
  const { weather, current } = weatherContext;
  const { count, setCount } = useState(null);

  const date = new Date().toLocaleTimeString();

  // console.log(current);

  return (
    <div className="text-center pb-8 sm:px-96">
      {false ? (
        <div className="flex flex-col justify-center space-y-8 bg-white bg-opacity-10 rounded-lg p-8">
          <Title title="Current Weather" />
          <div className="flex flex-col sm:flex-row justify-between items-center space-x-4">
            <img className="object-contain w-16 h-16 " src={cloudy} alt="" />
            <h2 className="sm:hidden sm:text-left font-semibold text-white text-3xl">
              18°C
            </h2>
            <div>
              <h2 className="flex space-x-2 font-medium text-white text-xl">
                {/* <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
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
            </svg> */}
                <span className="text-sm">
                  {current?.name + ", "}
                  <span>{current?.countryCode?.toUpperCase() + ", "}</span>
                  <span>{current?.country}</span>
                </span>
              </h2>
              <p className="text-gray-400 font-light sm:text-left">
                {`${date}`} | <span>{weather?.weather[0]?.description}</span>
              </p>
            </div>
            <div>
              <h2 className="hidden sm:block sm:text-left font-semibold text-white text-3xl">
                {weather?.main?.temp.toString().split(".")[0]}
                <span>
                  {current.unit === "metric"
                    ? "°C"
                    : current.unit === "standard"
                    ? "°F"
                    : null}
                </span>
              </h2>
              {/* <h2 className="sm:text-left ml-1 font-medium text-white text-2xl">
            Cloudy
          </h2> */}
            </div>
          </div>
          <p className="text-white">
            The skies will be mostly cloudy. The high will be 30°.
          </p>
        </div>
      ) : false ? (
        <div className="flex flex-col items-center justify-center space-y-8 bg-white bg-opacity-10 rounded-lg py-8">
          <h2 className="flex space-x-2 font-medium text-white text-xl">
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
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
            <span>Boston, MA, United State</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center space-x-4">
            <img className="w-32 h-32" src={cloudy} alt="" />
            <div>
              <h2 className="sm:text-left font-bold text-white text-6xl">
                18°C
              </h2>
              <h2 className="sm:text-left ml-1 font-medium text-white text-2xl">
                Cloudy
              </h2>
            </div>
          </div>
        </div>
      ) : true ? (
        <div className="bg-white bg-opacity-10 rounded py-8 px-8 text-white">
          <div className="flex justify-between items-center">
            <div className="text-left text-lg border-gray-600 border-opacity-10 border-r pr-4">
              <h2 className="font-extralight mb-4">
                {/* {weather?.weather[0]?.main} */}
              </h2>
              <h2 className="font-medium text-6xl flex">
                {weather?.main?.temp.toString().split(".")[0]}
                <span className="text-6xl">
                  {current.unit === "metric"
                    ? "°"
                    : current.unit === "standard"
                    ? "°F"
                    : null}
                </span>
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
      ) : null}
    </div>
  );
};

export default WeatherDetails;
