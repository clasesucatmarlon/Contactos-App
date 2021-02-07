import React from "react";
import Formulario from "../formulario/Formulario";
import Tabla from "../tabla/Tabla";

function Body() {
  return (
    <div className="container bg-dark p-5">
      <div className="row">
        <div className="col-12 col-lg-5">
          <Formulario />
        </div>
        <div className="col-12 col-lg-7">
          <h1 className="text-white mb-4">Contactos registrados</h1>
          <Tabla />
        </div>
      </div>
    </div>
  );
}

export default Body;
