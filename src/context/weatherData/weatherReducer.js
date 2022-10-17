import {
  GET_WEATHER,
  GET_WEATHER_FAIL,
  GET_LOCATION,
  GET_LOCATION_FAIL,
  CLEAR_STATE,
  SET_CURRENT,
  SET_CURRENT_FAIL,
  GET_FORECAST_FAIL,
  USE_MY_GEO_POSITION,
  USE_MY_GEO_POSITION_FAIL,
  GET_DAILY_FORECAST,
  GET_DAILY_FORECAST_FAIL,
  GET_HOURLY_FORECAST,
  GET_HOURLY_FORECAST_FAIL,
} from "../types";

const weather = (state, action) => {
  // console.log("action: \n", action);
  // console.log("STATE: \n", state);

  switch (action.type) {
    case GET_LOCATION:
      return {
        ...state,
        error: null,
        geo: action.payload.map((item) => {
          return {
            key: item?.Key,
            name: item?.LocalizedName,
            localizedName: item?.LocalizedName,
            countryCode: item?.Country?.ID,
            country: item?.Country?.LocalizedName,
          };
        }),
        loading: false,
      };

    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
        loading: false,
      };

    case GET_WEATHER:
      return {
        ...state,
        weather: action.payload,
        loading: false,
      };

    case USE_MY_GEO_POSITION_FAIL:
      return {
        ...state,
        weather: action.payload,
        loading: false,
      };

    case GET_DAILY_FORECAST:
      return {
        ...state,
        daily: action.payload,
        loading: false,
      };

    case GET_HOURLY_FORECAST:
      return {
        ...state,
        hourly: action.payload,
        loading: false,
      };

    case GET_LOCATION_FAIL:
    case GET_WEATHER_FAIL:
    case SET_CURRENT_FAIL:
    case GET_FORECAST_FAIL:
    case USE_MY_GEO_POSITION_FAIL:
    case GET_DAILY_FORECAST_FAIL:
    case GET_HOURLY_FORECAST_FAIL:
      return {
        weather: null,
        unit: "metric",
        hourly: [],
        daily: [],
        error: action.payload,
        geo: null,
        loading: false,
        current: {},
      };

    case CLEAR_STATE:
      return { ...state, error: null, geo: null, loading: true };

    default:
      return state;
  }
};

export default weather;
