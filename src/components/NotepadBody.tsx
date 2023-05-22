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
          <div>
            {notepad.id}
            <h1 key={uuid()}>{notepad.tittle}</h1>
            <h4 key={uuid()}>{notepad.subtitle}</h4>
            <p key={uuid()}>{notepad.created_at.toLocaleDateString()}</p>
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
