import http from "../../helpers/http";
import * as helpers from "../../helpers/helpers";
import { toast } from "react-toastify";
import { TOAST_SETTINGS } from "../../utils/siteSettings";
import Text from "../../components/common/Text";

import {
  SUBS_NEWSLETTER,
  SUBS_NEWSLETTER_SUCCESS,
  SUBS_NEWSLETTER_FAILED
} from "./actionTypes";

export const subsNewsletter = (formData) => (dispatch) => {
  dispatch({
    type: SUBS_NEWSLETTER,
    payload: null
  });
  http
    .post("subs-newsletter", helpers.doObjToFormData(formData))
    .then(({ data }) => {
      if (data.validationErrors) {
        toast.error(
          <Text string={data.validationErrors} parse={true} />,
          TOAST_SETTINGS
        );
      } else {
        toast.success("Successfully Subscribed!.", TOAST_SETTINGS);
      }
      dispatch({
        type: SUBS_NEWSLETTER_SUCCESS,
        payload: data
      });
    })
    .catch((error) => {
      dispatch({
        type: SUBS_NEWSLETTER_FAILED,
        payload: error
      });
    });
};
