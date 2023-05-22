import uuid from "react-uuid";

const notepads = [
  {
    id: uuid(),
    tittle: "Primeiro Notepad",
    subtitle: "Primeiro Notepad cadastrado",
    created_at: new Date(),
  },

  {
    id: uuid(),
    tittle: "Segundo Notepad",
    subtitle: "Segundo Notepad cadastrado",
    created_at: new Date(),
  },
];

// Componente Filho
const NotepadList = () => {
  return (
    <div className="p-5 m-5 bg-darkTheme text-white">
      <h2>NotepadList</h2>
      {notepads.map((notepad) => {
        return (
          <div key={uuid()} className="border-b p-2">
            <h1 className="text-lg font-bold">{notepad.tittle}</h1>
            <h4>{notepad.subtitle}</h4>
            <p>{notepad.created_at.toLocaleDateString()}</p>
          </div>
        );
      })}
    </div>
  );
};

// Componente Pai
const NotepadBody = () => {
  return (
    <div className="bg-backGroundColorDarkTheme h-screen">
      <NotepadList />
    </div>
  );
};

export default NotepadBody;
