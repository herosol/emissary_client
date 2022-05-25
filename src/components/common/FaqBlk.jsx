import React, { useState } from "react";

function FaqBlk(faq) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className={show ? "faq_blk active" : "faq_blk"}>
        <h5 className="fancy" onClick={() => setShow(!show)}>
          {faq.question}
        </h5>
        {show && (
          <div className="txt">
            <p>{faq.answer}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default FaqBlk;
