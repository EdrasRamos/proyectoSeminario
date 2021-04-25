import React, { Component } from "react";
import FormularioMunicipio from "./FormularioMunicipio";

class Municipio extends Component {
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
        const { registroMunicipio, actualizarMunicipio } = this.props;
        const { crear } = this.state;

        const funcionEnvio = crear ? registroMunicipio : actualizarMunicipio;

        return (
            <React.Fragment>
                <FormularioMunicipio 
                crear={crear}
                onSubmit={funcionEnvio} />
            </React.Fragment>
        );
    }
}

export default Municipio;
