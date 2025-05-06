import React, { useState } from 'react';
import AgregarProblema from './Agregar';
import './App.css'

import Problemas from './Problemas';

export default function App() {
  const [problemas, setProblemas] = useState([]);

  const agregarProblema = (nuevo) => {
    setProblemas([...problemas, nuevo]);
  };
  const eliminarProblema = (index) => {
    const nuevos = problemas.filter((_, i) => i !== index);
    setProblemas(nuevos);
  };

  return (
    <div className="contenedor-app">
      <h1>FORMULARIO LISTA DE PROBLEMAS</h1>
      <div className="principal">
         <AgregarProblema onAgregar={agregarProblema} />
        <div className="listado">
        <Problemas problemas={problemas} onEliminar={eliminarProblema} />
         </div>
      </div>
    </div>
  );
}
