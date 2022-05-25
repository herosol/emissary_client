import React from "react";
import { Link } from "react-router-dom";
import ImageControl from "../../common/ImageControl";
import * as helpers from "../../../helpers/helpers";
import Text from "../../common/Text";

function BlogPosts({ blog, cats }) {
  return (
    <>
      <section id="blog">
        <div className="contain">
          <div className="flex_row main_row">
            <div className="col col1">
              <div className="in_col">
                <div className="post_blk_detail">
                  <div className="fig">
                    <ImageControl
                      folder="blogs"
                      src={blog.image}
                      specificWidth="700p_"
                    />
                  </div>
                  <div className="br"></div>
                  <div className="txt">
                    <div className="date">
                      {helpers.blogsDateFormat(blog.created_date)}
                    </div>
                    <h2 className="fancy">
                      <Text string={blog.title} />
                    </h2>
                    <Text string={blog.description} parse={true} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col col2">
              <div className="in_col article_wrap">
                <div className="ctgry_blk blk">
                  <h4 className="color">Blog Categories</h4>
                  <ul>
                    {cats.map((c) => {
                      return (
                        <li key={c.id}>
                          <Link to={`/blog/${c.id}`}>{c.title}</Link>
                        </li>
                      );
                    })}
                  </ul>
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
