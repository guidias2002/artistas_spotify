import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Favoritos from "./pages/Favoritos";
import Cabecalho from "Components/Cabecalho";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Routes>
                <Route to="/" element={<Inicio />}></Route>
                <Route to="/favoritos" element={<Favoritos />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;