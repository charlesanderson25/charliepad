import { useState } from "react";
import { useParams } from "react-router-dom";
import { string } from "zod";
import { api } from "../api";

const texts = {
  titleEditNotepad: "Editar Notepad",
};

const EditButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  async function editNotepad() {
    const response = await api.patch(`/notepads/${params.id}`);
  }

  const params = useParams();
  return (
    <div>
      {texts.titleEditNotepad} {params.id}{" "}
    </div>
  );
};

export default EditButton;
