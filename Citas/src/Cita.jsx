import './Cita.css'

function Cita ({cita, onEliminar}){

    return (
        <div ClassName = "cita">
        <h3> {cita.nombre} {cita.apellido} </h3>
        <p> {cita.cita} </p>
        <small>{new Date(cita.creada).toLocaleTimeString()}</small>
        <button className="eliminar" onClick={onEliminar}>Eliminar</button>

        </div>
    )
}
export default Cita;