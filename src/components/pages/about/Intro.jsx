import React from "react";
import { Link } from "react-router-dom";
import { getBackgroundImageUrlThumb } from "../../../helpers/helpers";
import Text from "../../common/Text";
import ImageControl from "../../common/ImageControl";

function Intro({ content }) {
  return (
    <>
      <section
        id="intro"
        style={{
          backgroundImage:
            "url(" + getBackgroundImageUrlThumb(content.image1, 1) + ")"
        }}
      >
        <div className="contain">
          <div className="flex_row">
            <div className="col col1">
              <div className="content">
                <h1 className="heading">
                  <Text string={content.wwd_colored_heading} />
                </h1>
                <h6>
                  <Text string={content.wwd_heading} />
                </h6>
                <Text string={content.wwd_detail} parse={true} />
                <div className="btn_blk">
                  <Link
                    to={content.wwd_button_link}
                    className="site_btn lg round"
                  >
                    {content.wwd_button_title}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col col2">
              <div className="in_col">
                <div className="img">
                  <ImageControl
                    folder="images"
                    src={content.image2}
                    specificWidth="800p_"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Intro;
