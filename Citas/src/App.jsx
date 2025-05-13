import React, { useState } from 'react';
import AgregarSintoma from './Agregar';
import './App.css'

import ListadoCitas from './ListadoCitas';

  export default function App() {
    const [citas, setCitas] = useState([
    {
    id: "1",
    mascota: "Nina",
    propietario: "Martin",
    fecha: "2021-08-05",
    hora: "08:20",
    sintomas: "Le duele la pierna"
    },
    {
    id: "2",
    mascota: "Sifon",
    propietario: "Flecha",
    fecha: "2023-08-05",
    hora: "09:24",
    sintomas: "Duerme mucho"
    }
    ]);
    
    const agregarCita = (nuevo) => {
    setCitas([...citas, {...nuevo, id: Date.now()}]);
    };
    
    const eliminarCita = (index) => {
    setCitas(citas.filter(cita => cita.index !== index));
    };

  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario onAgregarCita={agregarCita} />
          </div>
          <div className="one-half column">
            <ListadoCitas citas={citas} onEliminarCita={eliminarCita} />
          </div>
        </div>
      </div>
    </>
  );
}
