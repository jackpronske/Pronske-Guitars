import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import NavBar from "./NavBar";
import LogPageView from "./LogPageView";
import ScrollToTop from "./ScrollToTop";
import Footer from "./Footer";

export default function App() {

  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div>
      {!isHome && <div style={{ height: "60px" }} />}
      {/* {isHome && <img className="guitar" src="/images/guitar_hero_example.jpg" alt="Pronske Guitars. Hero Image" />} */}
      {isHome && <div className="hero-image"></div>}
      <NavBar />
      <LogPageView />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  );
}
