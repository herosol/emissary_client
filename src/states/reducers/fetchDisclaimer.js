import {
  FETCH_DISCLAIMER_CONTENT,
  FETCH_DISCLAIMER_CONTENT_SUCCESS,
  FETCH_DISCLAIMER_CONTENT_FAILED
} from "../actions/actionTypes";

const initialState = {
  isLoading: true,
  content: {},
  error: false
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_DISCLAIMER_CONTENT:
      return {
        ...state,
        isLoading: true,
        content: {}
      };
    case FETCH_DISCLAIMER_CONTENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        content: payload
      };
    case FETCH_DISCLAIMER_CONTENT_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload
      };
    default:
      return state;
  }
}
