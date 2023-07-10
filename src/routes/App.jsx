import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../css/App.css";
import Juego from "../pages/Juego";
import Preparar from "../pages/Preparacion";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Preparar />} />
        <Route path="/play" exact element={<Juego />} />

        <Route path="*" exact element={<Preparar />} />
      </Routes>
    </Router>
  );
}

export default App;
