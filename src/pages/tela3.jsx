import TelaPerguntas from "../components/perguntas";
import TelaTimes from "../components/times";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../components/alert";

function Tela3() {
  const perguntas = [
    { title: "É Paulista?", sim: "Sim", nao: "Não" },
    { title: "Tem mais de +20 anos?", sim: "Sim", nao: "Não" },
    { title: "Ja namorou?", sim: "Sim", nao: "Não" },
    { title: "Olhos claros?", sim: "Sim", nao: "Não" },
    { title: "Musculoso?", sim: "Sim", nao: "Não" },
    { title: "É enzo? (playboy)", sim: "Sim", nao: "Não" },
    { title: "É da roça?", sim: "Sim", nao: "Não" },
    { title: "Faz algum esporte?", sim: "Sim", nao: "Não" },
    { title: "É loiro?", sim: "Sim", nao: "Não" },
    { title: "Preto?", sim: "Sim", nao: "Não" },
  ];

  const times = [
    { nomeTime: "Santos" },
    { nomeTime: "São Paulo" },
    { nomeTime: "Corinthians" },
    { nomeTime: "Flamengo" },
    { nomeTime: "Palmeiras" },
    { nomeTime: "Grêmio" },
    { nomeTime: "Botafogo" },
  ];

  // ALERTA
  const [showAlert, setShowAlert] = useState(false);
  const [alertTitle, setAlertTitle] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const closeAlert = () => {
    setShowAlert(false);
  };

  // SELECIONAR AS RESPOSTAS CERTAS
  const respostasCorretas = [
    "Não",
    "Não",
    "Não",
    "Sim",
    "Sim",
    "Sim",
    "Não",
    "Sim",
    "Não",
    "Sim",
    "Grêmio",
  ];

  const [respostas, setRespostas] = useState(
    Array(perguntas.length).fill(null)
  );
  const navigate = useNavigate();

  const handleRespostaChange = (index, resposta) => {
    const newRespostas = [...respostas];
    newRespostas[index] = resposta;
    setRespostas(newRespostas);
  };

  const validarRespostas = () => {
    const todasRespondidas = respostas.every((resposta) => resposta !== null);

    if (!todasRespondidas) {
      setAlertTitle("Erro");
      setAlertMessage("Por favor, responda todas as perguntas.");
      setShowAlert(true);
      return; // Não prossegue se não todas as perguntas foram respondidas
    }

    // Verifica se as respostas do usuário correspondem às respostas corretas
    const todasValidas = respostas.every(
      (resposta, index) => resposta === respostasCorretas[index]
    );

    if (todasValidas) {
      // Redireciona para a próxima página
      navigate("/tela4"); // Substitua por sua rota correta
    } else {
      // Redireciona para uma página de erro
      navigate("/telaError"); // Substitua por sua rota de erro
    }
  };

  // SELECIONAR APENAS UMA OPÇÃO
  const [selectedTime, setSelectedTime] = useState(null);

  const handleTimeSelect = (index) => {
    setSelectedTime(index);
  };

  return (
    <div className="bg-gradient-to-br from-pink-600 via-red-300 to-rose-500 w-full h-auto flex flex-col items-center justify-around gap-5 pb-10">
      {perguntas.map((pergunta, index) => (
        <TelaPerguntas
          key={index}
          pergunta={pergunta}
          index={index}
          onRespostaChange={handleRespostaChange}
        />
      ))}
      <section className="bg-pink-500 p-2 rounded-xl w-4/5 text-center flex flex-col gap-3 text-white mt-14">
        <span className="text-3xl">Qual time você torce?</span>
        <section className="flex flex-col justify-center items-start p-2 text-xl gap-2">
          {times.map((time, index) => (
            <TelaTimes
              key={index}
              time={time}
              index={index}
              selectedTime={selectedTime}
              onTimeSelect={handleTimeSelect}
            />
          ))}
        </section>
      </section>

      <section className="w-full p-2 flex flex-row items-center justify-center ">
        <button
          onClick={validarRespostas}
          type="button"
          className="w-3/4 py-3 flex items-center justify-center rounded-2xl text-white text-lg title bg-pink-600"
        >
          Continuar
        </button>
        {/* Renderiza o alerta se showAlert para true */}
        {showAlert && (
          <Alert
            title={alertTitle}
            message={alertMessage}
            onClose={closeAlert}
          />
        )}
      </section>
    </div>
  );
}
export default Tela3;
