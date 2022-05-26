import React from "react";
import { Link } from "react-router-dom";
import ImageControl from "../../common/ImageControl";
import * as helpers from "../../../helpers/helpers";
import Text from "../../common/Text";

function BlogPosts({ job }) {
  return (
    <>
      <section id="blog">
        <div className="contain">
          <div className="flex_row main_row">
            <div className="col col1">
              <div className="in_col">
                <div className="post_blk_detail">
                  <div className="fig"></div>
                  <div className="br"></div>
                  <div className="txt">
                    <h2 className="fancy">
                      <Text string={job.title} />
                    </h2>
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
                        <span>Salary:</span> {job.min_salary}K -{" "}
                        {job.max_salary}K
                      </li>
                    </ul>
                    <Text string={job.description} parse={true} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogPosts;
