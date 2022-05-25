import React, { useEffect } from "react";
import Data from "../../dummy";
import Cover from "../../common/Cover";
import BlogPosts from "./BlogPosts";
import { fetchBlogs } from "../../../states/actions/fetchBlogs";
import { useSelector, useDispatch } from "react-redux";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import LoadingScreen from "../../common/LoadingScreen";
import { useParams } from "react-router-dom";

const Blog = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const data = useSelector((state) => state.fetchBlogs.content);
  const isLoading = useSelector((state) => state.fetchBlogs.isLoading);
  const { content, blogs, cats } = data;
  useEffect(() => {
    dispatch(fetchBlogs(`blogs/${id}`));
  }, [id]);
  useDocumentTitle(data.page_title);
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Cover content={content} />
          <BlogPosts blogs={blogs} cats={cats} />
        </>
      )}
    </>
  );
};

export default Blog;
