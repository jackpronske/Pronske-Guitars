import React, { useState } from "react";
import axios from "axios";

import Modal from "./Modal";

import "../Styles/Footer.scss";

export default function Form() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [checkbox, toggleCheckbox] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenError, setIsOpenError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/form/', { name, email, message })
        .then((response) => {
          if (response.status < 300) {
            setIsOpen(true);
          }
        })
    }
    catch {
      setIsOpenError(true);
    }
    finally {
      setName('');
      setEmail('');
      setMessage('');
      toggleCheckbox(false);
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
    </>
  );
}