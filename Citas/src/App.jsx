import  { useState } from 'react';
import AgregarCita from "./Agregar";
import ListadoCitas from './ListadoCitas';
import './App.css';


  export default function App() {
   const [citas,setCitas] = useState([]);
    
    const agregarCita = (nuevo) => {
    setCitas([...citas, {...nuevo, id: Date.now()}]);
    };
    
    const eliminarCita = (index) => {
    setCitas(citas.filter(cita => cita.index !== index));
    };

  return (
    <>
    
    <h1> Administracion de Sigmas</h1>
    <div className="container">
      <div className="row"> 
    <AgregarCita onAgregar={agregarCita} />
    <ListadoCitas citas ={citas} onEliminar={eliminarCita}/>
      </div>
  </div>
  </>
  );
}
