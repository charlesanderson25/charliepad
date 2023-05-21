const CreateNotepad = () => {
  return (
    <div
      style={{ fontFamily: "Josefin Sans, sans-serif" }}
      className="flex ml-4 mt-4 md:mt-0"
    >
      <button className="rounded-lg bg-defaultRed font-bold text-lg p-5 border-none cursor-pointer text-white hover:text-hoverdefaultRed">
        Criar Notepad
      </button>
    </div>
  );
};

export default CreateNotepad;
