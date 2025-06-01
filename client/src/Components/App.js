import React, { useState, useEffect } from "react";
import axios from "axios";

import NavBar from "./NavBar";

const App = () => {
  const [name, setName] = useState("there");

  useEffect(() => {
    axios
      .get("/name")
      .then((result) => {
        setName(result.data.name);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <div>hello, {name}!</div>
      <NavBar />
    </>
  );
};

export default App;
