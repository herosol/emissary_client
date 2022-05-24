import React from "react";
import Data from "../../dummy";
import Cover from "../../common/Cover";
import BlogPosts from "./BlogPosts";

const Blog = () => {
	const { cover, posts } = Data.blog;
	return (
		<>
			<Cover data={cover} />
			<BlogPosts data={posts} />
		</>
	);
};

export default Blog;
