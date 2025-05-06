import {useState} from "react";

function AgregarProblema({onAgregar})
{
    const [texto, setTexto] = useState("");
    const handleClick = () => 
{
        if (texto.trim()) 
        {
          onAgregar(texto.trim());
          setTexto("");
        }
    };
}

return (
    <div className="AgregarProblema">
      <input
        type="text"
        placeholder="Escribí tu problema"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button onClick={handleClick}>Subir Tarea</button>
    </div>
  );

export default AgregarProblema;