import React, { Component } from "react";
import Formulario from "./Formulario";

class Queja extends Component {
    state = {
        creacion: true,
    }

    componentWillMount = () => {
        const { leerQueja, match } = this.props;
        const id = match.params.id;

        if (id) {
            this.setState({creacion: false});
            leerQueja(id);
        }
    }

    actualizarQueja = (data) => {
        const{editarQueja} = this.props;
        const id = data.id;
        editarQueja(id, data);
    }

    render() {
        const { crearQueja, ObtenerDepartamentos, ObtenerMunicipios, ObtenerEmpresas } = this.props;
        const { creacion } = this.state;

        const funcionEnvio = creacion ? crearQueja : this.actualizarQueja;

        return (
            <React.Fragment>
                <Formulario 
                crear={creacion}
                ObtenerDepartamentos={ObtenerDepartamentos}
                ObtenerMunicipios={ObtenerMunicipios}
                ObtenerEmpresas={ObtenerEmpresas}
                onSubmit={funcionEnvio} />
            </React.Fragment>
        );
    }
}

export default Queja;