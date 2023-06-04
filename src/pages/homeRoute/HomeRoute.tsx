import uuid from "react-uuid";
import { useEffect, useState } from "react";
import { api } from "../../api";
import { FaSpinner } from "react-icons/fa";
import DeleteButton from "../../components/DeleteButton";

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
const loadSpinner = true;

// Componente Filho
const NotepadList = () => {
  const [notepads, setNotepads] = useState<Notepad[]>(initialNotepads);
  const [load, setLoad] = useState(loadSpinner);

  async function getNotepads() {
    const response = await api.get("/notepads");
    const showNotepads: Notepad[] = response.data.notepads;
    setNotepads(showNotepads);
  }

  useEffect(() => {
    getNotepads();
    console.log("Os dados foram carregados!");
  }, []);

  useEffect(() => {
    if (notepads.length > 0) {
      setLoad(false);
    }
    console.log("Os dados foram atualizados");
  }, [notepads]);

  return (
    <div className="p-5 m-5 text-white bg-darkTheme max-w-screen-xl md:mx-auto">
      {load && (
        <div className="flex justify-center">
          <FaSpinner className="text-4xl animate-spin" />
        </div>
      )}

      <h2 className="font-bold text-3xl	ml-2 text-defaultRed">NotepadList</h2>
      {notepads.map((notepad) => {
        return (
          <div key={notepad.id} className="border-b p-2">
            <span className="italic">#{notepad.id}</span>
            <DeleteButton id={notepad.id} />
            <h1 className="text-2xl font-bold">{notepad.title}</h1>
            <h4 className="text-lg	font-bold">{notepad.subtitle}</h4>
            <p className="italic">{notepad.content}</p>
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
    <div className="bg-backGroundColorDarkTheme">
      <NotepadList />
    </div>
  );
};

export default HomeRoute;