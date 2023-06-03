import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdDeleteForever as DeleteIcon } from "react-icons/md";
import toast from "react-simple-toasts";

const DeleteButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  async function deleteNotepad() {
    toast("Ohh Não, Fui Deletado!");
    navigate("/");
  }

  return (
    <span className="flex">
      <button
        onClick={deleteNotepad}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <DeleteIcon className="font-bold text-4xl hover:text-defaultRed" />
      </button>
      {isHovered && (
        <p
          className="text-defaultRed"
          style={{ fontFamily: "Josefin Sans, sans-serif" }}
        >
          Excluir Notepad?
        </p>
      )}
    </span>
  );
};

export default DeleteButton;
