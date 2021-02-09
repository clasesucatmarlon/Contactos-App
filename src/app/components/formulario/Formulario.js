import React from "react";
import {v4 as uuid} from 'uuid';

import "./formulario.css";

function Formulario() {

const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];

    let contact = {};
    console.log(formData)
    for (const [key, value] of formData.entries()) {
        contact[key] = value;
    }

    /* contact.id = uuid(); */

    console.log(contact)

    contacts.push(contact)

    localStorage.setItem("contacts", JSON.stringify(contacts))

};

return (
<form method="POST" className="bg-white rounded p-5" onSubmit={ handleSubmit }>
    <div className="mb-3">
        <label htmlFor="name" className="form-label">Nombre:</label>
        <input type="text" className="form-control" id="nombre" />
    </div>
    <div className="mb-3">
        <label htmlFor="last" className="form-label">Apellido:</label>
        <input type="text" className="form-control" id="nombre" />
    </div>
    <div className="mb-3">
        <label htmlFor="email" className="form-label">Email:</label>
        <input type="email" className="form-control" id="email" />
    </div>
    <div className="mb-3">
        <label htmlFor="password" className="form-label">Password:</label>
        <input type="password" className="form-control" id="password" />
    </div>

    <button type="submit" value="submit" className="btn btn-primary">Agregar</button>
</form>
);
}

export default Formulario;