import React from "react";
import { NavLink } from "react-router-dom";
import "../Styles/NavBar.scss";

export default function NavBar() {
  return (
    <nav className="nav-container">
      <NavLink to="/instruments">INSTRUMENTS</NavLink>
      <NavLink to="/media">MEDIA</NavLink>
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/order">ORDER</NavLink>
      <NavLink to="/about">ABOUT US</NavLink>
    </nav>
  );
}
