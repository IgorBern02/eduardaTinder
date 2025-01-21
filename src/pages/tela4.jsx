function Tela4() {
  const whatsappNumber = "554891101579";

  return (
    <div className="bg-gradient-to-br from-pink-600 via-red-300 to-rose-500 w-full h-screen flex flex-col items-center justify-around ">
      <section className="text-2xl bg-pink-600 w-3/4 h-3/6 p-2 text-center flex items-center rounded-xl">
        <p className="text-white">
          Você que chegou até aqui, sua chance de desenrolar com a eduarda é
          agora, só não seja emocionado.
          <br />
          <br />
          Dica: Tenha algum assunto para debater com ela.
        </p>
      </section>
      <section className="w-full p-2 flex flex-row items-center justify-center ">
        <a
          href={`https://wa.me/${whatsappNumber}`}
          className="w-3/4 py-3 flex items-center justify-center rounded-2xl text-white text-lg title bg-pink-600"
        >
          Ir para o WhatsApp
        </a>
      </section>
    </div>
  );
}
export default Tela4;
