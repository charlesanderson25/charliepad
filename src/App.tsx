import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner";
import NotepadBody from "./components/NotepadBody";
import HomeRoute from "./components/routes/HomeRoute";
import CreateNotepadRoute from "./components/routes/CreateNotepadRoute";

function App() {
  return (
    <>
      
      <BrowserRouter>
      <div>
          <Banner />
        
          <Routes>
            <Route path="/" element={<HomeRoute />}/>
            <Route path="/Criar-Notepad" element={<CreateNotepadRoute />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
