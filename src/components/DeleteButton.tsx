import { useState } from "react";
import { MdDeleteForever as DeleteIcon } from "react-icons/md";

const DeleteButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <span className="flex">
      <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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
