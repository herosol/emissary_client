import React, { useState } from "react";
import ContactForm from "../../common/ContactForm";
import Image from "../../common/Image";
import Text from "../../common/Text";
import Button from "../../common/Button";

function ContactUs({ content, saveContactMessage, isFormProcessing }) {
  const [formVal, setFormVal] = useState({
    name: "",
    phone: "",
    subject: "",
    email: "",
    msg: ""
  });
  const inputHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormVal({ ...formVal, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    saveContactMessage(formVal);
  };
  return (
    <>
      <section id="contact">
        <div className="contain">
          <div className="flex_row main_row">
            <div className="col col1">
              <div className="in_col">
                <h3 className="heading color">
                  <Text string={content.heading} />
                </h3>
                <p>
                  <Text string={content.short_detail} />
                </p>
                <div className="br"></div>
                <h6 className="heading">
                  <Text string={content.mid_heading} />
                </h6>
                <ul className="info_lst">
                  <li>
                    <div className="icon">
                      <Image src="/images/icon-map-marker.svg" alt="" />
                    </div>
                    <div className="txt">
                      <strong>
                        <Text string={content.l_heading_1} />
                      </strong>
                      <a>
                        <Text string={content.l_detail_1} />
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <Image src="/images/icon-phone.svg" alt="" />
                    </div>
                    <div className="txt">
                      <strong>
                        <Text string={content.l_heading_2} />
                      </strong>
                      <a href={`tel:${content.l_detail_2}`}>
                        <Text string={content.l_detail_2} />
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <Image src="/images/icon-envelope-fill.svg" alt="" />
                    </div>
                    <div className="txt">
                      <strong>
                        <Text string={content.l_heading_3} />
                      </strong>
                      <a href={`mailto:${content.l_detail_3}`}>
                        <Text string={content.l_detail_3} />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col2">
              <div className="in_col">
                <form method="POST" onSubmit={handleSubmit}>
                  <h5 className="heading color">
                    <Text string={content.form_heading} />
                  </h5>
                  <div className="form_row row">
                    <div className="col-sm-6">
                      <h6 className="require">{content.field_text1}</h6>
                      <div className="form_blk">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={formVal.name}
                          onChange={inputHandle}
                          className="input"
                          placeholder={content.field_placeholder1}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <h6 className="require">{content.field_text2}</h6>
                      <div className="form_blk">
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          value={formVal.phone}
                          onChange={inputHandle}
                          className="input"
                          placeholder={content.field_placeholder2}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <h6 className="require">{content.field_text3}</h6>
                      <div className="form_blk">
                        <input
                          type="text"
                          name="email"
                          id="email"
                          value={formVal.email}
                          onChange={inputHandle}
                          className="input"
                          placeholder={content.field_placeholder3}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <h6 className="require">{content.field_text4}</h6>
                      <div className="form_blk">
                        <input
                          type="text"
                          name="subject"
                          id="subject"
                          value={formVal.subject}
                          onChange={inputHandle}
                          className="input"
                          placeholder={content.field_placeholder4}
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <h6 className="require">{content.field_text5}</h6>
                      <div className="form_blk">
                        <textarea
                          name="msg"
                          id="msg"
                          value={formVal.msg}
                          onChange={inputHandle}
                          className="input"
                          placeholder={content.field_placeholder5}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="btn_blk form_btn">
                    <Button
                      disabled={isFormProcessing}
                      className="long round"
                      text={<Text string={content.button_text} />}
                      size="lg"
                      type="submit"
                    ></Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
