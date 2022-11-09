import { useReducer } from "react";
import WeatherContext from "./weatherContext";
import weatherReducer from "./weatherReducer";
import axios from "axios";
import {
  SAVED_WEATHER_SUCCESS,
  GET_ALL_WEATHER_SUCCESS,
  GET_WEATHER_BY_ID_SUCCESS,
  DELETE_WEATHER_SUCCESS,
  SAVED_WEATHER_ERROR,
  GET_ALL_WEATHER_ERROR,
  GET_WEATHER_BY_ID_ERROR,
  DELETE_WEATHER_ERROR,
} from "../types";
import setAuthToken from "../../utils/setAuthToken";

const WeatherState = ({ children }) => {
  const initials = {
    savedWeather: [],
    error: null,
    weatherItem: null,
    loading: true,
  };

  const [state, dispatch] = useReducer(weatherReducer, initials);

  const baseUrl = "http://localhost:5000/";

  // SAVE WEATHER
  const saveWeather = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(`${baseUrl}api/weather`, formData, config);
      getAllWeather();
      dispatch({ type: SAVED_WEATHER_SUCCESS, payload: res.data.data });
    } catch (err) {
      dispatch({ SAVED_WEATHER_ERROR, payload: err.response.data.message });
    }
  };

  // GET ALL WEATHER
  const getAllWeather = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(`${baseUrl}api/weather`, config);

      dispatch({ type: GET_ALL_WEATHER_SUCCESS, payload: res.data.data });
    } catch (err) {
      dispatch({ type: GET_ALL_WEATHER_ERROR, payload: err });
    }
  };

  // GET WEATHER BY ID
  const getWeatherById = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.get(`${baseUrl}api/weather`, config);

      dispatch({ type: GET_WEATHER_BY_ID_SUCCESS, payload: res.data.data });
    } catch (err) {
      dispatch({ type: GET_WEATHER_BY_ID_ERROR, payload: err });
    }
  };

  // DELETE WEATHER
  const deleteWeather = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.delete(`${baseUrl}api/weather`, config);

      dispatch({ type: DELETE_WEATHER_SUCCESS, payload: res.data.data });
    } catch (err) {
      dispatch({ type: DELETE_WEATHER_ERROR, payload: err });
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        savedWeather: state.savedWeather,
        error: state.error,
        weatherItem: state.weatherItem,
        loading: state.loading,
        saveWeather,
        getAllWeather,
        getWeatherById,
        deleteWeather,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherState;
