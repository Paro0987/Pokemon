import {
  FETCHDATAERROR,
  FETCHDATAREQUEST,
  FETCHDATASUCCESS,
} from "./actionTypes";
import axios from "axios";

export const loadingAction = () => {
  return { type: FETCHDATAREQUEST };
};

export const errorAction = () => {
  return { type: FETCHDATAERROR };
};

export const successAction = (data) => {
  return { type: FETCHDATASUCCESS, payload: data };
};

export const fetchData = (url) => async (dispatch) => {
  try {
    dispatch(loadingAction());

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    dispatch(successAction(data.data));
  } catch (error) {
    dispatch(errorAction());
  }
};
