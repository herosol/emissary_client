import React from "react";
import ChooseBlk from "./ChooseBlk";
import Text from "../common/Text";
import { getBackgroundImageUrl } from "../../helpers/helpers";
import ImageControl from "../common/ImageControl";

function Choose({ content }) {
  return (
    <>
      <section
        id="choose"
        // style={{
        //   backgroundImage: `url(${getBackgroundImageUrl(content.image1)})`
        // }}
      >
        <div className="contain text-center">
          <div className="content">
            <h1>
              <Text string={content.fsdm_heading} />
            </h1>
            <p className="size_5">
              <Text string={content.fsdm_detail} />
            </p>
          </div>
          <div className="flex_row main_row">
            <div className="col" key={1}>
              <div className="choose_blk">
                <div className="ico">
                  <ImageControl folder="images" src={`${content.image3}`} />
                </div>
                <div className="txt">
                  <h4>
                    <Text string={content.fsdm_card_heading1} />
                  </h4>
                  <p>
                    <Text string={content.fsdm_card_detail1} />
                  </p>
                </div>
              </div>
            </div>
            <div className="col" key={2}>
              <div className="choose_blk">
                <div className="ico">
                  <ImageControl folder="images" src={`${content.image4}`} />
                </div>
                <div className="txt">
                  <h4>
                    <Text string={content.fsdm_card_heading2} />
                  </h4>
                  <p>
                    <Text string={content.fsdm_card_detail2} />
                  </p>
                </div>
              </div>
            </div>
            <div className="col" key={3}>
              <div className="choose_blk">
                <div className="ico">
                  <ImageControl folder="images" src={`${content.image5}`} />
                </div>
                <div className="txt">
                  <h4>
                    <Text string={content.fsdm_card_heading3} />
                  </h4>
                  <p>
                    <Text string={content.fsdm_card_detail3} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Choose;
