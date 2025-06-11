import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import LogPageView from "./LogPageView";

export default function App() {
  return (
    <div className="space">
      <div className="space-1"></div>
      <NavBar />
      <LogPageView />
      <Outlet />
    </div>
  );
}
