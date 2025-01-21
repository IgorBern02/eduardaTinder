import React, { useState } from "react";

function Times({ time, index, onTimeSelect, selectedTime }) {
  const handleSelect = (event) => {
    onTimeSelect(index);
    onRespostaChange(index, event.target.value);
  };

  // const handleChangeResposta = (event) => {
  //   onRespostaChange(index, event.target.value);
  // };

  const labelStyles = (isSelected) =>
    isSelected
      ? "w-full flex items-center gap-2 p-2 bg-pink-600 text-white px-5 rounded-xl "
      : "w-full flex items-center gap-2 p-2 bg-pink-400 px-5 rounded-xl ";

  return (
    <div className="flex items-center justify-normal gap-2 w-full  p-2 px-5 rounded-xl">
      <label
        htmlFor={`time-${index}`}
        // className="w-full flex items-center gap-2 p-2 bg-pink-400 px-5 rounded-xl"
        className={labelStyles(selectedTime === index)}
      >
        <input
          id={`time-${index}`}
          type="checkbox"
          checked={selectedTime === index}
          onChange={handleSelect}
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
        />
        <span className="text-xl font-sans ">{time.nomeTime}</span>
      </label>
    </div>
  );
}

export default Times;
