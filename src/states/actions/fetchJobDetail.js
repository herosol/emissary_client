import http from "../../helpers/http";

import {
  FETCH_JOB_DETAIL_CONTENT,
  FETCH_JOB_DETAIL_CONTENT_SUCCESS,
  FETCH_JOB_DETAIL_CONTENT_FAILED
} from "./actionTypes";

export const fetchJobDetail = (path) => (dispatch) => {
  dispatch({
    type: FETCH_JOB_DETAIL_CONTENT,
    payload: null
  });
  http
    .get(path)
    .then(({ data }) => {
      dispatch({
        type: FETCH_JOB_DETAIL_CONTENT_SUCCESS,
        payload: data
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_JOB_DETAIL_CONTENT_FAILED,
        payload: error
      });
    });
};
