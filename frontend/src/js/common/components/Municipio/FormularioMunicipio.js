import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { renderField } from "../Utils/renderField/renderField";

class FormularioMunicipio extends Component {
    render() {
        console.log("PROPS: ", this.props);
        
        const { handleSubmit, crear } = this.props;
        const editar = window.location.href.includes('editar');
        let titulo = editar ? 'Editar Municipio' : 'Registrar Municipio';
        let disabled = false;
        if (crear == false && editar == false) {
            disabled = true;
            titulo = 'Ver Detalles del municipio';

        }
        return (
            <form onSubmit={handleSubmit} className='w-25'>
                <h3>{titulo}</h3>
                <label>Código</label>
                <Field
                    name="codigo"
                    component={renderField}
                    disabled={disabled}
                />
                <br />
                <label>Nombre</label>
                <Field
                    name="nombre"
                    component={renderField}
                    disabled={disabled}
                />
                <br />
                <div className='d-flex flex-row justify-content-end mt-2'>
                <a
                    href='/#/municipio'
                    className="btn btn-secondary btn-sm mr-2"
                >
                    Cancelar
                </a>
                {disabled == false && 
                    <button className={`btn btn-sm ${editar ? 'btn-success' : 'btn-primary'}`}
                    type="submit">
                        {editar ? 'Actualizar' : 'Registrar'}
                    </button>
                }
                </div>
            </form>
        );
    }
}

export default reduxForm({
    form: "municipio", // identificador unico del formulario
})(FormularioMunicipio);
