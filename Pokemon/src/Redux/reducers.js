import {
  FETCHDATAERROR,
  FETCHDATAREQUEST,
  FETCHDATASUCCESS,
} from "./actionTypes";

const iniState = {
  isLoading: false,
  isError: false,
  data: [],
};

export const pokemonReducer = (state = iniState, { type, payload }) => {
  switch (type) {
    case FETCHDATAREQUEST: {
      return { ...state, isLoading: true, isError: false };
    }
    case FETCHDATAERROR: {
      return { ...state, isLoading: false, isError: true };
    }
    case FETCHDATASUCCESS: {
      return { ...state, isLoading: false, isError: false, data: payload };
    }

    default:
      return state;
  }
};
