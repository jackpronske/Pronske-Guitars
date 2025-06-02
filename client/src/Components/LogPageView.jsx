import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function LogPageView() {
  const location = useLocation();

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      axios.post("/api/log-route", { path: location.pathname });
    }
  }, [location]);

  return null;
}
