import React, { useContext, useEffect, useRef, useState } from "react";
import WeatherContext from "../context/weatherData/weatherContext";
import SearchList from "./SearchList";
import SearchForm from "./Form/SearchForm";
import NoResultFound from "./NoResultFound";
import AuthLinks from "./Links/AuthLinks";
import GuestLinks from "./Links/GuestLinks";
import { Link } from "react-router-dom";
import AuthContext from "../context/auth/authContext";

const Search = () => {
  const weatherContext = useContext(WeatherContext);
  const { getWeather, geo, getHourly, getDaily, current, loading } =
    weatherContext;

  const authContext = useContext(AuthContext);
  const { isAuthenticated, user } = authContext;

  const [place, setplace] = useState([{}]);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (geo === null) return setplace([]);
    setplace(geo);
  }, [geo]);

  useEffect(() => {
    if (current.Key) {
      const Key = current.Key;
      getWeather(current);
      getDaily(Key);
      getHourly(Key);
    }
  }, [current]);

  const inputRef = useRef(null);

  const onclk = (e) => {
    if (inputRef.current !== e.target) {
      setFocused(false);
    }
  };

  return (
    <div className="hidden sm:block sticky top-0 z-30 bg-black py-8 space-y-4 px-2 sm:px-64">
      <div className="hidden sm:flex text-white space-x-8">
        <SearchForm setFocused={setFocused} setplace={setplace} />

        {isAuthenticated && user != "" ? <AuthLinks /> : <GuestLinks />}
      </div>

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
