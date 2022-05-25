import { combineReducers } from "redux";
import fetchData from "./fetchData";
import fetchHome from "./fetchHome";
import fetchBlogs from "./fetchBlogs";
import fetchPrivacyPolicy from "./fetchPrivacyPolicy";
import fetchTerms from "./fetchTerms";
import fetchDisclaimer from "./fetchDisclaimer";
import fetchAbout from "./fetchAbout";
import fetchBlogDetail from "./fetchBlogDetail";
import fetchFaq from "./fetchFaq";

export default combineReducers({
  fetchData,
  fetchHome,
  fetchBlogs,
  fetchPrivacyPolicy,
  fetchTerms,
  fetchDisclaimer,
  fetchAbout,
  fetchBlogDetail,
  fetchFaq
});
