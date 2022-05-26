import React, { useState } from "react";
import FormProcessingSpinner from "../common/FormProcessingSpinner";

function Newsletter({ subsNewsletterForm, isFormProcessing }) {
  const [formVal, setFormVal] = useState({
    email: ""
  });
  const inputHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormVal({ ...formVal, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    subsNewsletterForm(formVal);
  };
  return (
    <>
      <div className="subscribe">
        <span>Subscribe to keep update on new products, offers and more.</span>
        <form action="" method="POST" onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            id="email"
            value={formVal.email}
            onChange={inputHandle}
            className="input"
            placeholder="Enter Email Address"
          />
          <button
            className="submitBtn"
            type="submit"
            disabled={isFormProcessing}
          >
            <img src="/images/icon-send.svg" alt="" />
          </button>
        </form>
      </div>
    </>
  );
}

export default Newsletter;
