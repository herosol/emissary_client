import React from "react";
import { Link } from "react-router-dom";
import Heading from "../../common/Heading";
import Text from "../../common/Text";
import { getUploadsUrl } from "../../../helpers/helpers";

function Banner({ content }) {
  return (
    <>
      <section id="banner">
        <div className="contain">
          <div className="flex_blk">
            <div className="content text-center">
              <Heading
                className="fancy"
                size={1}
                text={<Text string={content.banner_heading} />}
              />
              <p>
                <Text string={content.banner_detail} />
              </p>
              <div className="btn_blk">
                <Link
                  to={content.banner_button_link_left}
                  className="site_btn lg simple round block_sm"
                >
                  {content.banner_button_text_left}
                </Link>
                <Link
                  to={content.banner_button_link_right}
                  className="site_btn lg round block_sm"
                >
                  {content.banner_button_text_right}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <video autoPlay loop muted playsInline>
          <source
            src={getUploadsUrl("images", content.video)}
            type="video/mp4"
          />
        </video>
      </section>
    </>
  );
}

export default Banner;
