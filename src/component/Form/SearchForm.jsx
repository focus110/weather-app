import React, { useContext, useRef, useState } from "react";
import { motion } from "framer-motion";
import WeatherContext from "../../context/weatherData/weatherContext";

const SearchForm = ({ setFocused, setplace }) => {
  const weatherContext = useContext(WeatherContext);
  const { setCurrent, current, clearState, autocomplete } = weatherContext;

  const [search, setSearch] = useState("");

  const changeUnit = (e) => {
    setCurrent({ ...current, unit: e.target.value });
  };

  const onChange = (e) => {
    setSearch(e.target.value);

    if (e.target.value?.trim()) {
      clearState();
    }
  };

  const inputRef = useRef(null);

  const onFocus = () => setFocused(true);
  const onBlur = () => {
    // setFocused(false);
  };

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

  return (
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
  );
};

export default SearchForm;
