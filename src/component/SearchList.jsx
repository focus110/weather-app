import React, { useContext } from "react";
import WeatherContext from "../context/weatherData/weatherContext";
import SaveWeatherContext from "../context/weather/weatherContext";

const SearchList = ({ item, i, place }) => {
  const weatherContext = useContext(WeatherContext);
  const { current, setCurrent, getHourly } = weatherContext;

  const saveWeatherContext = useContext(SaveWeatherContext);
  const { getAllWeather, saveWeather } = saveWeatherContext;

  return (
    <>
      <p
        className={`space-x-1 px-8 hover:bg-opacity-100 hover:rounded bg-white bg-opacity-10 border-opacity-10 border-gray-600 py-4 ${
          i === place?.length - 1 ? null : "border-b"
        }`}
      >
        <button
          onClick={() => {
            setCurrent({
              ...current,
              key: item?.key,
              name: item?.name,
              localizedName: item?.localizedName,
              countryCode: item?.countryCode,
              country: item?.country,
            });
            saveWeather({
              location: "onload",
              weather_desc: "rainy",
              temperature: "25",
              humidity: "7.9",
            });
            // getHourly(item?.key);
          }}
        >
          <span>{item?.name + ","}</span>

          <span>{item?.countryCode?.toUpperCase() + ","}</span>
          <span>{item?.country}</span>
        </button>
      </p>
    </>
  );
};

export default SearchList;
