import React from "react";
import { Link } from "react-router-dom";

import Form from "./Form";
import SocialIcons from "./SocialIcons";
import "../Styles/Footer.scss";

export default function Footer() {
  const multipleSpaces = (repeat) => {
    return '\u00A0'.repeat(repeat);
  }
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="box">
          <div className="outer-container info">
            <div className="large"><em>PRONSKE GUITARS</em></div>
            <div className="texas-logo-container">
              <div className="texas-logo"></div>
              <div>PLANO, TX</div>
            </div>
            <SocialIcons />
          </div>
        </div>
        <div className="box">
          <div className="outer-container links">
            <div className="large">Helpful Links</div>
            <ul>
              <li>
                <Link to="/media">Listen/Watch</Link>
              </li>
              <li>Schedule a Shop Visit!</li>
              <li>Charity Work</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="box">
          <div className="outer-container form-outer">
            <div className="form-cta-title-container">
              <div className="form-cta-title-top">Connect with us --{multipleSpaces(10)}</div>
              <div className="form-cta-title-bottom" ><em>and stay in tune!</em></div>
            </div>
            <hr className="divider" />
            <Form />
          </div>
        </div>
      </div>
    </div>
  )
}