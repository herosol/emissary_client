import React, { useEffect } from "react";
import Cover from "../../common/Cover";
import PrivacyPolicy from "./PrivacyPolicy";
import { fetchPrivacyPolicy } from "../../../states/actions/fetchPrivacyPolicy";
import { useSelector, useDispatch } from "react-redux";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import LoadingScreen from "../../common/LoadingScreen";

const Privacy = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fetchPrivacyPolicy.content);
  const isLoading = useSelector((state) => state.fetchPrivacyPolicy.isLoading);
  console.log(data, isLoading);

  const { content } = data;
  useEffect(() => {
    dispatch(fetchPrivacyPolicy("privacy-policy"));
  }, []);
  useDocumentTitle(data.page_title);
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Cover content={content} />
          <PrivacyPolicy content={content} />
        </>
      )}
    </>
  );
};

export default Privacy;
