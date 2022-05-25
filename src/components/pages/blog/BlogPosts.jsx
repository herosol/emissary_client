import React from "react";
import { Link } from "react-router-dom";
import BlogBlock from "../../common/BlogBlock";

function BlogPosts({ blogs, cats }) {
  return (
    <>
      <section id="blog">
        <div className="contain">
          <div className="flex_row main_row">
            <div className="col col1">
              <div className="in_col">
                <div className="flex_row sub_row">
                  {blogs.map((blog) => {
                    return (
                      <div className="col" key={blog.id}>
                        <BlogBlock {...blog} />
                      </div>
                    );
                  })}
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
