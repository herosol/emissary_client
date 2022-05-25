import React from "react";
import Text from "../../common/Text";

function Disclaimer({ content }) {
  return (
    <>
      <section id="terms">
        <div className="contain sm">
          <div className="blk ck_editor">
            <Text string={content.page_detail} parse={true} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Disclaimer;
