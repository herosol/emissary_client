import React from "react";
import FaqBlk from "../../common/FaqBlk";

function Accordion({ faqs }) {
  return (
    <>
      <section id="faq">
        <div className="contain">
          <div className="faq_lst">
            {faqs.map((faq) => {
              return <FaqBlk key={faq.id} {...faq} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Accordion;
