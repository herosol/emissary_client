import React from "react";
import { Link } from "react-router-dom";
import { getBackgroundImageUrl } from "../../../helpers/helpers";
import Text from "../../common/Text";

function Blocks({ content }) {
  return (
    <>
      <section
        id="blocks"
        style={{
          backgroundImage: `url(${getBackgroundImageUrl(content.image1)})`
        }}
      >
        <div className="contain">
          <div className="flex_row main_row">
            <div className="col col1">
              <div className="title">
                <h1 className="heading">
                  <Text string={content.erc_left_heading} />
                </h1>
                <div className="btn_blk">
                  <Link
                    to={content.erc_left_button_link}
                    className="site_btn simple lg round"
                  >
                    {content.erc_left_button_heading}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col col2">
              <div className="in_col">
                <div className="txt size_5">
                  <Text string={content.erc_right_heading} />
                </div>
                <div className="br"></div>
                <div className="flex_row sub_row">
                  <div className="col">
                    <div className="inner">
                      <h3>
                        <Text string={content.erc_card_heading1} />
                      </h3>
                      <p>
                        <Text string={content.erc_card_detail1} />
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="inner">
                      <h3>
                        <Text string={content.erc_card_heading2} />
                      </h3>
                      <p>
                        <Text string={content.erc_card_detail2} />
                      </p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="inner">
                      <h3>
                        <Text string={content.erc_card_heading3} />
                      </h3>
                      <p>
                        <Text string={content.erc_card_detail3} />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blocks;
