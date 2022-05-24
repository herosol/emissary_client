import React from "react";
import { Link } from "react-router-dom";
import Heading from "../../common/Heading";

function Banner({ data }) {
  return (
    <>
      <section id="banner">
        <div className="contain">
          <div className="flex_blk">
            <div className="content text-center">
              <Heading className="fancy" size={1} text={data.heading} />
              <p>{data.para}</p>
              <div className="btn_blk">
                <Link
                  to={data.btn_link_01}
                  className="site_btn lg simple round block_sm"
                >
                  {data.btn_01}
                </Link>
                <Link
                  to={data.btn_link_02}
                  className="site_btn lg round block_sm"
                >
                  {data.btn_02}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <video autoPlay loop muted playsInline>
          <source src={data.video} type="video/mp4" />
        </video>
      </section>
    </>
  );
}

export default Banner;
