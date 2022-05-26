import React, { useEffect } from "react";
import Cover from "../../common/Cover";
import ContactUs from "./ContactUs";
import {
  fetchContactUs,
  saveContact
} from "../../../states/actions/fetchContactUs";
import { useSelector, useDispatch } from "react-redux";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import LoadingScreen from "../../common/LoadingScreen";

const Contact = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fetchContactUs.content);
  const isLoading = useSelector((state) => state.fetchContactUs.isLoading);
  const isFormProcessing = useSelector(
    (state) => state.fetchContactUs.isFormProcessing
  );
  const { content } = data;
  useEffect(() => {
    dispatch(fetchContactUs("contact-us"));
  }, []);
  const saveContactMessage = (post) => {
    dispatch(saveContact(post));
  };
  useDocumentTitle(data.page_title);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Cover content={content} />
          <ContactUs
            content={content}
            saveContactMessage={saveContactMessage}
            isFormProcessing={isFormProcessing}
          />
        </>
      )}
    </>
  );
};

export default Contact;
