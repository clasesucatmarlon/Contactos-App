import React from 'react'

import './tabla.css'

function Tabla( { contacts, deleteContact } ) {
return (
<table className="table table-responsive table-striped bg-white p-4">
    <thead>
        <tr>
            <th className="headTable">#</th>
            <th className="headTable cellTable">Nombre</th>
            <th className="headTable cellTable">Apellido</th>
            <th className="headTable cellTable">Email</th>
            <th scope="col">Acción</th>
        </tr>
    </thead>
    <tbody>

        {
            contacts?.map( (contact, index) => (
                <tr key={index}>
                    <td >{ index + 1 }</td>
                    <td className="cellTable">{ contact.name }</td>
                    <td className="cellTable">{ contact.last }</td>
                    <td className="cellTable">{ contact.email }</td>
                    <td>
                        <button type="button" className="btn btn-primary">
                            <i className="bi bi-pencil"></i>
                        </button>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={ () => deleteContact(contact.id) } type="button" className="btn btn-danger">
                            <i className="bi bi-trash"></i>
                        </button>            
                    </td>
                </tr>
            ))
        }

    </tbody>
</table>
)
}

export default Tabla;