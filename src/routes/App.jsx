import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../css/App.css";
import { BrowserRouter } from "react-router-dom";
import Login from "../pages/Juego";
import Preparar from "../pages/Preparacion";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Preparar />} />
        <Route path="/play" exact element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
