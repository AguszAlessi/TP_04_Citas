import Cita from "./Cita";
import './index.css';

function ListadoCitas({ listadoCitas, onEliminar }) 
{
  if (!listadoCitas) return null;
  return (

    <div className="one-half column">
      <h2>Administra tus citas</h2>
      <div className="cita">
      <ul>
            {listadoCitas.map((cita) => (
              <Cita key={cita.id} cita={cita} onEliminar={() => onEliminar(i)} />
            ))}
          </ul>
        <p>Sintomas: <span>Le duele la pierna</span></p><button class="button elimnar u-full-width">Eliminar ×</button>
      </div>
    </div>
  );
}

export default ListadoCitas;