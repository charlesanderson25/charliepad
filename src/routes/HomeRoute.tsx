import uuid from "react-uuid";
import axios from "axios";
import { useState } from "react";
import { api } from "../api";

// const notepads = [
//   {
//     id: uuid(),
//     tittle: "Primeiro Notepad",
//     subtitle: "Primeiro Notepad cadastrado",
//     created_at: new Date(),
//   },

//   {
//     id: uuid(),
//     tittle: "Segundo Notepad",
//     subtitle: "Segundo Notepad cadastrado",
//     created_at: new Date(),
//   },
// ];

interface Notepad {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  created_at: Date;
}

const initialNotepads: Notepad[] = [];

// Componente Filho
const NotepadList = () => {
  const [notepads, setNotepads] = useState<Notepad[]>(initialNotepads);

  async function getNotepads() {
    const response = await api.get("/notepads");
    const showNotepads: Notepad[] = response.data.notepads;
    setNotepads(showNotepads);
  }

  getNotepads();

  return (
    <div className="p-5 m-5 text-white bg-darkTheme">
      <h2>NotepadList</h2>
      {notepads.map((notepad) => {
        return (
          <div key={notepad.id} className="border-b p-2">
            <h1 className="text-lg font-bold">{notepad.title}</h1>
            <h4>{notepad.subtitle}</h4>
            <p>{new Date(notepad.created_at).toLocaleDateString()}</p>
          </div>
        );
      })}
    </div>
  );
};

// return (
//   <div className="p-5 m-5 text-white bg-darkTheme">
//     <h2>NotepadList</h2>
//     {notepads.map((notepad) => {
//       return (
//         <div key={notepad.id} className="border-b p-2">
//           <h1 className="text-lg font-bold">{notepad.tittle}</h1>
//           <h4>{notepad.subtitle}</h4>
//           <p>{notepad.created_at.toLocaleDateString()}</p>
//         </div>
//       );
//     })}
//   </div>
// );
// };

// Componente Pai
const HomeRoute = () => {
  return (
    <div className="bg-backGroundColorDarkTheme h-screen">
      <NotepadList />
    </div>
  );
};

export default HomeRoute;
