import http from "../../helpers/http";

import {
  FETCH_CONTENT,
  FETCH_CONTENT_SUCCESS,
  FETCH_CONTENT_FAILED
} from "./actionTypes";

export const fetchData = (path) => (dispatch) => {
  dispatch({
    type: FETCH_CONTENT,
    payload: null
  });
  http
    .get(path)
    .then(({ data }) => {
      dispatch({
        type: FETCH_CONTENT_SUCCESS,
        payload: data
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_CONTENT_FAILED,
        payload: error
      });
    });
};
