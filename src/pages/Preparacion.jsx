import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "../css/Preparacion.css";
import "../css/Efectos.css";

const Preparacion = () => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState("");
  const [pregunta, setPregunta] = useState("");
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let eleccion;
    switch (opcionSeleccionada) {
      case "animales":
        setPregunta("Cual es el animal?");
        eleccion = "animales";
        localStorage.setItem("eleccion", JSON.stringify(eleccion));
        break;
      case "peliculas":
        setPregunta("Cual es la pelicula?");
        eleccion = "peliculas";
        localStorage.setItem("eleccion", JSON.stringify(eleccion));
        break;
      case "paises":
        setPregunta("Cual es el país?");
        eleccion = "paises";
        localStorage.setItem("eleccion", JSON.stringify(eleccion));
        break;
      case "ciudades":
        setPregunta("Cual es la ciudad?");
        eleccion = "ciudades";
        localStorage.setItem("eleccion", JSON.stringify(eleccion));
        break;
      case "frutas":
        setPregunta("Cual es la fruta?");
        eleccion = "frutas";
        localStorage.setItem("eleccion", JSON.stringify(eleccion));
        break;
      default:
        setPregunta("Elija una categoria");
    }
  }, [opcionSeleccionada]);

  const cambioCategoria = (opcion) => {
    setOpcionSeleccionada(opcion);
  };

  const elegirPalabra = (evento) => {
    setInputValue(evento.target.value);
  };

  const enviarPalabra = (event) => {
    event.preventDefault();
    let value = inputValue.toLowerCase();
    if (value === "") {
      alert("Debes ingresar la respuesta para el juego");
    } else {
      setInputValue("");
      localStorage.setItem("juego", JSON.stringify(value));

      navigate("/play");
    }
  };

  const presionarEnter = (event) => {
    if (event.key === "Enter") {
      enviarPalabra(event);
    }
  };

  return (
    <>
      <Header cambioCategoria={cambioCategoria} />
      <div className="container">
        <h1 className="titulo-preparacion">Inicia el juego</h1>
        <label className="pregunta-eleccion">{pregunta}</label>
        <form className="preparacion" onSubmit={enviarPalabra}>
          <input
            type="text"
            className="palabra-secreta"
            placeholder="Ingresa la respuesta"
            value={inputValue}
            onChange={elegirPalabra}
            onKeyPress={presionarEnter}
          />
          <input type="submit" className="boton-inicio" value="Iniciar" />
        </form>
      </div>
      <div className="nubes">
        <div className="nube"></div>
        <div className="nube"></div>
        <div className="nube"></div>
        <div className="nube"></div>
        <div className="nube"></div>
        <div className="nube"></div>
      </div>
    </>
  );
};

export default Preparacion;
