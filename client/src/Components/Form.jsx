import React, { useState } from "react";

export default function Form() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [checkbox, toggleCheckbox] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message, checkbox });
    setName('');
    setEmail('');
    setMessage('');
    toggleCheckbox(false);
  };

  return (
    <form onSubmit={handleSubmit}>
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
        Sign me up for the newsletter
      </label>
      <br />

      <button type="submit">Send</button>
    </form>
  );
}