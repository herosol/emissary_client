import React from "react";
import Data from "../../dummy";
import Cover from "../../common/Cover";
import BlogPosts from "./BlogPosts";

const BlogDetail = () => {
	const { cover, posts } = Data.blog_detail;
	return (
		<>
			<Cover data={cover} />
			<BlogPosts data={posts} />
		</>
	);
};

export default BlogDetail;
