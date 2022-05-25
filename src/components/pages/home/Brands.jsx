import React from "react";
import ImageControl from "../../common/ImageControl";
import Text from "../../common/Text";

function Brands({ partners }) {
  return (
    <>
      <section id="brands">
        <div className="contain text-center">
          <ul className="lst flex">
            {partners.map((p) => {
              return (
                <li key={p.id}>
                  <div className="ico">
                    <ImageControl
                      folder="partners"
                      src={p.image}
                      specificWidth="200p_"
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Brands;
