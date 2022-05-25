import React from "react";
import { Link } from "react-router-dom";
import Text from "../common/Text";
import ImageControl from "../common/ImageControl";
import * as helpers from "../../helpers/helpers";

function BlogBlock(blog) {
  return (
    <>
      <div className="blog_blk">
        <div className="fig">
          <Link to={`/blog/blog-detail/${blog.id}`}>
            <ImageControl
              folder="blogs"
              src={blog.image}
              specificWidth="400p_"
            />
          </Link>
        </div>
        <div className="txt">
          <div className="date">
            {helpers.blogsDateFormat(blog.created_date)}
          </div>
          <h4 className="fancy">
            <Link to={`/blog/blog-detail/${blog.id}`}>
              <Text string={blog.title} />
            </Link>
          </h4>
          <Text string={blog.description} parse={true} length={150} />
          <Link to={`/blog/blog-detail/${blog.id}`} className="site_btn text">
            Learn More
          </Link>
        </div>
      </div>
    </>
  );
}

export default BlogBlock;
