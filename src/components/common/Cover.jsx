import React from "react";
import Text from "../common/Text";
import { getBackgroundImageUrlThumb } from "../../helpers/helpers";

function Cover({ content }) {
  return (
    <>
      <section
        id="cover"
        // className={data.ex_class}
        className=""
        style={{
          backgroundImage:
            "url(" + getBackgroundImageUrlThumb(content.image1, 1) + ")"
        }}
      >
        <div className="contain">
          <div className="flex_box">
            <div className="content">
              <h1 className="fancy">
                <Text string={content.banner_heading} />
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cover;
