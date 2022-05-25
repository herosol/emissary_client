import React, { useEffect } from "react";
import Banner from "./Banner";
import Brands from "./Brands";
import Blocks from "./Blocks";
import Serve from "../../common/Serve";
import Choose from "../../common/Choose";
import Agency from "../../common/Agency";
import Posts from "./Posts";
import { fetchHome } from "../../../states/actions/fetchHome";
import { useSelector, useDispatch } from "react-redux";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import LoadingScreen from "../../common/LoadingScreen";

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fetchHome.content);
  const isLoading = useSelector((state) => state.fetchHome.isLoading);
  const { content, partners, blogs } = data;
  useEffect(() => {
    dispatch(fetchHome("home"));
  }, []);
  useDocumentTitle(data.page_title);
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Banner content={content} />
          <Brands partners={partners} />
          <Blocks content={content} />
          <Serve content={content} />
          <Choose content={content} />
          <Agency content={content} />
          <Posts content={content} blogs={blogs} />
        </>
      )}
    </>
  );
};
export default Home;
