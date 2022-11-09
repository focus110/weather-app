import React, { useContext, useEffect, useState } from "react";
import Search from "../component/Search";
import WeatherDetails from "../component/WeatherDetails";
import HourlyForecast from "../component/HourlyForecast";
import DailyForecast from "../component/DailyForecast";
import WeatherContext from "../context/weatherData/weatherContext";
import { SET_CURRENT } from "../context/types";
import Error from "../component/Error";
import Offline from "../component/Offline";

const Main = () => {
  const weatherContext = useContext(WeatherContext);
  const { getWeather, error } = weatherContext;

  const [online, setOnline] = useState(false);

  const isOnline = () => {
    setOnline(navigator.onLine);
    console.log(online);
  };

  // useEffect(() => {
  //   setOnline(!online);
  //   console.log("online changed");
  // }, [online]);

  useEffect(() => {
    isOnline();
  }, []);

  return (
    <div className="bg__img">
      <div className="container backdrop__img w-full hide__scrollbar pb-8 h-screen">
        {error ? (
          <Error />
        ) : !online ? (
          <Offline />
        ) : (
          <>
            <WeatherDetails />
            <HourlyForecast />
            <DailyForecast />
          </>
        )}
      </div>
    </div>
  );
};

export default Main;
