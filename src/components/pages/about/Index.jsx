import React, { useEffect } from "react";
import Cover from "../../common/Cover";
import Intro from "./Intro";
import Assets from "./Assets";
import Team from "./Team";
import { fetchAbout } from "../../../states/actions/fetchAbout";
import { useSelector, useDispatch } from "react-redux";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import LoadingScreen from "../../common/LoadingScreen";

const About = (props) => {
  //   const { cover, intro, assets, team } = Data.about;
  const dispatch = useDispatch();
  const data = useSelector((state) => state.fetchAbout.content);
  const isLoading = useSelector((state) => state.fetchAbout.isLoading);
  const { content } = data;
  useEffect(() => {
    dispatch(fetchAbout("about-us"));
  }, []);
  useDocumentTitle(data.page_title);
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Cover content={content} />
          <Intro content={content} />
          <Assets content={content} show={props.popup} />
          <Team data={data} />
        </>
      )}
    </>
  );
};

export default About;
