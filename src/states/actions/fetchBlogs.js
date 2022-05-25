import http from "../../helpers/http";

import {
  FETCH_BLOGS_CONTENT,
  FETCH_BLOGS_CONTENT_SUCCESS,
  FETCH_BLOGS_CONTENT_FAILED
} from "./actionTypes";

export const fetchBlogs = (path) => (dispatch) => {
  dispatch({
    type: FETCH_BLOGS_CONTENT,
    payload: null
  });
  http
    .get(path)
    .then(({ data }) => {
      dispatch({
        type: FETCH_BLOGS_CONTENT_SUCCESS,
        payload: data
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_BLOGS_CONTENT_FAILED,
        payload: error
      });
    });
};
