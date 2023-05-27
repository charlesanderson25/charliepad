import styled from "styled-components";
import ButtonSubmitForm from "../components/ButtonSubmitForm";
import { useState } from "react";

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
  const [title, setTittle] = useState("");
  const [subtittle, setSubtittle] = useState("");
  const [content, setContent] = useState("");

  return (
    <section className="my-20 relative min-h-screen">
      <div className="form-container absolute inset-x-1/4">
        <form
          className="form bg-darkTheme rounded-2xl py-9 px-16 font-sans"
          onSubmit={(event) => {
            event.preventDefault();
            console.log(title);
            console.log(subtittle);
            console.log(content);
            alert("O formulário foi enviado com sucesso!");
            setTittle("");
            setSubtittle("");
            setContent("");
          }}
        >
          <h1 className="font-bold text-2xl text-white ml-3">Criar Notepad</h1>
          <StyledLabel titulo="Título" subtitulo="Subtítulo" texto="Texto">
            <input
              className="bg-backGroundColorDarkTheme shadow-md w-full py-3 px-1 m-2 rounded-md "
              type="text"
              placeholder="Digite seu Título"
              value={title}
              onChange={(event) => {
                const newTittle = event.target.value;
                setTittle(newTittle);
              }}
            />
          </StyledLabel>
          <StyledLabel titulo="Título" subtitulo="Subtítulo" texto="Texto">
            <input
              className="bg-backGroundColorDarkTheme shadow-md w-full py-3 px-1 m-2 rounded-md"
              type="text"
              placeholder="Digite o Subtítulo"
              value={subtittle}
              onChange={(event) => {
                const newSubtittle = event.target.value;
                setSubtittle(newSubtittle);
              }}
            />
          </StyledLabel>
          <StyledLabel titulo="Título" subtitulo="Subtítulo" texto="Texto">
            <textarea
              className="bg-backGroundColorDarkTheme shadow-md w-full py-3 px-1 m-2 rounded-md"
              name=""
              id=""
              placeholder="Digite seu Texto"
              value={content}
              onChange={(event) => {
                const newContent = event.target.value;
                setContent(newContent);
              }}
            ></textarea>
          </StyledLabel>
          <button type="submit">{<ButtonSubmitForm />}</button>
        </form>
      </div>
    </section>
  );
};

export default CreateNotepadRoute;
