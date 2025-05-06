import Problema from "./Problema";

function Problemas({ problemas, onToggle }) 
{
  if (!problemas) return null;
  return (
    <ul>
      {problemas.map((problema, i) => (
        <Problema key={i} problema={problema} onToggle={() => onToggle(i)} />
      ))}
    </ul>
  );
}

export default Problemas;