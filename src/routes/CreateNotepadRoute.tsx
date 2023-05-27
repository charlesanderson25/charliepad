const CreateNotepadRoute = () => {
  return (
    <section className="my-20 relative min-h-screen">
      <div className="form-container absolute inset-x-1/4">
        <form className="form bg-darkTheme rounded-2xl py-9 px-16 font-sans">
          <h1 className="font-bold text-2xl text-white">Criar Notepad</h1>
          <label className="block my-4 text-2xl text-white">
            Título
            <input
              className="bg-darkTheme shadow-md w-full py-3 px-1 m-2 border rounded-md"
              type="text"
              placeholder="Digite seu Título"
            />
          </label>
          <label className="block my-4 text-2xl text-white">
            {" "}
            Subtítulo
            <input
              className="bg-darkTheme shadow-md w-full py-3 px-1 m-2 border rounded-md	"
              type="text"
              placeholder="Digite o Subtítulo"
            />
          </label>
          <label className="block my-4 text-2xl text-white">
            Texto
            <textarea
              className="bg-darkTheme shadow-md w-full py-3 px-1 m-2 border rounded-md	"
              name=""
              id=""
              placeholder="Digite seu Texto"
            ></textarea>
          </label>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default CreateNotepadRoute;
