import React, { useEffect } from "react";
import Cover from "../../common/Cover";
import JobList from "./JobList";
import { fetchJobs, searchJobsData } from "../../../states/actions/fetchJobs";
import { useSelector, useDispatch } from "react-redux";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import LoadingScreen from "../../common/LoadingScreen";

const Jobs = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fetchJobs.content);
  const isLoading = useSelector((state) => state.fetchJobs.isLoading);
  const isSearching = useSelector((state) => state.fetchJobs.isSearching);
  const jobs = useSelector((state) => state.fetchJobs.jobs);
  const { content, cities, cats, types } = data;
  useEffect(() => {
    dispatch(fetchJobs(`jobs`));
  }, []);

  const searchJobs = (filters) => {
    dispatch(searchJobsData(filters));
  };

  useDocumentTitle(data.page_title);
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Cover content={content} />
          <JobList
            jobs={jobs}
            cities={cities}
            cats={cats}
            types={types}
            searchJobs={searchJobs}
            isSearching={isSearching}
          />
        </>
      )}
    </>
  );
};

export default Jobs;
