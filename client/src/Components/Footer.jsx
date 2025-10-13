import React, { useState } from "react";
import { HashLink } from 'react-router-hash-link';

import Form from "./Form";
import SocialIcons from "./SocialIcons";
import Modal from "./Modal";

import "../Styles/Footer.scss";

export default function Footer() {
  const [isOpenContact, setIsOpenContact] = useState(false);
  const [isOpenVisit, setIsOpenVisit] = useState(false);
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
              <div>CARROLLTON, TX</div>
            </div>
            <SocialIcons />
          </div>
        </div>
        <div className="box">
          <div className="outer-container links">
            <div className="large">Helpful Links</div>
            <hr className="divider" />
            <ul>
              <li onClick={() => { setIsOpenVisit(true) }}>Schedule a Shop Visit!</li>
              <Modal isOpen={isOpenVisit} onClose={() => setIsOpenVisit(false)}>
                <h2>Check out the Shop!</h2>
                <div className="modal-text-container">
                  <div>Please send an email to</div>
                  <div><em>visit@pronskeguitars.com</em></div>
                  <div>for tour scheduling!</div>
                </div>
                <button onClick={() => setIsOpenVisit(false)}>Close</button>
              </Modal>
              <li onClick={() => { setIsOpenContact(true) }}>Contact Us</li>
              <Modal isOpen={isOpenContact} onClose={() => setIsOpenContact(false)}>
                <h2>Let's get in touch!</h2>
                <div className="modal-text-container">
                  <div>CARROLLTON, TX</div>
                  <div>info@pronskeguitars.com</div>
                </div>
                <button onClick={() => setIsOpenContact(false)}>Close</button>
              </Modal>
              <li>
                <a href="https://creative.bigtex.com/sft-results/?gr=Designer+Craftsman&div=Designer+Craftsman%2C+Teachers+and+Professionals">State Fair 2025 Mention</a>
              </li>
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