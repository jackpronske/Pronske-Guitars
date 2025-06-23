import React, { useState } from "react";
import axios from "axios";

import "../Styles/Footer.scss";

export default function Form() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [checkbox, toggleCheckbox] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.get('/form/')
        .then((response) => {
          console.log(response.data);
          // need proper modal verification that message was sent
        })
    }
    catch {
      console.log("error with call");
      // need proper modal error handling that message was not sent
    }
    finally {
      setName('');
      setEmail('');
      setMessage('');
      toggleCheckbox(false);
    }
  };

  return (
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

      <button type="submit">Send</button>
    </form>
  );
}