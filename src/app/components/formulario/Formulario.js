import React from "react";
import {v4 as uuid} from 'uuid';

import "./formulario.css";

function Formulario() {

const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];

    let contact = {};
    for (const [key, value] of formData.entries()) {
        contact[key] = value;
    }

    contact.id = uuid();

    contacts.push(contact);

    localStorage.setItem("contacts", JSON.stringify(contacts));

    console.log(event)
    event.target.reset();

};

return (
<form method="POST" className="bg-white rounded p-5" onSubmit={ handleSubmit }>
    <div className="mb-3">
        <label for="name" className="form-label">Nombre:</label>
        <input type="text" name="name" className="form-control" id="nombre" />
    </div>
    <div className="mb-3">
        <label for="last" className="form-label">Apellido:</label>
        <input type="text" name="" className="form-control" id="nombre" />
    </div>
    <div className="mb-3">
        <label for="email" className="form-label">Email:</label>
        <input type="email" name="email" className="form-control" id="email" />
    </div>
    <div className="mb-3">
        <label for="password" className="form-label">Password:</label>
        <input type="password" name="password" className="form-control" id="password" />
    </div>

    <button type="submit" value="submit" className="btn btn-primary">Agregar</button>
</form>
);
}

export default Formulario;