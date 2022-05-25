import React from "react";
import { getBackgroundImageUrl } from "../../helpers/helpers";
import Text from "../common/Text";
import ImageControl from "../common/ImageControl";

function Agency({ content }) {
  return (
    <>
      <section
        id="agency"
        // style={{ backgroundImage: "url(" + data.sec_bg + ")" }}
      >
        <div className="contain text-center">
          <div className="fig">
            <ImageControl
              folder="images"
              src={content.image6}
              specificWidth="800p_"
            />
          </div>
          <div className="content">
            <h4 className="color">
              <Text string={content.ic_colored_heading1} />
            </h4>
            <h1 className="heading">
              <Text string={content.ic_heading1} />
            </h1>
            <Text string={content.ic_detail1} parse={true} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Agency;
