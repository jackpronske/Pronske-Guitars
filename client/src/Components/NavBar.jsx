import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink> |{" "}
      <NavLink to="/instruments">INSTRUMENTS</NavLink> |{" "}
      <NavLink to="/media">MEDIA</NavLink> |{" "}
      <NavLink to="/order">ORDER</NavLink> |{" "}
      <NavLink to="/about">ABOUT US</NavLink>
    </nav>
  );
}
