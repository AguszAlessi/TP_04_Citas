import  { useState } from 'react';
import AgregarCita from "./Formulario";
import ListadoCitas from './ListadoCitas';
import './App.css';



  export default function App() {
   const [citas,setCitas] = useState([]);
    
    const agregarCita = (nuevo) => {
    setCitas([...citas, {...nuevo, id: Date.now()}]);
    };
    
    const eliminarCita = (id) => {
    setCitas(citas.filter(cita => cita.id !== id));
    };

  return (
    <>
    
    <h1> Administracion de Pacientes</h1>
    <div className="container">
      <div className="row"> 

      <div className = "one-half-column">
        <h2> Crear mi cita </h2>
       <AgregarCita onAgregar={agregarCita} />
      </div>

       <div className="one-half column">
  
        <ListadoCitas citas={citas} onEliminar={eliminarCita} />
      </div>
   </div>     
  </div>
  </>
  );
}
