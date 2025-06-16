import React from "react";

import Form from "./Form";
import "../Styles/Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="form-outer-container">
        <div>
          <div className="form-cta-title-top">Connect with us --</div>
          <div className="indent" ><em>and stay in tune!</em></div>
        </div>
        <Form />
      </div>
    </div>
  )
}