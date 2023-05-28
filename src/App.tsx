import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner";
import HomeRoute from "../src/routes/HomeRoute";
import CreateNotepadRoute from "../src/routes/CreateNotepadRoute";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Banner />

          <Routes>
            <Route path="/" element={<HomeRoute />} />
            <Route path="/Criar-Notepad" element={<CreateNotepadRoute />} />
          </Routes>
        </div>
        <Footer />
        
      </BrowserRouter>
    </>
  );
}

export default App;
