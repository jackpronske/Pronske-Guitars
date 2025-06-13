import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import NavBar from "./NavBar";
import LogPageView from "./LogPageView";
import ScrollToTop from "./ScrollToTop";

export default function App() {

  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div>
      {!isHome && <div style={{ height: "60px" }} />}
      {isHome && <div className="guitar"></div>}
      <NavBar />
      <LogPageView />
      <ScrollToTop />
      <Outlet />
      <div>FOOTER</div>
    </div>
  );
}
