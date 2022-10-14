import React, { useContext, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import WeatherContext from "../context/weatherData/weatherContext";
import axios from "axios";

const Search = () => {
  const [search, setSearch] = useState("");
  const [place, setplace] = useState([{}]);
  // const [current, setCurrent] = useState();

  const [target, setTarget] = useState(null);

  const weatherContext = useContext(WeatherContext);
  const {
    autocomplete,
    getWeather,
    getForecast,
    geo,
    weather,
    current,
    setCurrent,
    loading,
    clearState,
  } = weatherContext;

  const [focused, setFocused] = useState(false);

  // console.log("search" + search, current);

  const onFocus = () => setFocused(true);
  const onBlur = () => {
    // setFocused(false);
  };

  const onChange = (e) => {
    setSearch(e.target.value);

    if (e.target.value?.trim()) {
      clearState();
    }
  };

  // get location onload
  useEffect(() => {
    // navigator.geolocation.getCurrentPosition(function (position) {
    //   console.log("Latitude is :", position.coords.latitude);
    //   console.log("Longitude is :", position.coords.longitude);
    //   const config = {
    //     method: "get",
    //     url: `https://api.geoapify.com/v1/geocode/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&apiKey=${process.env.REACT_APP_REVERSE_GEO_API_KEY}`,
    //     headers: {},
    //   };
    //   axios(config)
    //     .then(function (response) {
    //       console.log(response.data);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    //   getWeather({
    //     lat: position.coords.latitude,
    //     lon: position.coords.longitude,
    //   });
    // });
    // getWeather(current);
    // console.log(current);
  }, []);

  useEffect(() => {
    if (geo === null) return setplace([]);
    setplace(geo);
  }, [geo]);

  useEffect(() => {
    if (current.Key) {
      getWeather(current);
      // getForecast(current);
    }
  }, [current]);

  const inputRef = useRef(null);
  const formRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();

    if (search.trim() === "") {
      setplace([]);
    } else {
      clearState();
      autocomplete(search);
    }

    inputRef.current?.blur();
  };

  const list = place?.map((item, i) => {
    return (
      <div key={i}>
        <p
          className={`space-x-1 px-8 hover:bg-opacity-100 hover:rounded bg-white bg-opacity-10 border-opacity-10 border-gray-600 py-4 ${
            i === place?.length - 1 ? null : "border-b"
          }`}
        >
          <button
            onClick={() =>
              setCurrent({
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
      </div>
    );
  });

  const onclk = (e) => {
    if (inputRef.current !== e.target) {
      setFocused(false);
      setTarget(e.target);
    }
  };

  // const onclck = (e) => {
  //   if (formRef.current !== e.target) {
  //     setFocused(false);
  //   }
  // };

  const changeUnit = (e) => {
    setCurrent({ ...current, unit: e.target.value });
  };

  // console.log(current);
  // console.log(weather);

  return (
    <div className="relative py-8 space-y-4 px-2 sm:px-64">
      {/* <h2 className="text-center font-semibold text-white">Today's Weather</h2> */}
      <form onSubmit={onSubmit}>
        <div className="bg-white bg-opacity-10 flex pl-8 rounded">
          <input
            onFocus={onFocus}
            onBlur={onBlur}
            className="bg-transparent text-white w-full h-16 outline-none rounded"
            type="text"
            placeholder="Search city"
            value={search}
            onChange={onChange}
          />

          <div className="hidden sm:block px-2 rounded">
            <select
              className="text-gray-300 w-16 outline-none active:outline-none bg-transparent px-2 rounded h-full"
              name="unit"
              value={current?.unit}
              onChange={changeUnit}
            >
              <option className="text-gray-600 " defaultValue value="metric">
                °C
              </option>
              <option className="text-gray-600 " value="standard">
                °F
              </option>
            </select>
          </div>

          <div className="opacity-10 w-[1px] bg-white"></div>
          <motion.button
            whileTap={{ scale: 0.8 }}
            className="text-white px-4 sm:px-8 rounded"
          >
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
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </motion.button>
        </div>
      </form>

      <div
        // ref={inputRef}
        onClick={(e) => onclk(e)}
        className="absolute w-full sm:w-96 shadow-md bg-white rounded bg-opacity-90 text-gray-600 text-sm"
      >
        {!focused ? null : loading ? (
          <p className="px-8 py-4 border-gray-600 border-opacity-10 border-b">
            Loading...
          </p>
        ) : place.length === 0 ? (
          <div className="">
            <p className="px-8 py-4 border-gray-600 border-opacity-10 border-b">
              No result found
            </p>
            <div className="flex items-center space-x-4 px-8">
              <button className="py-4">Use my location </button>
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
        ) : (
          list
        )}
      </div>
      {/* )} */}
    </div>
  );
};

export default Search;
