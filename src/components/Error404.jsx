import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/dist";
function Error404() {
  const params = useParams();
  const [name, setName] = useState(null);
  return (
    <div className="container">
      <h1 className="my-4">Error 404</h1>
      {params.msgerror === "Credenciales incorrectas" ? (
        <h4>Credenciales Incorrectas</h4>
      ) : (
        <>
          <h4 className="mb-4">
            Lo sentimos, la página a la que se está intentando acceder no
            existe.
          </h4>
          <a href="/" className="btn btn-primary">
            Ir a página de inicio
          </a>
        </>
      )}
    </div>
  );
}
export default Error404;
