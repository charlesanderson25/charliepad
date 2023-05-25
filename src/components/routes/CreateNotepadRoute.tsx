const CreateNotepadRoute = () => {
    return (
        <div>
            <form>
                <h1>Criar Notepad</h1>
                <input type="text" placeholder="Digite seu Título" />
                <input type="text" placeholder="Digite o Subtítulo" />
                <textarea name="" id="" placeholder="Digite seu Texto"></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default CreateNotepadRoute;