import React, { useContext } from "react";
import WeatherContext from "../context/weatherData/weatherContext";

const SearchList = ({ item, i, place }) => {
  const weatherContext = useContext(WeatherContext);
  const { current, setCurrent } = weatherContext;

  return (
    <>
      <p
        className={`space-x-1 px-8 hover:bg-opacity-100 hover:rounded bg-white bg-opacity-10 border-opacity-10 border-gray-600 py-4 ${
          i === place?.length - 1 ? null : "border-b"
        }`}
      >
        <button
          onClick={() =>
            setCurrent({
              ...current,
              key: item?.key,
              name: item?.name,
              localizedName: item?.localizedName,
              countryCode: item?.countryCode,
              country: item?.country,
            })
          }
        >
          {item?.name + ","}
        </button>
        <span>{item?.countryCode?.toUpperCase() + ","}</span>
        <span>{item?.country}</span>
      </p>
    </>
  );
};

export default SearchList;
