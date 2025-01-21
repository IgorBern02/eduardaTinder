import { Link } from "react-router-dom";
import "../App.css";
import Foto1 from "../images/foto1.jpeg";
import Foto2 from "../images/foto2.jpeg";
import Foto3 from "../images/foto3.jpeg";
import Foto4 from "../images/foto4.jpeg";
import Foto5 from "../images/foto5.jpeg";
import Foto6 from "../images/foto6.jpeg";
import Foto7 from "../images/foto7.jpeg";
import React, { useState } from "react";

function Tela2() {
  const images = [
    { src: Foto1, alt: "Descrição da imagem 1" },
    { src: Foto2, alt: "Descrição da imagem 1" },
    { src: Foto7, alt: "Descrição da imagem 2" },
    { src: Foto4, alt: "Descrição da imagem 1" },
    { src: Foto5, alt: "Descrição da imagem 2" },
    { src: Foto6, alt: "Descrição da imagem 3" },
    { src: Foto3, alt: "Descrição da imagem 3" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const changeBackground = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="bg-gradient-to-br from-pink-600 via-red-300 to-rose-500 w-full h-screen flex flex-col items-center justify-around p-3">
      <section
        id="bg-photo"
        className=" bg-pink-300 p-2 w-full h-4/6 rounded-2xl flex flex-col gap-3"
        style={{
          backgroundImage: `url(${images[currentIndex].src})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
        onClick={changeBackground}
      >
        <div className="absolute top-12 left-2 m-2 text-white rounded-sm p-1">
          {currentIndex + 1} / {images.length}
        </div>
      </section>
      <section className="w-full p-2 flex flex-row items-center justify-center ">
        <Link
          to="/tela3"
          className="w-3/4 py-3 flex items-center justify-center rounded-2xl text-white text-lg title bg-pink-600"
        >
          Continuar
        </Link>
      </section>
    </div>
  );
}

export default Tela2;
