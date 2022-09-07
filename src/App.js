import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home.js";
import Result from "./pages/result.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
