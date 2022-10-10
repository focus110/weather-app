import React, { useState } from "react";
import cloudy from "../assets/images/cl.png";

const HourlyForecast = () => {
  const [hrWeather, setHrWeather] = useState([
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

  const hourlyForcast = hrWeather.map((item, i) => {
    return (
      <div className="items-center space-y-2 bg-transparent rounded-2xl p-4">
        <img className="w-24 h-24" src={cloudy} alt="" />

        <h2 className="font-bold text-white text-3xl">18°C</h2>
        <h2 className="font-medium text-white text-2xl">Cloudy</h2>
      </div>
    );
  });

  return (
    <div className="space-y-4">
      <h2 className="text-left font-medium text-2xl text-white">
        Hourly Forcast
      </h2>
      <div className="bg-white bg-opacity-10 rounded-lg px-8 overflow-x-scroll">
        <div className="flex items-center text-center space-x-8 py-4">
          {hourlyForcast}
        </div>
      </div>
    </div>
  );
};

export default HourlyForecast;
