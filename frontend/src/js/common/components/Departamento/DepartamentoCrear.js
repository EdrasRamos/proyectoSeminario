import React, { Component } from "react";
import FormularioDepartamento from "./FormularioDepartamento";

class Departamento extends Component {
    state = {
        crear: true,
    }

    componentWillMount = () => {
        const { leer, match } = this.props;
        const id = match.params.id;

        if (id) {
            this.setState({crear: false});
            leer(id);
        }
    };
    render() {
        console.log("PROPS: ", this.props);
        const { registroDepartamento, actualizarDepartamento } = this.props;
        const { crear } = this.state;

        const funcionEnvio = crear ? registroDepartamento : actualizarDepartamento;

        return (
            <React.Fragment>
                <FormularioDepartamento 
                crear={crear}
                onSubmit={funcionEnvio} />
            </React.Fragment>
        );
    }
}

export default Departamento;
