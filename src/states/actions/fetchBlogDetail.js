import http from "../../helpers/http";

import {
  FETCH_BLOG_DETAIL_CONTENT,
  FETCH_BLOG_DETAIL_CONTENT_SUCCESS,
  FETCH_BLOG_DETAIL_CONTENT_FAILED
} from "./actionTypes";

export const fetchBlogDetail = (path) => (dispatch) => {
  dispatch({
    type: FETCH_BLOG_DETAIL_CONTENT,
    payload: null
  });
  http
    .get(path)
    .then(({ data }) => {
      dispatch({
        type: FETCH_BLOG_DETAIL_CONTENT_SUCCESS,
        payload: data
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_BLOG_DETAIL_CONTENT_FAILED,
        payload: error
      });
    });
};
