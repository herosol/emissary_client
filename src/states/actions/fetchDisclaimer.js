import http from "../../helpers/http";

import {
  FETCH_DISCLAIMER_CONTENT,
  FETCH_DISCLAIMER_CONTENT_SUCCESS,
  FETCH_DISCLAIMER_CONTENT_FAILED
} from "./actionTypes";

export const fetchDisclaimer = (path) => (dispatch) => {
  dispatch({
    type: FETCH_DISCLAIMER_CONTENT,
    payload: null
  });
  http
    .get(path)
    .then(({ data }) => {
      dispatch({
        type: FETCH_DISCLAIMER_CONTENT_SUCCESS,
        payload: data
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_DISCLAIMER_CONTENT_FAILED,
        payload: error
      });
    });
};
