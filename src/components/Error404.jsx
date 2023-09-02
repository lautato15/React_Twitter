import { useEffect, useState } from "react";
function Error404(props) {
  const [name, setName] = useState(null);
  return (
    <div class="container">
      <h1 class="my-4">Error 404</h1>
      <p class="mb-4">
        Lo sentimos, la página a la que se está intentando acceder no existe.
      </p>
      <a href="/" class="btn btn-primary">
        Ir a página de inicio
      </a>
    </div>
  );
}
export default Error404;
