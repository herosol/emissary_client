import React from "react";
import { getBackgroundImageUrlThumb } from "../../../helpers/helpers";
import Text from "../../common/Text";

function Assets(props) {
  const { content } = props;
  return (
    <>
      <section
        id="assets"
        style={{
          backgroundImage:
            "url(" + getBackgroundImageUrlThumb(content.image3, 1) + ")"
        }}
      >
        <div className="contain">
          <div className="flex_blk">
            <div className="content text-center">
              <p className="size_4">
                <Text string={content.om_colored_heading} />
              </p>
              <h1 className="heading fancy">
                <Text string={content.om_heading} />
              </h1>
              <button type="button" className="play_btn" onClick={props.show}>
                <img src="/images/play_icon.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Assets;
