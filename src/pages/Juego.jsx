import React, { useEffect, useState, useRef } from "react";
import Header from "../components/Header";
import Ahorcado from "../components/Ahorcado";
import "../css/Juego.css";
import "../css/Ahorcado.css";

const Juego = () => {
  const palabraString = localStorage.getItem("juego");
  const palabra = JSON.parse(palabraString);
  console.log(palabra);
  let unaPalabra = [];
  let palabraAgregar = "";
  for (let i = 0; i < palabra.length; i++) {
    let agregar = true;

    if (palabra[i] != " ") {
      palabraAgregar += palabra[i];
    } else {
      agregar = false;
    }

    if (!agregar || i == palabra.length - 1) {
      unaPalabra.push(palabraAgregar);
      palabraAgregar = "";
    }
  }

  console.log(unaPalabra);

  const eleccionString = localStorage.getItem("eleccion");
  const eleccion = JSON.parse(eleccionString);
  console.log(eleccion);
  const [turnos, setTurnos] = useState(5);
  const [acertado, setAcertado] = useState(false);
  const contenedorNavbarRef = useRef(null);
  const letraPorLetraRef = useRef(null);
  const [total, setTotal] = useState(palabra.length);
  const [ganador, setGanador] = useState(false);
  const [perdedor, setPerdedor] = useState(false);
  const [mostrarBoton, setMostrarBoton] = useState(true);
  const [palabraLarga, setPalabraLarga] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    contenedorNavbarRef.current = document.getElementById(eleccion);
    if (contenedorNavbarRef.current) {
      contenedorNavbarRef.current.classList.add("item-selected");
    }
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (acertado) {
      if (turnos === 1) {
        console.log(`La encontraste, te queda ${turnos} turno`);
      } else {
        console.log(`La encontraste, te quedan ${turnos} turnos`);
      }
    } else {
      if (turnos === 1) {
        console.log(`Fallaste, te queda ${turnos} turno`);
      } else {
        console.log(`Fallaste, te quedan ${turnos} turnos`);
      }
    }

    if (acertado && total === 0) {
      setGanador(true);
      setMostrarBoton(false);
    }

    if (!acertado && turnos === 0) {
      setPerdedor(true);
      setMostrarBoton(false);
    }
  }, [acertado, total, turnos]);

  useEffect(() => {
    const btn = document.querySelector(".btn-eleccion__input");
    const input = document.querySelector(".letra");

    const buscarLetra = () => {
      let value = input.value.toLowerCase();
      console.log(value);

      let encontrada = false;

      for (let i = 0; i < palabra.length; i++) {
        if (value === palabra[i]) {
          encontrada = true;
          break;
        }
      }

      if (encontrada) {
        setAcertado(true);
        setTotal((prevTotal) => prevTotal - 1);
      } else {
        setAcertado(false);
        setTurnos((prevTurnos) => prevTurnos - 1);
      }

      input.value = "";
      inputRef.current.value = "";
      inputRef.current.focus();
    };

    if (btn) {
      btn.addEventListener("click", buscarLetra);
    }

    return () => {
      if (btn) {
        btn.removeEventListener("click", buscarLetra);
      }
    };
  }, [palabra]);

  useEffect(() => {
    letraPorLetraRef.current = document.querySelector(".letra-por-letra");

    if (letraPorLetraRef.current) {
      letraPorLetraRef.current.innerHTML = "";
      let div = document.createElement("div");
      for (let i = 0; i < palabra.length; i++) {
        const li = document.createElement("li");

        if (palabra[i] == " ") {
          div = document.createElement("div");
          li.classList.add("espacio-palabra");
          div.appendChild(li);
          letraPorLetraRef.current.appendChild(div);
          div = document.createElement("div");
        } else {
          letraPorLetraRef.current.appendChild(div);
          li.textContent = "_";
          li.classList.add("letra-palabra");
          div.appendChild(li);
        }
      }
    }
  }, [palabra]);

  useEffect(() => {
    if (palabra.length > 25) {
      setPalabraLarga(true);
    }
  });

  return (
    <>
      <Header />
      <div
        className={
          ganador
            ? "container container-juego juego-terminado"
            : perdedor
            ? "container container-juego juego-terminado"
            : "container container-juego"
        }
      >
        <div>
          <h1 className="title">AHORCADO</h1>
        </div>
        <div>
          <ul className="palabra-oculta"></ul>
          <li className="lista-juego__item">
            <Ahorcado
              turnos={turnos}
              total={total}
              className={
                ganador ? "canvas-ganador" : perdedor ? "canvas-perdedor" : ""
              }
            />
          </li>
          <li
            className={
              !palabraLarga
                ? "lista-juego__item palabra-secreta-oculta"
                : "lista-juego__item palabra-secreta-oculta palabra-larga"
            }
          >
            <ul className="letra-por-letra"></ul>
          </li>
          <li className="lista-juego__item letra-eleccion">
            {mostrarBoton && (
              <input type="text" className="letra" ref={inputRef} data-letra />
            )}
          </li>
          <li className="lista-juego__item btn-eleccion">
            {mostrarBoton && (
              <input
                type="button"
                className="btn-eleccion__input"
                value="Buscar"
                data-eleccion
              />
            )}
          </li>
        </div>
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

export default Juego;
