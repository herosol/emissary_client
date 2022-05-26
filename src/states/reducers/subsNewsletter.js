import {
  SUBS_NEWSLETTER,
  SUBS_NEWSLETTER_SUCCESS,
  SUBS_NEWSLETTER_FAILED
} from "../actions/actionTypes";

const initialState = {
  isFormProcessing: false,
  error: false
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case SUBS_NEWSLETTER:
      return {
        ...state,
        isFormProcessing: true
      };
    case SUBS_NEWSLETTER_SUCCESS:
      console.log("here");
      return {
        ...state,
        isFormProcessing: false
      };
    case SUBS_NEWSLETTER_FAILED:
      return {
        ...state,
        isFormProcessing: false,
        error: payload
      };
    default:
      return state;
  }
}
