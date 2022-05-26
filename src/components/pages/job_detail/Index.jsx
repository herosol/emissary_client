import React, { useEffect } from "react";
import Cover from "../../common/Cover";
import JobPosts from "./JobPosts";
import { fetchJobDetail } from "../../../states/actions/fetchJobDetail";
import { useSelector, useDispatch } from "react-redux";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import LoadingScreen from "../../common/LoadingScreen";
import { useParams } from "react-router-dom";

const JobDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const data = useSelector((state) => state.fetchJobDetail.content);
  const isLoading = useSelector((state) => state.fetchJobDetail.isLoading);
  const { content, job } = data;
  useEffect(() => {
    dispatch(fetchJobDetail(`job-detail/${id}`));
  }, [id]);
  useDocumentTitle(data.page_title);
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Cover content={content} />
          <JobPosts job={job} />
        </>
      )}
    </>
  );
};

export default JobDetail;
