import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Splash from "./pages/Splash";
import Main from "./pages/Main";
import Join from "./pages/Join";
import SignUp from "./pages/SignUp";
import MyPage from "./pages/MyPage";
import Test from "./pages/Test";
import Acupressure from "./pages/Acupressure";
import AI from "./pages/AI";
import Mission from "./pages/Mission";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Splash />} />
        <Route exact path="/main" element={<Main />} />
        <Route exact path="/join" element={<Join />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/mypage" element={<MyPage />} />
        <Route exact path="/test" element={<Test />} />
        <Route exact path="/acupressure" element={<Acupressure />} />
        <Route exact path="/ai" element={<AI />} />
        <Route exact path="/mission" element={<Mission />} />
      </Routes>
    </div>
  );
}

export default App;
