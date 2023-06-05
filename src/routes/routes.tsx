import { Route, Routes } from "react-router-dom";
import BackGroundImage from "../components/BackGroundImage";
import { NotFoundTwo } from "../pages/notFound/NotFoundTwo";

import HomeRoute from "../pages/homeRoute/HomeRoute";
import Welcome from "../pages/welcome/Welcome";
import CreateNotepadRoute from "../pages/createNotepadRoute/CreateNotepadRoute";
import EditNotepad from "../pages/EditNotepad";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/listar-notepads" element={<HomeRoute />} />
      <Route path="/criar-Notepad" element={<CreateNotepadRoute />} />
      <Route path="image" element={<BackGroundImage />} />
      <Route path="/editar-notepad/:id" element={<EditNotepad />} />

      <Route path="*" element={<NotFoundTwo />} />
    </Routes>
  );
};

export default RoutesApp;
