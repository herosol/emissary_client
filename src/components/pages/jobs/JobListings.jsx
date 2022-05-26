import React from "react";
import JobBlk from "../../common/JobBlk";

const JobListings = ({ jobs, isSearching }) => {
  return (
    <>
      <div className="flex_row job_row row">
        {isSearching ? (
          <div className="col">Fetching...</div>
        ) : jobs.length === 0 ? (
          <div className="col">No record found.</div>
        ) : (
          jobs.map((job) => {
            return (
              <div className="col" key={job.id}>
                <JobBlk {...job} />
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default JobListings;
