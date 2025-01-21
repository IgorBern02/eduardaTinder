import "../index.css";
import { Link } from "react-router-dom";
import Coracao from "../images/coracao.png";

function tela1() {
  return (
    <div className="bg-gradient-to-br from-pink-600 via-red-300 to-rose-500 bg w-full h-screen flex flex-col items-center justify-around">
      <section className="flex flex-col items-center justify-center">
        <h1 className=" p-2 text-6xl text-white  text-center font-italic">
          Tinder da Dudinha
        </h1>
        <p className="text-2xl font-mono text-white">(vulgo safrah)</p>
        <div className="w-40 h-40 p-2 mt-4 overflow-hidden pulse">
          <img src={Coracao} alt="Coração" />
        </div>
      </section>
      <section className="w-full p-2 flex flex-row items-center justify-center ">
        <Link
          to="/tela2"
          className="w-3/4 py-3 flex items-center justify-center rounded-2xl text-white text-lg  bg-pink-600"
        >
          Começar
        </Link>
      </section>
    </div>
  );
}

export default tela1;
