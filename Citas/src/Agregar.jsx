import { useState } from "react";
import "./Agregar.css"; 

function AgregarSintoma({ onAgregar }) {
  const [mascota, setMascota] = useState("");
  const [dueño, setDueño] = useState("");
  const [sintoma, setSintoma] = useState("");

  const handleClick = () => {
    if (mascota.trim() && dueño.trim() && sintoma.trim()) {
      onAgregar({
        mascota: mascota.trim(),
        dueño: dueño.trim(),
        sintoma: sintoma.trim(),
        creada: new Date()
      });
      setMascota("");
      setDueño("");
      setSintoma("");
    }
  };

  return (
    // <div className="AgregarSintoma">
    //   <form onSubmit={(e) => { e.preventDefault(); handleClick(); }}>
    //     <input
    //       type="text"
    //       placeholder="mascota"
    //       value={mascota}
    //       onChange={(e) => setMascota(e.target.value)}
    //     />
    //     <input
    //       type="text"
    //       placeholder="dueño"
    //       value={dueño}
    //       onChange={(e) => setDueño(e.target.value)}
    //     />
    //     <input
    //       type="text"
    //       placeholder="Escribí tu sintoma"
    //       value={sintoma}
    //       onChange={(e) => setSintoma(e.target.value)}
    //     />
    //     <button type="submit">Subir Tarea</button>
    //   </form>
    // </div>

  <div class="one-half column">
    <h2>Administra tus citas</h2>
    <div class="cita">
      <p>Mascota: <span>{mascota}</span></p>
      <p>Dueño: <span>{dueño}</span></p>
      <p>Fecha: <span>2021-08-05</span></p>         {/* falta fecha */}
      <p>Hora: <span>08:20</span></p>               {/* falta hora */}
      <p>Sintomas: <span>{sintoma}</span></p><button class="button elimnar u-full-width">Eliminar ×</button>
    </div>
    <div class="cita">
      <p>Mascota: <span>Sifon</span></p>
      <p>Dueño: <span>Flecha</span></p>
      <p>Fecha: <span>2023-08-05</span></p>
      <p>Hora: <span>09:24</span></p>
      <p>Sintomas: <span>Duerme mucho</span></p><button class="button elimnar u-full-width">Eliminar ×</button>
    </div>
    <div class="cita">
      <p>Mascota: <span>Floki</span></p>
      <p>Dueño: <span>Ari</span></p>
      <p>Fecha: <span>2023-08-05</span></p>
      <p>Hora: <span>16:15</span></p>
      <p>Sintomas: <span>No está comiendo</span></p><button class="button elimnar u-full-width">Eliminar ×</button>
    </div>
  </div>
  );
}

export default AgregarSintoma;
