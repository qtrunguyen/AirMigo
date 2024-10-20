import React, { useState } from "react";
import "./App.css";

import Overlay from "./Overlay";
import Nav from "./Nav";
import GMap from "./GMap";

function App() {

  return (
    <>
      <Overlay></Overlay>
      <Nav ></Nav>
      <GMap ></GMap>
    </>
  );
}

export default App;
