import {
  GET_WEATHER,
  GET_WEATHER_FAIL,
  GET_LOCATION,
  GET_LOCATION_FAIL,
  CLEAR_STATE,
  SET_CURRENT,
  SET_CURRENT_FAIL,
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
            latitude: item?.latitude,
            longitude: item?.longitude,
            name: item?.name,
            countryCode: item?.countryCode,
            country: item?.country,
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

    case GET_LOCATION_FAIL:
    case GET_WEATHER_FAIL:
    case SET_CURRENT_FAIL:
      return {
        weather: null,
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
