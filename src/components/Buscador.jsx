const Buscador = ({ setFiltro }) => {


    return (
            <input
                type="text"
                className="form-control"
                placeholder="Busca un Colaborador"
                onChange={(e) => setFiltro(e.target.value)}
            />
    );
}


export default Buscador;