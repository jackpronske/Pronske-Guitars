import React from "react";
import { NavLink } from "react-router-dom";
import "../Styles/NavBar.scss";

export default function NavBar() {
  return (
    <nav className="nav-container">
      <div className="nav-inner-container">
        <NavLink className="nav-item" to="/">HOME</NavLink>
        {/* <NavLink className="nav-item" to="/instruments">INSTRUMENTS</NavLink> */}
        <NavLink className="nav-item" to="/media">MEDIA</NavLink>
        <NavLink className="nav-item" to="/vault">THE VAULT</NavLink>
        <NavLink className="nav-item" to="/about">ABOUT US</NavLink>
      </div>
    </nav>
  );
}
