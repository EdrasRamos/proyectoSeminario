import { handleActions } from "redux-actions";
import { push } from "react-router-redux";
import { initialize as initializeForm } from "redux-form";
import { NotificationManager } from "react-notifications";
import { api } from "api";

//listar las empresas guardados
const GUARDAR_LISTADO_EMPRESA = "GUARDAR_LISTADO_EMPRESA";
const GUARDAR_REGISTRO_EMPRESA = "GUARDAR_REGISTRO_EMPRESA";

export const listar = () => (dispatch) => {
    api.get("/empresa")
        .then((response) => {
            //console.log("response: ", response);
            dispatch({ type: GUARDAR_LISTADO_EMPRESA, data: response });
        })
        .catch((error) => {
            console.log("error: ", error);
            NotificationManager.error(
                "Ocurrio un error al listar las empresas",
                "ERROR",
                0
            );
        });
}

//export para leer un registro de la base de datos
export const leer = (id) =>(dispatch) => {
    api.get(`empresa/${id}`).then((response)=>{
        console.log("Response: ", response);
        dispatch({type:GUARDAR_REGISTRO_EMPRESA, registro: Response});
        dispatch(initializeForm('empresa', response));
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
export const actualizarEmpresa = () => (dispatch, getStore) => {
    const formData = getStore().form.empresa.values;
    const id = formData.id;
    api.put(`/empresa/${id}`, formData)
        .then((response) => {
            NotificationManager.success(
                "Registro actualizado correctamente",
                "Exito",
                3000
            );
            dispatch(push('/empresa'));
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
    api.eliminar(`/empresa/${id}`).then((response) => {
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
export const registroEmpresa = () => (dispatch, getStore) => {
    const formData = getStore().form.empresa.values;
    api.post("/empresa", formData)
        .then((response) => {
            NotificationManager.success(
                "Empresa registrada correctamente",
                "Exito",
                3000
            );
            dispatch(push('/empresa'));
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
    registroEmpresa,
    actualizarEmpresa,
    eliminar,
    listar,
    leer,
};

export const reducers = {
    [GUARDAR_LISTADO_EMPRESA]: (state, { data }) => {
        return {
            ...state,
            data,
        };
    },

    [GUARDAR_REGISTRO_EMPRESA]: (state, { registro }) => {
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
