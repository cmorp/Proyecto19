import { useState } from 'react'
import './App.css'
import Formulario from './components/Formulario';
import Listado from './components/Listado'
import Buscador from './components/Buscador'
import Colaboradores from './Colaboradores';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [datosColaboradores, setDatosColaboradores] = useState(Colaboradores);
  const [filtro, setFiltro] = useState("");


  const agregarColaborador = (nombre, correo, edad, cargo, telefono) => {
    setDatosColaboradores([
      ...datosColaboradores,
      { nombre: nombre, correo: correo, edad: edad, cargo: cargo, telefono: telefono },
    ]);
  }


  const colaboradoresFiltrados = datosColaboradores.filter(colaborador => {
    return colaborador.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
      colaborador.correo.toLowerCase().includes(filtro.toLowerCase()) ||
      colaborador.edad.toLowerCase().includes(filtro.toLowerCase()) ||
      colaborador.cargo.toLowerCase().includes(filtro.toLowerCase()) ||
      colaborador.telefono.toLowerCase().includes(filtro.toLowerCase());
  });



  return (
    <>
      <div className="container d-flex justify-content-center align-items-center">
        <div>
          <div className="row">
            <div className="col-4 mb-2 mt-2">
              <Buscador setFiltro={setFiltro} />
            </div>
          </div>
          <div className='row'>
            <div className="col-8">
              <Listado datosColaboradores={colaboradoresFiltrados} />
            </div>
            <div className="col-4">
              <Formulario agregarColaborador={agregarColaborador} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default App;