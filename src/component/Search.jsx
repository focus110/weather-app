import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import WeatherContext from "../context/weatherData/weatherContext";

const Search = () => {
  const [search, setSearch] = useState("");
  const [place, setplace] = useState([{}]);

  const weatherContext = useContext(WeatherContext);
  const { getLocation, geo } = weatherContext;

  const [focused, setFocused] = useState(false);

  // console.log("search" + search, current);

  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  const onChange = (e) => {
    setSearch(e.target.value);
    if (search.trim()) getLocation(search);
  };

  useEffect(() => {
    if (geo === null) return setplace([]);
    setplace(geo);
  }, [geo]);

  const inputRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();

    // if (!search.trim()) return null;
    // getLocation(search);

    inputRef.current?.blur();
  };

  const list = place.map((item, i) => {
    return (
      <div key={i}>
        <p
          className={`px-8 hover:bg-opacity-100 hover:rounded bg-white bg-opacity-10 border-opacity-10 border-gray-600 py-4 ${
            i === place.length - 1 ? null : "border-b"
          }`}
        >
          <Link to="!#"> {item.name}</Link>
        </p>
      </div>
    );
  });

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

      <div className="absolute w-full sm:w-96 shadow-md bg-white rounded bg-opacity-90 text-gray-600 text-sm">
        {!focused ? null : place.length === 0 ? (
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
        ) : (
          list
        )}
      </div>
      {/* )} */}
    </div>
  );
};

export default Search;
