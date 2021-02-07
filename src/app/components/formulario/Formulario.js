import React from "react";

import "./formulario.css";

function Formulario() {
return (
<form className="bg-white rounded p-5">
    <div className="mb-3">
        <label for="nombre" className="form-label">
            Nombre:
        </label>
        <input type="text" className="form-control" id="nombre" />
    </div>
    <div className="mb-3">
        <label for="apellido" className="form-label">
            Apellido:
        </label>
        <input type="text" className="form-control" id="nombre" />
    </div>
    <div className="mb-3">
        <label for="email1" className="form-label">
            Email:
        </label>
        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
    </div>
    <div className="mb-3">
        <label for="password" className="form-label">
            Password:
        </label>
        <input type="password" className="form-control" id="password" />
    </div>

    <button type="submit" className="btn btn-primary">
        Agregar
    </button>
</form>
);
}

export default Formulario;