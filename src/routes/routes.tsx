import { Route, Routes } from "react-router-dom";
import BackGroundImage from "../components/BackGroundImage";
import { NotFoundTwo } from "../pages/notFound/NotFoundTwo";

import HomeRoute from "../pages/homeRoute/HomeRoute";
import Welcome from "../pages/welcome/Welcome";
import CreateNotepadRoute from "../pages/createNotepadRoute/CreateNotepadRoute";

const RoutesApp = () => {
    return (
        
          <Routes>         
            <Route path="/" element={<Welcome />} />
            <Route path="/listar-notepads" element={<HomeRoute />} />
            <Route path="/Criar-Notepad" element={<CreateNotepadRoute />} />
            <Route path="Image" element={<BackGroundImage/>}/>

            <Route path="*" element={<NotFoundTwo/>}/>
          </Routes>
     
    )
}

export default RoutesApp;