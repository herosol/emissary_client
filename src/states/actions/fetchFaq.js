import http from "../../helpers/http";

import {
  FETCH_FAQ_CONTENT,
  FETCH_FAQ_CONTENT_SUCCESS,
  FETCH_FAQ_CONTENT_FAILED
} from "./actionTypes";

export const fetchFaq = (path) => (dispatch) => {
  dispatch({
    type: FETCH_FAQ_CONTENT,
    payload: null
  });
  http
    .get(path)
    .then(({ data }) => {
      dispatch({
        type: FETCH_FAQ_CONTENT_SUCCESS,
        payload: data
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_FAQ_CONTENT_FAILED,
        payload: error
      });
    });
};
