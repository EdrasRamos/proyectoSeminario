import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { renderField } from "../Utils/renderField/renderField";
import { api } from '../../../utility/api';
import {
    AsyncSelectField,
    renderTextArea,
    renderDatePicker,
} from "Utils/renderField/renderField";

class Formulario extends Component {
    render() {      
        const { handleSubmit, crear, ObtenerDepartamentos, ObtenerMunicipios, ObtenerEmpresas } = this.props;
        const editar = window.location.href.includes('editar');
        let titulo = editar ? 'Editar Queja' : 'Registrar Queja';
        let disabled = false;
        if (crear == false && editar == false) {
            disabled = true;
            titulo = 'Ver Detalles de la Queja';

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
                <br/>
                <label>Fecha</label>
                <Field
                    name="fecha_emision"
                    component={renderDatePicker}
                    disabled={disabled}
                />
                <br/>
                <label>Departamento</label>
                <Field
                    name="departamento"
                    loadOptions={ObtenerDepartamentos}
                    component={AsyncSelectField}
                    disabled = {disabled}
                />
                <br/>
                <label>Municipio</label>
                <Field
                    name="municipio"
                    loadOptions={ObtenerMunicipios}
                    component={AsyncSelectField}
                    disabled={disabled}
                />
                <br />
                <label>Empresa</label>
                <Field
                    name="empresa"
                    loadOptions={ObtenerEmpresas}
                    component={AsyncSelectField}
                    disabled={disabled}
                />
                <br/>
                <label>Queja:</label>
                <Field
                    name="queja"
                    component={renderTextArea}
                    disabled={disabled}
                />
                <br />
                <div className='d-flex flex-row justify-content-end mt-2'>
                <a
                    href='/#/queja'
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
    form: "QuejaForm", // identificador unico del formulario
})(Formulario);
