import http from "../../helpers/http";

import {
  FETCH_TERMS_CONTENT,
  FETCH_TERMS_CONTENT_SUCCESS,
  FETCH_TERMS_CONTENT_FAILED
} from "./actionTypes";

export const fetchTerms = (path) => (dispatch) => {
  dispatch({
    type: FETCH_TERMS_CONTENT,
    payload: null
  });
  http
    .get(path)
    .then(({ data }) => {
      dispatch({
        type: FETCH_TERMS_CONTENT_SUCCESS,
        payload: data
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_TERMS_CONTENT_FAILED,
        payload: error
      });
    });
};
