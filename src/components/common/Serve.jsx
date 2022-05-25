import React from "react";
import { Link } from "react-router-dom";
import Text from "../../components/common/Text";
import ImageControl from "../../components/common/ImageControl";

function Serve({ content }) {
  return (
    <>
      <section id="serve">
        <div className="contain">
          <div className="flex_row main_row">
            <div className="col">
              <div className="inner">
                <div className="fig">
                  <Link to={content.two_card_button_link1}>
                    <ImageControl
                      folder="images"
                      src={content.image1}
                      specificWidth="500p_"
                    />
                  </Link>
                </div>
                <div className="txt">
                  <h2>
                    <Text string={content.two_card_heading1} />
                  </h2>
                  <p>
                    <Text string={content.two_card_detail1} />
                  </p>
                  <div className="btn_blk">
                    <Link
                      to={content.two_card_button_link1}
                      className="site_btn lg round"
                    >
                      {content.two_card_button_text1}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="inner">
                <div className="fig">
                  <Link to={content.two_card_button_link2}>
                    <ImageControl
                      folder="images"
                      src={content.image2}
                      specificWidth="500p_"
                    />
                  </Link>
                </div>
                <div className="txt">
                  <h2>
                    <Text string={content.two_card_heading2} />
                  </h2>
                  <p>
                    <Text string={content.two_card_detail2} />
                  </p>
                  <div className="btn_blk">
                    <Link
                      to={content.two_card_button_link2}
                      className="site_btn lg round"
                    >
                      {content.two_card_button_text2}
                    </Link>
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

export default Serve;
