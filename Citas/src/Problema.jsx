import './Problema.css'

function Problema ({problema, onEliminar}){

    return (
        <div ClassName = "problema">
        <h3> {problema.nombre} {problema.apellido} </h3>
        <p> {problema.problema} </p>
        <small>{new Date(problema.creada).toLocaleTimeString()}</small>
        <button className="eliminar" onClick={onEliminar}>Eliminar</button>

        </div>
    )
}
export default Problema;