import { useState } from "react";
import Alert from './Alert'



const Formulario = ({ agregarColaborador }) => {
    const [nombreColaborador, setNombreColaborador] = useState("");
    const [correoColaborador, setCorreoColaborador] = useState("");
    const [edadColaborador, setEdadColaborador] = useState("");
    const [cargoColaborador, setCargoColaborador] = useState("");
    const [telefonoColaborador, setTelefonoColaborador] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);


    const enviarFormulario = (e) => {
        e.preventDefault();
        setSuccess(false);
        setError(false);


        if (!nombreColaborador || !correoColaborador || !cargoColaborador) {
            setError(true);
            return;
        }


        agregarColaborador(nombreColaborador, correoColaborador, edadColaborador, cargoColaborador, telefonoColaborador);
        setNombreColaborador("");
        setCorreoColaborador("");
        setEdadColaborador("");
        setCargoColaborador("");
        setTelefonoColaborador("");
        setSuccess(true);
    }


    const capturaNombre = (e) => {
        setNombreColaborador(e.target.value);
    };

    const capturaCorreo = (e) => {
        setCorreoColaborador(e.target.value);
    };

    const capturaEdad = (e) => {
        setEdadColaborador(e.target.value);
    };

    const capturaCargo = (e) => {
        setCargoColaborador(e.target.value);
    };

    const capturaTelefono = (e) => {
        setTelefonoColaborador(e.target.value);
    };



    return (
        <>

            <h3 className="fw-bold">Agregar Colaborador</h3>
            <form onSubmit={enviarFormulario}>
                <div className="form-group mt-3">
                    <input className="form-control" type="text" name="nombreColaborador" onChange={capturaNombre} value={nombreColaborador} placeholder="Nombre del colaborador" autoComplete="off" />
                </div>
                <div className="form-group mt-3">
                    <input className="form-control" type="text" name="correoColaborador" onChange={capturaCorreo} value={correoColaborador} placeholder="Email del colaborador" autoComplete="off" />
                </div>
                <div className="form-group mt-3">
                    <input className="form-control" type="number" name="edadColaborador" onChange={capturaEdad} value={edadColaborador} placeholder="Edad del colaborador" min="0" autoComplete="off" />
                </div>
                <div className="form-group mt-3">
                    <input className="form-control" type="text" name="cargoColaborador" onChange={capturaCargo} value={cargoColaborador} placeholder="Cargo del colaborador" autoComplete="off" />
                </div>
                <div className="form-group mt-3">
                    <input className="form-control" type="text" name="teléfonoColaborador" onChange={capturaTelefono} value={telefonoColaborador} placeholder="Teléfono del colaborador" autoComplete="off" />
                </div>
                <button type="submit" className="form-control btn btn-primary mt-3">Ingresar Colaborador</button>
            </form>
            <div className="mt-3">
                {error ? <Alert message="¡Completa todos los campos!" type="danger" show={error} /> : null}
                {success ? <Alert message="¡Colaborador agregado!" type="success" show={success} /> : null}
            </div>

        </>
    );
};


export default Formulario;