import Problema from "./Problema";
import './Problemas.css'

function Problemas({ problemas, onEliminar }) 
{
  if (!problemas) return null;
  return (
    <ul>
      {problemas.map((problema, i) => (
        <Problema key={i} problema={problema} onEliminar={() => onEliminar(i)} />
      ))}
    </ul>
  );
}

export default Problemas;