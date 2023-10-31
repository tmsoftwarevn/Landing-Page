import React, { useEffect, useRef, useState } from "react";
import banner from "./image/banner.jpg";
import bg from "./image/3cfa0bc2484c9f12c65d.jpg";
import Wheel from "./component/lucky wheel/Wheel";
import Result from "./component/result/Result";
import ButtonWheel from "./component/btn/ButtonWheel";

import LandingPage from "./component/route/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPage from "./component/route/Admin";
import LoginPage from "./component/route/Login";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/admin" element={<AdminPage />} />
        <Route exact path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
