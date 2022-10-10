import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Search = () => {
  const [search, setSearch] = useState("");
  const [place, setplace] = useState([
    "Boston, MA, United State",
    "Lagos, LA, Nigeria",
    "Lagrange, GA, United States",
  ]);

  const [current, setCurrent] = useState([]);

  const onChange = (e) => {
    setSearch(e.target.value);

    const filtered = place.filter((s) => {
      const regex = new RegExp(search, "gi");
      return regex === "" ? s : s.toLocaleLowerCase().match(regex);
    });

    setCurrent(filtered);
  };

  console.log(current);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const hints = current
    .filter((s) => {
      const regex = new RegExp(search, "gi");
      return regex === "" ? current : s.toLocaleLowerCase().match(regex);
    })
    .map((item, i) => {
      return (
        <div key={i}>
          <p
            className={`px-8 hover:bg-opacity-100 bg-white bg-opacity-10 border-opacity-10 border-gray-600 py-2 ${
              i === place.length - 1 ? null : "border-b"
            }`}
          >
            <Link to="!#"> {item}</Link>
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
            className="bg-transparent text-white w-full h-16 outline-none rounded"
            type="text"
            placeholder="Search place"
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
      {current.length === 0 ? null : (
        <div className="absolute shadow-md bg-white py-4 rounded bg-opacity-90 text-gray-600 text-sm">
          {current.length === 0 ? (
            <div className="px-8">
              <h2 className="text-base pb-4 border-opacity-100 border-gray-600 border-b-[1px]">
                Recent
              </h2>
              <p className="py-4">Recent search will show here</p>
            </div>
          ) : (
            hints
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
