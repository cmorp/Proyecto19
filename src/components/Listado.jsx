const datosColaboradores = ({ datosColaboradores }) => {

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Edad</th>
                        <th>Cargo</th>
                        <th>Teléfono</th>
                    </tr>
                </thead>
                <tbody>
                    {datosColaboradores.map((colaborador) => (
                        <tr key={colaborador.id}>
                            <td>{colaborador.nombre}</td>
                            <td>{colaborador.correo}</td>
                            <td>{colaborador.edad}</td>
                            <td>{colaborador.cargo}</td>
                            <td>{colaborador.telefono}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );

}


export default datosColaboradores;