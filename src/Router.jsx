import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeView } from "./views/Home";


export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
      </Routes>
    </BrowserRouter>
  )
}