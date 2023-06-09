import styled from "styled-components";
import ButtonSubmitForm from "../../components/ButtonSubmitForm";
import { ErrorMessage } from "../../components/ErrorMessage";
import { api } from "../../api";
import { notepadSchema } from "../../notepadSchema";
import { Value, useZorm } from "react-zorm";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-simple-toasts";

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

const textEditNotepad = {
    title: 'Editar Notepad',
}


const EditNotepadRoute = () =>{
    
    const navigate = useNavigate();
    const params = useParams();

  const zo = useZorm("create-notepad", notepadSchema, {
    async onValidSubmit(event) {
      event.preventDefault();
      const response = await api.post("/notepads", event.data);
      console.log(response.data.sucess);

      if (response.status === 201) {
        toast("O notepad foi cadastrado com sucesso!");
      } else {
        toast("Ocorreu um erro ao cadastrar o notepad!");
      }
      navigate("/");
    },
  });
    
    return (
        <section className="my-20 relative min-h-screen">
        <div className="form-container absolute inset-x-1/4">
          <form
            className="form bg-darkTheme rounded-2xl py-9 px-16 font-sans"
          
            ref={zo.ref}
          >
            <h1 className="font-bold text-2xl text-white ml-3">{textEditNotepad.title}</h1>
            
            <div className="flex-col">
            <StyledLabel titulo="Título" subtitulo="Subtítulo" texto="Texto">
              </StyledLabel>
              <input
                className={`bg-backGroundColorDarkTheme shadow-md w-full py-3 px-1 m-2 rounded-md text-white ${zo.errors.title("border-2 border-red-500 focus:border-red-600")} `}
                type="text"
                placeholder="Digite seu Título"
                
                name={zo.fields.title()}
                />
            {zo.errors.title((erro) => (
              <ErrorMessage>{erro.message}</ErrorMessage>
            ))}
            </div>
            
            <div className="flex-col">
            <StyledLabel titulo="Título" subtitulo="Subtítulo" texto="Texto">
            </StyledLabel>
            
              <input className={`bg-backGroundColorDarkTheme shadow-md w-full py-3 px-1 m-2 rounded-md text-white ${zo.errors.subtitle("border-2 border-red-500 focus:border-red-600")} `}
                type="text"
                placeholder="Digite o Subtítulo"
                name={zo.fields.subtitle()}
             />
  
            {zo.errors.subtitle((erro) => (
              <ErrorMessage>{erro.message}</ErrorMessage>
            ))}
            </div>
            
  
            <div className="flex-col">
            <StyledLabel titulo="Título" subtitulo="Subtítulo" texto="Texto">
              </StyledLabel>
              <textarea
                className={`bg-backGroundColorDarkTheme shadow-md w-full py-3 px-1 m-2 rounded-md text-white ${zo.errors.content("border-2 border-red-500 focus:border-red-600")} `}
                
                id=""
                placeholder="Digite seu Texto"
                
                name={zo.fields.content()}
              ></textarea>
  
            {zo.errors.content((erro) => (
              <ErrorMessage>{erro.message}</ErrorMessage>
            ))}
            </div>
            <button type="submit">{<ButtonSubmitForm />}</button>
          </form>
        </div>
      </section>
    );
  }; 
    

export default EditNotepadRoute;
