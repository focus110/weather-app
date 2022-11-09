import React from "react";
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

const weatherReducer = (state, action) => {
  // log
  console.log("action", action);

  switch (action.type) {
    case SAVED_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case GET_ALL_WEATHER_SUCCESS:
      return {
        ...state,
        savedWeather: action.payload,
        loading: false,
      };

    case GET_WEATHER_BY_ID_SUCCESS:
      return {
        ...state,
        weatherItem: action.payload,
        loading: false,
      };

    case DELETE_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case SAVED_WEATHER_ERROR:
    case GET_ALL_WEATHER_ERROR:
    case GET_WEATHER_BY_ID_ERROR:
    case DELETE_WEATHER_ERROR:
      return {
        savedWeather: [],
        weatherItem: null,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default weatherReducer;
