import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import './Estilo/main.css';
import './Estilo/textos.css'
import Iniciof from "./Componentes/Home";
import Portafoliof from "./Componentes/Portafolio";
import Nav from './Componentes/Nav';
import Comunicacionf from'./Componentes/Comunicacion'
import Informacion from "./Componentes/Info";
import ConsultaPedido from "./Componentes/Consulta";
import Ordenes from "./Componentes/Pedidos";
function App() {
  return (
    <div>
       <React.Fragment>
      <Router>
        <Nav/>
        <Routes>
          <Route exact path="/" element={<Iniciof />}></Route>
          <Route exact path="/Consulta" element={<ConsultaPedido/>}></Route>
          <Route exact path="/Portafolio" element={<Portafoliof/>}></Route>
          <Route exact path="/Comunicacion" element={<Comunicacionf/>}></Route>
          <Route exact path="/Info" element={<Informacion/>}></Route>
          <Route exact path="/Pedidos" element={<Ordenes/>}></Route>
        </Routes>
      </Router>
    </React.Fragment>
    </div>
  );
}
export default App;