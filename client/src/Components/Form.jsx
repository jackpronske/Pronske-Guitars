import React, { useState, useEffect } from "react";
import axios from "axios";

import Modal from "./Modal";

import "../Styles/Footer.scss";

export default function Form({ autoFill }) {

  const [captchaSvg, setCaptchaSvg] = useState("");
  const [captcha, setCaptcha] = useState("");

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(autoFill ?? '');
  const [checkbox, toggleCheckbox] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenError, setIsOpenError] = useState(false);
  const [isOpenCAPTCHAError, setIsOpenCAPTCHAError] = useState(false);

  const fetchCaptcha = async () => {
    const res = await axios.get("/form/captcha");
    const data = res.data;
    setCaptchaSvg(data);
  };

  useEffect(() => { fetchCaptcha(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      await axios.post('/form/submit', { name, email, message, captcha, checkbox })
        .then((response) => {
          if (response.status < 300) {
            setIsOpen(true);
            setName('');
            setEmail('');
            setMessage('');
            toggleCheckbox(false);
          }
        })
        .catch((err) => {
          throw err;
        })
    }
    catch (err) {
      if (err.response.data.error === "invalid captcha") {
        setIsOpenCAPTCHAError(true);
      } else {
        setIsOpenError(true);
        setName('');
        setEmail('');
        setMessage('');
        toggleCheckbox(false);
      }
    }
    finally {
      fetchCaptcha();
      setCaptcha("");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="form"
      >
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <br />

        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />

        <label>
          Message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </label>
        <br />

        <label>
          <input
            type="checkbox"
            checked={checkbox}
            onChange={() => toggleCheckbox(!checkbox)}
          />
          Sign up for our newsletter!
        </label>
        <br />

        <label>
          <div dangerouslySetInnerHTML={{ __html: captchaSvg }} />
          <input value={captcha} onChange={e => setCaptcha(e.target.value)} placeholder="Enter captcha" required />
        </label>
        <br />

        <button className="form-button" type="submit">Send</button>
      </form>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Thanks for Reaching Out!</h2>
        <div className="modal-text-container">
          <div>We'll get back to you</div>
          <div>as soon as we can!</div>
        </div>
        <button onClick={() => setIsOpen(false)}>Close</button>
      </Modal>

      <Modal isOpen={isOpenError} onClose={() => setIsOpenError(false)}>
        <h2>Uh Oh!</h2>
        <div className="modal-text-container">
          <div>It looks like there was</div>
          <div>a problem with your request.</div>
          <div>Please try again in a moment!</div>
        </div>
        <button onClick={() => setIsOpenError(false)}>Close</button>
      </Modal>

      <Modal isOpen={isOpenCAPTCHAError} onClose={() => setIsOpenCAPTCHAError(false)}>
        <h2>Uh Oh!</h2>
        <div className="modal-text-container">
          <div>Are you sure you're not a robot?</div>
          <div>Try that CAPTCHA again...</div>
        </div>
        <button onClick={() => setIsOpenCAPTCHAError(false)}>Close</button>
      </Modal>
    </>
  );
}