import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner";
import NotepadBody from "./components/NotepadBody";
import HomeRoute from "./components/routes/HomeRoute";

function App() {
  return (
    <>
      <Banner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeRoute />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
