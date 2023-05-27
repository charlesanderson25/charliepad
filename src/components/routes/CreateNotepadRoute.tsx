const CreateNotepadRoute = () => {
    return (
        <section className="my-20 relative min-h-screen">
            <div className="form-container absolute inset-x-1/4">
                <form className="form bg-gray-200 rounded-2xl py-9 px-16 font-sans">
                    <h1 className="font-bold text-2xl">Criar Notepad</h1>
                    <label className="block my-4 text-2xl ">Título
                        <input className="bg-white shadow-md w-full py-3 px-1 m-2" type="text" placeholder="Digite seu Título" />
                    </label>
                    <label className="block my-4 text-2xl "> Subtítulo
                        <input className="bg-white shadow-md w-full py-3 px-1 m-2" type="text" placeholder="Digite o Subtítulo" />
                    </label>
                    <label className="block my-4 text-2xl ">Texto
                        <textarea className="bg-white shadow-md w-full py-3 px-1 m-2" name="" id="" placeholder="Digite seu Texto"></textarea>
                    </label>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </section>
    )
}

export default CreateNotepadRoute;