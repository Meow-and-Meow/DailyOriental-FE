import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Splash from "./pages/Splash";
import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Splash />} />
        <Route exact path="/main" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
