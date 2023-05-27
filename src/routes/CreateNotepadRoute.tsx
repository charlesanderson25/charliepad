import styled from "styled-components";
import ButtonSubmitForm from "../components/ButtonSubmitForm";

interface StyledLabelProps {
  titulo: string;
  subtitulo: string;
  texto: string;
}

const StyledLabel = styled.label<StyledLabelProps>`
  display: block;
  font-size: 1rem;
  color: white;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const CreateNotepadRoute = () => {
  return (
    <section className="my-20 relative min-h-screen">
      <div className="form-container absolute inset-x-1/4">
        <form className="form bg-darkTheme rounded-2xl py-9 px-16 font-sans">
          <h1 className="font-bold text-2xl text-white ml-3">Criar Notepad</h1>
          <StyledLabel titulo="Título" subtitulo="Subtítulo" texto="Texto">
            <input
              className="bg-darkTheme shadow-md w-full py-3 px-1 m-2 border rounded-md"
              type="text"
              placeholder="Digite seu Título"
            />
          </StyledLabel>
          <StyledLabel titulo="Título" subtitulo="Subtítulo" texto="Texto">
            <input
              className="bg-darkTheme shadow-md w-full py-3 px-1 m-2 border rounded-md	"
              type="text"
              placeholder="Digite o Subtítulo"
            />
          </StyledLabel>
          <StyledLabel titulo="Título" subtitulo="Subtítulo" texto="Texto">
            <textarea
              className="bg-darkTheme shadow-md w-full py-3 px-1 m-2 border rounded-md	"
              name=""
              id=""
              placeholder="Digite seu Texto"
            ></textarea>
          </StyledLabel>
          <button type="submit">{<ButtonSubmitForm />}</button>
        </form>
      </div>
    </section>
  );
};

export default CreateNotepadRoute;
