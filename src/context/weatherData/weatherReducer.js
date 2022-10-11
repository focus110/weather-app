import {
  GET_WEATHER,
  GET_WEATHER_FAIL,
  GET_LOCATION,
  GET_LOCATION_FAIL,
  CLEAR_STATE,
} from "../types";

const weather = (state, action) => {
  console.log("action: \n", action);
  // console.log("STATE: \n", state);

  switch (action.type) {
    case GET_LOCATION:
      return {
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

    case GET_WEATHER:
      return {
        ...state,
        geo: action.payload,
        loading: false,
      };

    case GET_LOCATION_FAIL:
    case GET_WEATHER_FAIL:
      return {
        error: action.payload,
        geo: null,
        loading: false,
      };

    case CLEAR_STATE:
      return {
        error: null,
        geo: null,
        loading: true,
      };

    default:
      return state;
  }
};

export default weather;
