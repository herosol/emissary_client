import React from "react";
import { Link } from "react-router-dom";

const JobBlk = ({
  src,
  alt,
  title,
  para,
  link,
  date,
  experience,
  location,
  salary,
  company,
  company_link,
  act_btn
}) => {
  return (
    <>
      <div className="job_blk">
        <div className="top">
          <div className="title">
            <h5>
              <Link to={link}>{title}</Link>
            </h5>
            <p>{para}</p>
            <ul className="mini_lst">
              <li>
                <span>Post Data:</span> {date}
              </li>
              <li>
                <span>Experience:</span> {experience}
              </li>
              <li>
                <span>Location:</span> {location}
              </li>
              <li>
                <span>Salary:</span> {salary}
              </li>
            </ul>
          </div>
          <div className="act_btn">
            <Link to="?" className="site_btn sm">
              {act_btn.view}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobBlk;
