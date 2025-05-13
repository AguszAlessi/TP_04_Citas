import Cita from "./Cita";
import './ListadoCitas.css'

function ListadoCitas({ listadoCitas, onEliminar }) 
{
  if (!listadoCitas) return null;
  return (
    <ul>
      {listadoCitas.map((cita, i) => (
        <Cita key={i} cita={cita} onEliminar={() => onEliminar(i)} />
      ))}
    </ul>
  );
}

export default ListadoCitas;