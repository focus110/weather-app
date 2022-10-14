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
  GET_FORECAST,
  GET_FORECAST_FAIL,
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
  const GEO_API_URL = "https://dataservice.accuweather.com";
  const ACCU_WEATHER_API_URL = "https://dataservice.accuweather.com";

  // SET_CURRENT
  const setCurrent = ({ key, name, localizedName, countryCode, country }) => {
    const payload = {};
    if (key) payload.Key = key;
    if (name) payload.name = name;
    if (localizedName) payload.localizedName = localizedName;
    if (countryCode) payload.countryCode = countryCode;
    if (country) payload.country = country;

    try {
      dispatch({ type: SET_CURRENT, payload: payload });
    } catch (error) {
      dispatch({ type: SET_CURRENT_FAIL, payload: error });
    }
  };

  // autocomplete
  const autocomplete = async (q) => {
    const options = {
      method: "GET",
      url: GEO_API_URL + "/locations/v1/cities/autocomplete",
      params: { q, apikey: process.env.REACT_APP_ACCU_WEATHER_API_KEY },
    };

    try {
      const res = await axios.request(options);
      dispatch({ type: GET_LOCATION, payload: res.data });
    } catch (error) {
      dispatch({ type: GET_LOCATION_FAIL, payload: error.message });
    }
  };

  // get weather
  const getWeather = async ({ Key }) => {
    const options = {
      method: "GET",
      url: `${ACCU_WEATHER_API_URL}/currentconditions/v1/daily/1day/${Key}`,
      params: {
        apikey: `${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`,
        details: true,
      },
      headers: {
        // "X-RapidAPI-Key": process.env.REACT_APP_OPEN_WEATHER_API_KEY,
        "Access-Control-Allow-Origin": "*",
      },
    };

    try {
      const res = await axios.request(options);
      console.log(res);
      dispatch({ type: GET_WEATHER, payload: res.data });
    } catch (error) {
      dispatch({ type: GET_WEATHER_FAIL, payload: error });
    }
  };

  // GET FORECAST
  const getForecast = async ({ lat, lon }) => {
    const options = {
      method: "GET",
      // url: `${OPEN_WEATHER_API_URL}/forecast/hourly`,
      params: {
        lat: `${lat}`,
        lon: `${lon}`,
        appid: `${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`,
      },
      // headers: {
      //   "X-RapidAPI-Key": process.env.REACT_APP_OPEN_WEATHER_API_KEY,
      //   "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
      // },
    };

    try {
      const res = await axios.request(options);

      dispatch({ type: GET_FORECAST, payload: res });
    } catch (error) {
      dispatch({ type: GET_FORECAST_FAIL, payload: error });
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
        autocomplete,
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
