import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { string } from "zod";
import { api } from "../api";
import { FaEdit as EditIcon } from "react-icons/fa";

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
      <span>
        <Link
          to="/editar-notepad/:id"
          className="font-bold text-4xl hover:text-defaultRed"
        >
          <EditIcon />
        </Link>
        {isHovered && (
          <p
            className="text-defaultRed flex items-center"
            style={{ fontFamily: "Josefin Sans, sans-serif" }}
          >
            {texts.titleEditNotepad} {params.id}{" "}
          </p>
        )}
      </span>
    </div>
  );
};

export default EditButton;
