import http from "../../helpers/http";

import {
  FETCH_PRIVACY_POLICY_CONTENT,
  FETCH_PRIVACY_POLICY_CONTENT_SUCCESS,
  FETCH_PRIVACY_POLICY_CONTENT_FAILED
} from "./actionTypes";

export const fetchPrivacyPolicy = (path) => (dispatch) => {
  dispatch({
    type: FETCH_PRIVACY_POLICY_CONTENT,
    payload: null
  });
  http
    .get(path)
    .then(({ data }) => {
      dispatch({
        type: FETCH_PRIVACY_POLICY_CONTENT_SUCCESS,
        payload: data
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_PRIVACY_POLICY_CONTENT_FAILED,
        payload: error
      });
    });
};
