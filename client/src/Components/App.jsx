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
      <NavBar />
      {isHome && <div className="hero-image"></div>}
      <LogPageView />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  );
}
