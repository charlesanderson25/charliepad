import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner";
import HomeRoute from "../src/routes/HomeRoute";
import CreateNotepadRoute from "../src/routes/CreateNotepadRoute";
import Footer from "./components/Footer";
import Welcome from "./routes/Welcome";
import BackGroundImage from "./components/BackGroundImage";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Banner />

          <Routes>
            <Route path="/Welcome" element={<Welcome />} />
            <Route path="/" element={<HomeRoute />} />
            <Route path="/Criar-Notepad" element={<CreateNotepadRoute />} />
            <Route path="Image" element={<BackGroundImage/>}/>
          </Routes>
        </div>
        <Footer />

      </BrowserRouter>
    </>
  );
}

export default App;
