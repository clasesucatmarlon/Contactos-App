import React from 'react'

function Tabla() {
return (
<table className="table table-striped bg-white p-4">
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Email</th>
            <th scope="col">Acción</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>mark@mdo</td>
            <td>
                <button type="button" className="btn btn-primary">
                    <i className="bi bi-pencil"></i>
                </button>
                &nbsp;&nbsp;&nbsp;
                <button type="button" className="btn btn-danger">
                    <i className="bi bi-trash"></i>
                </button>            </td>
        </tr>
        <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>jacob@fat</td>
            <td>
                <button type="button" className="btn btn-primary">
                    <i className="bi bi-pencil"></i>
                </button>
                &nbsp;&nbsp;&nbsp;
                <button type="button" className="btn btn-danger">
                    <i className="bi bi-trash"></i>
                </button>
            </td>
        </tr>
        <tr>
            <th scope="row">3</th>
            <td>Marlon</td>
            <td>García</td>
            <td>marlon@fat</td>
            <td>
                <button type="button" className="btn btn-primary">
                    <i className="bi bi-pencil"></i>
                </button>
                &nbsp;&nbsp;&nbsp;
                <button type="button" className="btn btn-danger">
                    <i className="bi bi-trash"></i>
                </button>
            </td>
        </tr>

        

    </tbody>
</table>
)
}

export default Tabla;