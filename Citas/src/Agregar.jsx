import { useState } from "react";
import "./Agregar.css"; 

function AgregarProblema({ onAgregar }) {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [problema, setProblema] = useState("");

  const handleClick = () => {
    if (nombre.trim() && apellido.trim() && problema.trim()) {
      onAgregar({
        nombre: nombre.trim(),
        apellido: apellido.trim(),
        problema: problema.trim(),
        creada: new Date()
      });
      setNombre("");
      setApellido("");
      setProblema("");
    }
  };

  return (
    <div className="AgregarProblema">
      <form onSubmit={(e) => { e.preventDefault(); handleClick(); }}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="text"
          placeholder="Apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
        <input
          type="text"
          placeholder="Escribí tu problema"
          value={problema}
          onChange={(e) => setProblema(e.target.value)}
        />
        <button type="submit">Subir Tarea</button>
      </form>
    </div>
  );
}

export default AgregarProblema;
