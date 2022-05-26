import React from "react";
import { Link } from "react-router-dom";
import Text from "./Text";
import * as helpers from "../../helpers/helpers";

const JobBlk = (job) => {
  return (
    <>
      <div className="job_blk">
        <div className="top">
          <div className="title">
            <h5>
              <Link to={`/job/job-detail/${job.id}`}>{job.title}</Link>
            </h5>
            <Text string={job.description} parse={true} length={150} />
            <ul className="mini_lst">
              <li>
                <span>Post Data:</span>{" "}
                {helpers.blogsDateFormat(job.created_date)}
              </li>
              <li>
                <span>Experience:</span>{" "}
                {job.years_of_experience == 10
                  ? "10+"
                  : job.years_of_experience}{" "}
                Year(s)
              </li>
              <li>
                <span>Location:</span> {job.city}
              </li>
              <li>
                <span>Salary:</span> {job.min_salary}K - {job.max_salary}K
              </li>
            </ul>
          </div>
          <div className="act_btn">
            <Link to={`/job/job-detail/${job.id}`} className="site_btn sm">
              View Detail
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobBlk;
