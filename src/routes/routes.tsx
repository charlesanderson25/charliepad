import { Route, Routes } from "react-router-dom";
import BackGroundImage from "../components/BackGroundImage";
import { NotFoundTwo } from "../pages/notFound/NotFoundTwo";
import CreateNotepadRoute from "../pages/notFound/CreateNotepadRoute/CreateNotepadRoute";
import HomeRoute from "../pages/homeRoute/HomeRoute";
import Welcome from "../pages/welcome/Welcome";

const RoutesApp = () => {
    return (
        
          <Routes>         
            <Route path="/" element={<HomeRoute />} />
            <Route path="/Welcome" element={<Welcome />} />
            <Route path="/Criar-Notepad" element={<CreateNotepadRoute />} />
            <Route path="Image" element={<BackGroundImage/>}/>

            <Route path="*" element={<NotFoundTwo/>}/>
          </Routes>
     
    )
}

export default RoutesApp;