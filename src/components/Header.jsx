import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";

const Header = ({ cambioCategoria }) => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState("");

  const handleClick = (opcion) => {
    cambioCategoria(opcion);
    setOpcionSeleccionada(opcion);
  };

  return (
    <div className="container-header">
      <img
        src="https://res.cloudinary.com/dmiocpap8/image/upload/v1674272975/Map4che_dcyhvg.jpg"
        alt="logo"
        className="logo"
      />
      <nav className="encabezado">
        <ul className="lista">
          <li className="lista-item">
            <Link to="/">Inicio</Link>
          </li>
          <li
            className={`lista-item ${
              opcionSeleccionada === "animales" ? "item-selected" : ""
            }`}
            id="animales"
            onClick={() => handleClick("animales")}
          >
            Animales
          </li>
          <li
            className={`lista-item ${
              opcionSeleccionada === "peliculas" ? "item-selected" : ""
            }`}
            id="peliculas"
            onClick={() => handleClick("peliculas")}
          >
            Peliculas
          </li>
          <li
            className={`lista-item ${
              opcionSeleccionada === "paises" ? "item-selected" : ""
            }`}
            id="paises"
            onClick={() => handleClick("paises")}
          >
            Paises
          </li>
          <li
            className={`lista-item ${
              opcionSeleccionada === "ciudades" ? "item-selected" : ""
            }`}
            id="ciudades"
            onClick={() => handleClick("ciudades")}
          >
            Ciudades
          </li>
          <li
            className={`lista-item ${
              opcionSeleccionada === "frutas" ? "item-selected" : ""
            }`}
            id="frutas"
            onClick={() => handleClick("frutas")}
          >
            Frutas
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
