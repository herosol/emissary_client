import React, { useEffect } from "react";
import Cover from "../../common/Cover";
import BlogPosts from "./BlogPosts";
import { fetchData } from "../../../states/actions/fetchData";
import { useSelector, useDispatch } from "react-redux";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import LoadingScreen from "../../common/LoadingScreen";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const data = useSelector((state) => state.fetchData.content);
  const isLoading = useSelector((state) => state.fetchData.isLoading);
  const { content, blog, cats } = data;
  useEffect(() => {
    dispatch(fetchData(`blog-detail/${id}`));
  }, [id]);
  useDocumentTitle(data.page_title);
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Cover content={content} />
          <BlogPosts blog={blog} cats={cats} />
        </>
      )}
    </>
  );
};

export default BlogDetail;
