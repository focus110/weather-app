import React, { useContext, useEffect, useRef, useState } from "react";
import WeatherContext from "../context/weatherData/weatherContext";
import SearchList from "./SearchList";
import SearchForm from "./Form/SearchForm";
import NoResultFound from "./NoResultFound";

const Search = () => {
  const weatherContext = useContext(WeatherContext);
  const { getWeather, geo, current, loading } = weatherContext;

  const [place, setplace] = useState([{}]);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (geo === null) return setplace([]);
    setplace(geo);
  }, [geo]);

  useEffect(() => {
    if (current.Key) {
      getWeather(current);
    }
  }, [current]);

  const inputRef = useRef(null);

  const onclk = (e) => {
    if (inputRef.current !== e.target) {
      setFocused(false);
    }
  };

  return (
    <div className="relative py-8 space-y-4 px-2 sm:px-64">
      <SearchForm setFocused={setFocused} setplace={setplace} />
      <div
        onClick={(e) => onclk(e)}
        className="absolute w-full sm:w-96 shadow-md bg-white rounded bg-opacity-90 text-gray-600 text-sm"
      >
        {!focused ? null : loading ? (
          <p className="px-8 py-4 border-gray-600 border-opacity-10 border-b">
            Loading...
          </p>
        ) : place.length === 0 ? (
          <NoResultFound />
        ) : (
          place?.map((item, i) => {
            return (
              <div key={i}>
                <SearchList item={item} i={i} place={place} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Search;
