import React, { useState } from "react";
import Formulario from "../formulario/Formulario";
import Tabla from "../tabla/Tabla";

function Body() {

  const initialContacts = JSON.parse(localStorage.getItem('contacts'));

  const [contacts, setContacts] = useState(initialContacts)

  const deleteContact = (id) => {
    console.log(id)
    const filterContact = contacts.filter(cont  => cont.id !== id)
    setContacts(filterContact);
    localStorage.setItem("contacts", JSON.stringify(filterContact));

  
  }

  return (
    <div className="container bg-dark p-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-5 pb-5">
          <Formulario setContacts={ setContacts }/>
        </div>
        <div className="col-12 col-lg-12">
          <h1 className="text-white mb-4">Contactos registrados</h1>
          <Tabla contacts={ contacts } deleteContact={ deleteContact }/>
        </div>
      </div>
    </div>
  );
}

export default Body;
