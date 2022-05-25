import React, { useEffect } from "react";
import Cover from "../../common/Cover";
import TermsConditions from "./TermsConditions";
import { fetchTerms } from "../../../states/actions/fetchTerms";
import { useSelector, useDispatch } from "react-redux";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import LoadingScreen from "../../common/LoadingScreen";

const Terms = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fetchTerms.content);
  const isLoading = useSelector((state) => state.fetchTerms.isLoading);
  const { content } = data;
  useEffect(() => {
    dispatch(fetchTerms("terms-and-conditions"));
  }, []);
  useDocumentTitle(data.page_title);
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Cover content={content} />
          <TermsConditions content={content} />
        </>
      )}
    </>
  );
};

export default Terms;
