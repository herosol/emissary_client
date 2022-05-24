import React from "react";
import Data from "../../dummy";
import Banner from "./Banner";
import Brands from "./Brands";
import Blocks from "./Blocks";
import Serve from "../../common/Serve";
import PricingPlan from "../../common/PricingPlan";
import Choose from "../../common/Choose";
import Agency from "../../common/Agency";
import Posts from "./Posts";

const Home = () => {
  const { banner, brands, blocks, serve, choose, pricing, agency, posts } =
    Data.home;
  return (
    <>
      <Banner data={banner} />
      <Brands data={brands} />
      <Blocks data={blocks} />
      <Serve data={serve} />
      <Choose data={choose} />
      <Agency data={agency} />
      <Posts data={posts} />
    </>
  );
};

export default Home;
