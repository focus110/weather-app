import React, { useContext } from "react";
import WeatherContext from "../context/weatherData/weatherContext";

const NoResultFound = () => {
  const weatherContext = useContext(WeatherContext);
  const { useMyGeoPos } = weatherContext;

  const useMyLocation = () => {
    let geo = {};
    navigator.geolocation.getCurrentPosition(function (position) {
      geo.lat = position.coords.latitude;
      geo.lon = position.coords.longitude;
    });

    useMyGeoPos(geo);
  };

  return (
    <div className="">
      <p className="px-8 py-4 border-gray-600 border-opacity-10 border-b">
        No result found
      </p>
      <div className="flex items-center space-x-4 px-8">
        <button className="py-4" onClick={useMyLocation}>
          Use my location{" "}
        </button>
        <button>
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
        </button>
      </div>
    </div>
  );
};

export default NoResultFound;
