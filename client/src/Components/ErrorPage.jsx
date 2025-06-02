import React from "react";
import { Link } from "react-router-dom";
import "../Styles/ErrorPage.scss";

export default function ErrorPage() {
  return (
    <div className="error">
      <h1>404 – Not Found</h1>
      <p>Woah, I am lost...</p>
      <Link to={"/"}>Take Me Home</Link>
    </div>
  );
}

// FUTURE JACK : This styles import is still not working!
