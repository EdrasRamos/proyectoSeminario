import { handleActions } from "redux-actions";
import { push } from "react-router-redux";
import { initialize as initializeForm } from "redux-form";
import { NotificationManager } from "react-notifications";
import { api } from "api";

//listar las empresas guardados
const GUARDAR_LISTADO_MUNICIPIO = "GUARDAR_LISTADO_MUNICIPIO";
const GUARDAR_REGISTRO_MUNICIPIO = "GUARDAR_REGISTRO_MUNICIPIO";

export const listar = () => (dispatch) => {
    api.get("/municipio")
        .then((response) => {
            //console.log("response: ", response);
            dispatch({ type: GUARDAR_LISTADO_MUNICIPIO, data: response });
        })
        .catch((error) => {
            console.log("error: ", error);
            NotificationManager.error(
                "Ocurrio un error al listar los municipios",
                "ERROR",
                0
            );
        });
}

//export para leer un registro de la base de datos
export const leer = (id) =>(dispatch) => {
    api.get(`municipio/${id}`).then((response)=>{
        console.log("Response: ", response);
        dispatch({type:GUARDAR_REGISTRO_MUNICIPIO, registro: Response});
        dispatch(initializeForm('municipio', response));
    }).catch((error) => {
        console.log("error: ", error);
        NotificationManager.error(
            "Ocurrio un error al consultar el registro",
            "ERROR",
            0
        );
    })
}

//Modificar Registro de la DB
export const actualizarMunicipio = () => (dispatch, getStore) => {
    const formData = getStore().form.municipio.values;
    const id = formData.id;
    api.put(`/municipio/${id}`, formData)
        .then((response) => {
            NotificationManager.success(
                "Registro actualizado correctamente",
                "Exito",
                3000
            );
            dispatch(push('/municipio'));
        })
        .catch((error) => {
            console.log("error: ", error);
            NotificationManager.error(
                "Ocurrió un error al actualizar el registro",
                "ERROR",
                0
            );
        })
}

//Eliminar Registros de la base de datos (No se eliminan unicamente cambian de estado)
export const eliminar = (id) => (dispatch) => {
    api.eliminar(`/municipio/${id}`).then((response) => {
        NotificationManager.success(
            "Registro eliminado correctamente",
            "Exito",
            3000
        );
        dispatch(listar());
    })
    .catch((error) => {
        console.log("error: ", error);
        NotificationManager.error(
            "Ocurrió un error al eliminar el registro",
            "ERROR",
            0
        );
    })
}

//Agregar Registro a la DB
export const registroMunicipio = () => (dispatch, getStore) => {
    const formData = getStore().form.municipio.values;
    api.post("/municipio", formData)
        .then((response) => {
            NotificationManager.success(
                "Municipio registrado correctamente",
                "Exito",
                3000
            );
            dispatch(push('/municipio'));
        })
        .catch((error) => {
            console.log("error: ", error);
            NotificationManager.error(
                "Ocurrió un error al guardar",
                "ERROR",
                0
            );
        })
}

export const actions = {
    registroMunicipio,
    actualizarMunicipio,
    eliminar,
    listar,
    leer,
};

export const reducers = {
    [GUARDAR_LISTADO_MUNICIPIO]: (state, { data }) => {
        return {
            ...state,
            data,
        };
    },

    [GUARDAR_REGISTRO_MUNICIPIO]: (state, { registro }) => {
        return {
            ...state,
            registro,
        };
    },
};

export const initialState = {
    loader: false,
    data: null,
    registro: null,
};

export default handleActions(reducers, initialState);
