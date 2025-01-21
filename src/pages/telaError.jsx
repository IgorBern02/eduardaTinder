function TelaError() {
  return (
    <div className="bg-gradient-to-br from-pink-600 via-red-300 to-rose-500 w-full h-screen flex flex-col items-center justify-around ">
      <section className="text-2xl bg-pink-600 w-3/4 h-3/6 p-2 text-center flex items-center rounded-xl">
        <p className="text-white">
          <span className="text-3xl">Melhore!!!</span>
          <br />
          <br />
          Dessa vez você não irá conversar com ela, melhore mais um pouco e quem
          sabe, consiga ter uma chance (caso ela esteja solteira).
        </p>
      </section>
      <section className="w-full p-2 flex flex-row items-center justify-center ">
        <a
          href="/"
          className="w-3/4 py-3 flex items-center justify-center rounded-2xl text-white text-lg title bg-pink-600"
        >
          Concluir e melhorar.
        </a>
      </section>
    </div>
  );
}
export default TelaError;
