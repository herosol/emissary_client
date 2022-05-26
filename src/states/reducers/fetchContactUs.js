import {
  FETCH_CONTACT_US_CONTENT,
  FETCH_CONTACT_US_CONTENT_SUCCESS,
  FETCH_CONTACT_US_CONTENT_FAILED,
  SAVE_CONTACT_MESSAGE,
  SAVE_CONTACT_MESSAGE_SUCCESS,
  SAVE_CONTACT_MESSAGE_FAILED
} from "../actions/actionTypes";

const initialState = {
  isLoading: true,
  content: {},
  isFormProcessing: false,
  error: false
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_CONTACT_US_CONTENT:
      return {
        ...state,
        isLoading: true,
        content: {}
      };
    case FETCH_CONTACT_US_CONTENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        content: payload
      };
    case FETCH_CONTACT_US_CONTENT_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload
      };
    case SAVE_CONTACT_MESSAGE:
      return {
        ...state,
        isFormProcessing: true
      };
    case SAVE_CONTACT_MESSAGE_SUCCESS:
      return {
        ...state,
        isFormProcessing: false
      };
    case SAVE_CONTACT_MESSAGE_FAILED:
      return {
        ...state,
        isFormProcessing: false,
        error: payload
      };
    default:
      return state;
  }
}
