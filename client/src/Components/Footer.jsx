import React from "react";

import Form from "./Form";
import "../Styles/Footer.scss";

export default function Footer() {
  const multipleSpaces = (repeat) => {
    return '\u00A0'.repeat(repeat);
  }
  return (
    <div className="footer">
      <div className="box">content 1</div>
      <div className="box">
        <div className="form-outer-container">
          <div className="form-cta-title-container">
            <div className="form-cta-title-top">Connect with us --{multipleSpaces(10)}</div>
            <div className="form-cta-title-bottom" ><em>and stay in tune!</em></div>
          </div>
          <hr className="divider" />
          <Form />
        </div>
      </div>
      <div className="box">content 3</div>
    </div>
  )
}