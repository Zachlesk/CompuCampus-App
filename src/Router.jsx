import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeView } from "./views/Home";
import { Agregar } from "./components/Agregar/Agregar";
import { OfertaAplicada } from "./components/Cards/OfertaAplicada/OfertaAplicada";
import { Vacante } from "./components/Vacante/Vacante";


export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomeView/>}/>
        <Route path="/vacante" element={<Vacante/>} />
        <Route path="/post" element={<Agregar/>}/>
        <Route path="/oferta" element={<OfertaAplicada/>}/>
      </Routes>
    </BrowserRouter>
  )
}