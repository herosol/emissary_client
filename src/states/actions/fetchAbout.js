import http from "../../helpers/http";

import {
  FETCH_ABOUT_CONTENT,
  FETCH_ABOUT_CONTENT_SUCCESS,
  FETCH_ABOUT_CONTENT_FAILED
} from "./actionTypes";

export const fetchAbout = (path) => (dispatch) => {
  dispatch({
    type: FETCH_ABOUT_CONTENT,
    payload: null
  });
  http
    .get(path)
    .then(({ data }) => {
      dispatch({
        type: FETCH_ABOUT_CONTENT_SUCCESS,
        payload: data
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_ABOUT_CONTENT_FAILED,
        payload: error
      });
    });
};
