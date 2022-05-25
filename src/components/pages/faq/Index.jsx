import React, { useEffect } from "react";
import Cover from "../../common/Cover";
import Accordion from "./Accordion";
import { fetchData } from "../../../states/actions/fetchData";
import { useSelector, useDispatch } from "react-redux";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import LoadingScreen from "../../common/LoadingScreen";

const Faq = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fetchData.content);
  const isLoading = useSelector((state) => state.fetchData.isLoading);
  const { content, faqs } = data;
  useEffect(() => {
    dispatch(fetchData("faqs"));
  }, []);
  useDocumentTitle(data.page_title);
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Cover content={content} />
          <Accordion faqs={faqs} />
        </>
      )}
    </>
  );
};

export default Faq;
