import { useReducer } from "react";
import weatherContext from "./weatherContext";
import weatherReducer from "./weatherReducer";
import axios from "axios";
import {
  GET_WEATHER,
  GET_WEATHER_FAIL,
  GET_LOCATION,
  GET_LOCATION_FAIL,
  CLEAR_STATE,
  SET_CURRENT,
  SET_CURRENT_FAIL,
} from "../types";

const WeatherState = ({ children }) => {
  const initialState = {
    error: null,
    geo: null,
    loading: true,
    weather: null,
    current: { unit: "metric" },
    forecast: null,
  };

  const [state, dispatch] = useReducer(weatherReducer, initialState);

  // GEO_API_URL
  const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
  const OPEN_WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";

  // SET_CURRENT
  const setCurrent = ({ lat, lon, unit, name, countryCode, country }) => {
    const payload = {};
    if (lat) payload.lat = lat;
    if (lon) payload.lon = lon;
    if (unit) payload.unit = unit;
    if (name) payload.name = name;
    if (countryCode) payload.countryCode = countryCode;
    if (country) payload.country = country;

    try {
      dispatch({ type: SET_CURRENT, payload: payload });
    } catch (error) {
      dispatch({ type: SET_CURRENT_FAIL, payload: error });
    }
  };

  // GET_LOCATION LAT & LON
  const getLocation = async (inputValue) => {
    const options = {
      method: "GET",
      url: GEO_API_URL + "/cities",
      params: { namePrefix: inputValue },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_GEO_API_KEY,
        "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
      },
    };

    try {
      const res = await axios.request(options);
      dispatch({ type: GET_LOCATION, payload: res.data.data });
    } catch (error) {
      dispatch({ type: GET_LOCATION_FAIL, payload: error.message });
    }
  };

  // GET WEATHER
  const getWeather = async ({ lat, lon, unit }) => {
    const options = {
      method: "GET",
      url: `${OPEN_WEATHER_API_URL}/weather`,
      params: {
        lat,
        lon,
        appid: `${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`,
        units: unit,
      },
    };

    try {
      const res = await axios.request(options);

      dispatch({ type: GET_WEATHER, payload: res.data });
    } catch (error) {
      dispatch({ type: GET_WEATHER_FAIL, payload: error });
    }
  };

  // GET FORECAST
  const getForecast = async ({ lat, lon }) => {
    const options = {
      method: "GET",
      url: `${OPEN_WEATHER_API_URL}/forecast`,
      params: {
        lat: `${lat}`,
        lon: `${lon}`,
        appid: `${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`,
      },
      headers: {
        // "X-RapidAPI-Key": process.env.REACT_APP_OPEN_WEATHER_API_KEY,
        // "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
      },
    };

    try {
      const res = await axios.request(options);

      dispatch({ type: GET_WEATHER, payload: res });
    } catch (error) {
      dispatch({ type: GET_WEATHER_FAIL, payload: error });
    }
  };

  // CLEAR STATE
  const clearState = () => dispatch({ type: CLEAR_STATE });

  return (
    <weatherContext.Provider
      value={{
        error: state.error,
        geo: state.geo,
        loading: state.loading,
        weather: state.weather,
        forecast: state.forecast,
        current: state.current,
        getLocation,
        getWeather,
        clearState,
        getForecast,
        setCurrent,
      }}
    >
      {children}
    </weatherContext.Provider>
  );
};

export default WeatherState;
