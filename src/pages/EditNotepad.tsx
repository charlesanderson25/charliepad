import { useParams } from "react-router-dom";

const EditNotepad = () => {
  const params = useParams();
  return <div>Editar Notepad {params.id} </div>;
};

export default EditNotepad;
