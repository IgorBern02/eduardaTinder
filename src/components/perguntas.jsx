import React, { useState } from "react";

function Perguntas({ pergunta, index, onRespostaChange }) {
  // NÃO MARCAR SIM E NÃO AO MESMO TEMPO
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (event) => {
    // if (selectedOption !== event.target.id) {
    //   setSelectedOption(event.target.id);
    // }
    const value = event.target.value; // Captura o valor da opção selecionada
    setSelectedOption(event.target.id); // Atualiza o estado do selectedOption
    onRespostaChange(index, value);
  };

  // const handleChangeResposta = (event) => {
  //   onRespostaChange(index, event.target.value);
  // };

  const labelStyles = (isSelected) =>
    isSelected
      ? "w-full flex items-center gap-2 p-2 bg-pink-600 text-white px-5 rounded-xl "
      : "w-full flex items-center gap-2 p-2 bg-pink-400 px-5 rounded-xl ";

  return (
    <section className="bg-pink-500 p-2 rounded-xl w-4/5 text-center flex flex-col gap-3 text-white mt-14">
      <span className="text-3xl">{pergunta.title}</span>
      <div className=" w-full h-auto flex flex-col items-center justify-around p-2 ">
        <div className=" w-full h-auto flex flex-row items-center justify-center p-2 ">
          <label
            htmlFor={`sim${index}`}
            className={labelStyles(selectedOption === `sim${index}`)}
          >
            <input
              type="checkbox"
              name={`pergunta-${index}`}
              id={`sim${index}`}
              value={pergunta.sim}
              onChange={handleChange}
              className="
              
              relative 
              w-5 
              h-5 
              appearance-none 
              border
              focus:outline-none 
              checked:bg-pink-600 
              
              after:content-['']
              after:w-full
              after:h-full
              after:absolute
              after:left-0
              after:top-0
              after:bg-no-repeat
              after:bg-center
             
              after:bg-url('data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'><path d='M5 12l14 14M5 12L14 2' /></svg>')
              "
              checked={selectedOption === `sim${index}`}
            />
            <span className="text-xl font-sans">{pergunta.sim}</span>
          </label>
        </div>

        <div className=" w-full h-auto flex flex-row items-center justify-center  p-2 ">
          <label
            htmlFor={`nao${index}`}
            className={labelStyles(selectedOption === `nao${index}`)}
          >
            <input
              type="checkbox"
              name={`pergunta-${index}`}
              id={`nao${index}`}
              value={pergunta.nao}
              className="
               relative 
              w-5 
              h-5 
              appearance-none 
              border
              focus:outline-none 
              checked:bg-pink-600 
              
              after:content-['']
              after:w-full
              after:h-full
              after:absolute
              after:left-0
              after:top-0
              after:bg-no-repeat
              after:bg-center
             
              after:bg-url('data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'><path d='M5 12l14 14M5 12L14 2' /></svg>')
              "
              onChange={handleChange}
              checked={selectedOption === `nao${index}`}
            />
            <span className="text-xl">{pergunta.nao}</span>
          </label>
        </div>
      </div>
    </section>
  );
}
export default Perguntas;
