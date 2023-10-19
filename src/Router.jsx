import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { Light, Dark } from "./styles/themes";
import { ThemeProvider } from "styled-components";
import { HomeView } from "./views/Home";
import { Navbar} from "./components/Navbar";
import {Agregar} from "./components/Agregar/Agregar"
import {OfertaAplicada} from "./components/OfertaAplicada/OfertaAplicada"

export const ThemeContext = React.createContext(null);

export const Router = () => {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? Light : Dark;

  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <ThemeProvider theme={themeStyle}>
        <BrowserRouter>
          <Container className={sidebarOpen ? "sidebarState active" : ""}>
            <Navbar 
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/add" element={<Agregar/>} />
            <Route path="/applications" element={<OfertaAplicada/>} />
          </Routes>
            </Container>
        </BrowserRouter>
      </ThemeProvider>
    </ThemeContext.Provider>
  
  )
} 
const Container = styled.div`
position: -webkit-sticky;
  position: sticky;
  top: 0;
  display: grid;
  grid-template-columns: 90px auto;
  background: ${({ theme }) => theme.bgtotal};
  transition:all 0.3s ;
  &.active {
    grid-template-columns: 300px auto;
  }
  color:${({ theme }) => theme.text};
`;
