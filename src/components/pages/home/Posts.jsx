import React from "react";
import BlogBlock from "../../common/BlogBlock";
import Text from "../../common/Text";

function Posts({ content, blogs }) {
  return (
    <>
      <section id="posts">
        <div className="contain">
          <h1 className="heading text-center">
            <Text string={content.blogs_heading} />
          </h1>
          <div className="flex_row main_row">
            {blogs.map((blog) => {
              return (
                <div className="col" key={blog.id}>
                  <BlogBlock {...blog} />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Posts;
