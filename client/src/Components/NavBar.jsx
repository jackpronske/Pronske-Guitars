import React from "react";
import { NavLink } from "react-router-dom";
import "../Styles/NavBar.scss";

export default function NavBar() {
  return (
    <nav className="nav-container">
      <NavLink className="nav-item" to="/instruments">INSTRUMENTS</NavLink>
      <NavLink className="nav-item" to="/media">MEDIA</NavLink>
      <NavLink className="nav-item" to="/">HOME</NavLink>
      <NavLink className="nav-item" to="/order">ORDER</NavLink>
      <NavLink className="nav-item" to="/about">ABOUT US</NavLink>
    </nav>
  );
}



//TODO: Make a quick wireframe template of repeated items to show scrolling, make it very simpleeeeee
// attach wireframes to each route
//use js logic to determine which page were on, then handle logic for homepage vs others