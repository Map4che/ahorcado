import React, { useEffect, useRef } from "react";
import "../css/Ahorcado.css";

const Ahorcado = ({ turnos, total }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const pintar = canvas.getContext("2d");

    const escenario = () => {
      pintar.clearRect(0, 0, canvas.width, canvas.height);
      pintar.fillStyle = "#44241D";
      // Piso
      pintar.fillRect(0, 180, 300, 20);

      // Personaje
      pintar.fillStyle = "black";
      pintar.arc(150, 80, 14, 0, 2 * Math.PI);
      pintar.fill();

      pintar.fillRect(148, 80, 6, 50);
      pintar.fillRect(146, 130, 4, 4);
      pintar.fillRect(144, 134, 4, 4);
      pintar.fillRect(142, 138, 4, 4);
      pintar.fillRect(140, 142, 4, 4);
      pintar.fillRect(138, 146, 4, 4);

      pintar.fillRect(154, 80, 6, 50);
      pintar.fillRect(156, 130, 4, 4);
      pintar.fillRect(158, 134, 4, 4);
      pintar.fillRect(160, 138, 4, 4);
      pintar.fillRect(162, 142, 4, 4);
      pintar.fillRect(164, 146, 4, 4);

      pintar.fillRect(158, 90, 4, 4);
      pintar.fillRect(162, 96, 4, 4);
      pintar.fillRect(166, 102, 4, 4);
      pintar.fillRect(170, 108, 4, 4);
    };

    const mesa = () => {
      // Mesa
      pintar.fillRect(100, 150, 100, 10);
    };

    const pataIzquierda = () => {
      // Pata izquierda de la mesa
      pintar.fillRect(140, 150, 10, 30);
    };

    const pataDerecha = () => {
      // Pata derecha de la mesa
      pintar.fillRect(160, 150, 10, 30);
    };

    const posteVertical = () => {
      // Estructura poste vertical
      pintar.fillRect(260, 10, 20, 190);
    };

    const posteHorizontal = () => {
      // Estructura poste horizontal
      pintar.fillRect(260, 10, -120, 10);
    };

    const cuerda = () => {
      // Cuerda
      pintar.fillStyle = "red";
      pintar.fillRect(150, 10, 2, 58);
    };

    escenario();
    if (turnos === 5) {
      mesa();
      pataDerecha();
      pataIzquierda();
    } else if (turnos === 4) {
      mesa();
      pataDerecha();
      pataIzquierda();
      posteVertical();
    } else if (turnos === 3) {
      mesa();
      pataDerecha();
      pataIzquierda();
      posteVertical();
      posteHorizontal();
    } else if (turnos === 2) {
      mesa();
      pataDerecha();
      pataIzquierda();
      posteVertical();
      posteHorizontal();
      cuerda();
    } else if (turnos === 1) {
      mesa();
      pataDerecha();
      posteVertical();
      posteHorizontal();
      cuerda();
    } else if (turnos === 0) {
      posteVertical();
      posteHorizontal();
      cuerda();
    }
  }, [turnos]);

  const getCanvasClassName = () => {
    if (turnos === 0) {
      return "canvas-perdedor";
    } else if (total === 0) {
      return "canvas-ganador";
    } else {
      return "";
    }
  };

  return (
    <canvas
      ref={canvasRef}
      id="canvas"
      width="300"
      height="200"
      className={getCanvasClassName()}
    ></canvas>
  );
};

export default Ahorcado;
