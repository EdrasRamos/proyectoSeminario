import { handleActions } from 'redux-actions';
import { createReducer } from '../baseReducer/baseReducer';
import {api} from "api";
import { NotificationManager } from 'react-notifications';
import { push } from "react-router-redux";  
import { initialize as initializeForm } from 'redux-form';

const baseReducer = createReducer(
    'queja', //identificador dentro del estado
    'queja', //Endpoint a donde se realizaran las peticiones
    'QuejaForm', //formulario que utilizará
    '/queja'  //Ruta ala que se irá una vez que ejecute las peticiones
);

const crearQueja = (data) => (dispatch) => {
    console.log("data en formulario: ", data);
    const formData = {
        codigo: data.codigo,
        fecha_emision: data.fecha_emision,
        departamento: data.departamento.value,
        municipio: data.municipio.value,
        empresa: data.empresa.value,
        queja: data.queja
    }

    api.post("queja", formData)
    .then(() => {
        NotificationManager.success('Registro creado', 'Éxito', 3000);
        dispatch(push("/queja"));
    }).catch(() => {
        NotificationManager.error('Error en la creación', 'ERROR');
    }).finally(() => {
    });
};

const leerQueja = (id) => (dispatch) => {
    api.get(`queja/${id}`)
        .then((response) => {
            console.log("data de edición: ", response)
            response.departamento = {value: response.departamento.id, label: response.departamento.nombre};
            response.municipio = {value: response.municipio.id, label: response.municipio.nombre};
            response.empresa = {value: response.empresa.id, label: response.empresa.nombre};
            dispatch(initializeForm("QuejaForm", response));
    }).catch(() => {
    }).finally(() => {
    });
};

const editarQueja = (id, data) => (dispatch) => {
    const formData = {
        codigo: data.codigo,
        fecha_emision: data.fecha_emision,
        departamento: data.departamento.value,
        municipio: data.municipio.value,
        empresa: data.empresa.value,
        queja: data.queja
    }
    
    api.put(`queja/${id}`, formData)
    .then(() => {
        NotificationManager.success(
            'Registro actualizado',
            'Éxito',
            3000
        );
        dispatch(push("/queja"));
    }).catch(() => {
        NotificationManager.error('Error en la edición', 'ERROR', 0);
    }).finally(() => {
    });
};

const ObtenerDepartamentos = (search) => () => {
    return api.get("departamento", {search}).then(data=>{        
        if(data){
            const departamentos = [];
            data.results.forEach(departamento=>{
                departamentos.push({
                    value: departamento.id,
                    label: departamento.nombre
                })
            })
            return departamentos;
        }
    }).catch(error=>{
        console.log("error: ", error);
        return[];
    })
}

const ObtenerMunicipios = (search) => () => {
    return api.get("municipio", {search}).then(data=>{        
        if(data){
            const municipios = [];
            data.results.forEach(municipio=>{
                municipios.push({
                    value: municipio.id,
                    label: municipio.nombre
                })
            })
            return municipios;
        }
    }).catch(error=>{
        console.log("error: ", error);
        return[];
    })
}

const ObtenerEmpresas = (search) => () => {
    return api.get("empresa", {search}).then(data=>{        
        if(data){
            const empresas = [];
            data.results.forEach(empresa=>{
                empresas.push({
                    value: empresa.id,
                    label: empresa.nombre
                })
            })
            return empresas;
        }
    }).catch(error=>{
        console.log("error: ", error);
        return[];
    })
}

export const actions = {
    ...baseReducer.actions,
    crearQueja,
    leerQueja,
    editarQueja,
    ObtenerDepartamentos,
    ObtenerMunicipios,
    ObtenerEmpresas,
}

export const initialState = {
    ...baseReducer.initialState
}

export const reducers ={
    ...baseReducer.reducers
}

export default handleActions(reducers, initialState);